@extends('dashboard')
@push('stylesheets')
    <style>
        input,
        textarea {
            border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;
            --bs-border-opacity: 0.25;
        }

        input:focus,
        textarea:focus {
            border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;
            --bs-border-opacity: 1;
        }
    </style>
@endpush
@section('main-content')
    <h2 class="mb-3">Landing Page</h2>
    <div class="row">
        <form action="" method="POST">
            @csrf
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <!-- Meta Title -->
                        <div class="my-3 row">
                            <label for="meta-title" class="col-md-2 col-form-label">Meta Title</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" id="meta-title" name="meta_title"
                                    placeholder="Enter a descriptive meta title" required>
                                <small class="text-muted d-block mb-2">
                                    The meta title appears as the clickable link in search engine results. It should be
                                    short and describe the page's content.
                                </small>
                            </div>
                        </div>

                        <!-- Meta Description -->
                        <div class="my-3 row">
                            <label for="meta-description" class="col-md-2 col-form-label">Meta Description</label>
                            <div class="col-md-10">
                                <textarea class="form-control" name="meta_description" id="meta-description" rows="3"
                                    placeholder="Enter a concise meta description" required></textarea>
                                <small class="text-muted d-block mb-2">
                                    The meta description is a short summary of the page's content. Aim for 150-160
                                    characters to improve SEO.
                                </small>
                            </div>
                        </div>

                        <!-- Meta Keywords -->
                        <div class="my-3 row">
                            <label for="meta-keywords" class="col-md-2 col-form-label">Meta Keywords</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" id="meta-keywords" name="meta_keywords"
                                    placeholder="e.g., keyword1, keyword2, keyword3" required>
                                <small class="text-muted d-block mb-2">
                                    Meta keywords are optional and include a list of relevant keywords for the page,
                                    separated by commas.
                                </small>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="col-md-1 mx-3 mb-3 btn btn-success">Save</button>
                </div>
            </div>
        </form>

    </div>
    <h2 class="my-3">Sections List</h2>
    <div class="row">
        @foreach ($sections as $section)
            <div class="col-md-2 mb-3 text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ $section->name }}</h5>
                        <p class="card-text"><span class="badge bg-success-subtle text-success font-size-12">
                                {{ $section->status ? 'Show' : 'Hide' }}
                            </span></p>
                        <button class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#sectionModal{{ $section->id }}">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    @foreach ($sections as $section)
        @include('container.pages.modals.landing_page', ['section' => $section])
    @endforeach
@endsection

@push('scripts')
    <script>
        $(document).ready(function() {
            let services = [];
            let records = [];
            let locations = [];
            let partners = [];
            let faqs = [];

            $(document).on('change', '#single-service-icon', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#service-img-preview');

                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        preview.attr('src', e.target.result);
                        preview.show();
                    };

                    reader.readAsDataURL(input.files[0]);
                } else {
                    preview.hide();
                }
            });

            $(document).on('change', '#single-record-icon', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#record-img-preview');

                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        preview.attr('src', e.target.result);
                        preview.show();
                    };

                    reader.readAsDataURL(input.files[0]);
                } else {
                    preview.hide();
                }
            });

            $(document).on('change', '#single-location-flag', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#location-img-preview');

                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        preview.attr('src', e.target.result);
                        preview.show();
                    };

                    reader.readAsDataURL(input.files[0]);
                } else {
                    preview.hide();
                }
            });

            $(document).on('change', '#single-partner-logo', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#partner-img-preview');

                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        preview.attr('src', e.target.result);
                        preview.show();
                    };

                    reader.readAsDataURL(input.files[0]);
                } else {
                    preview.hide();
                }
            });


            //Services
            $('[service-data-create]').on('click', function() {
                const title = $('#single-service-title').val();
                const description = $('#single-service-description').val();
                const fileInput = $('#single-service-icon')[0];
                let icon = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        icon = e.target.result;

                        // Create a new service object
                        const service = {
                            title,
                            description,
                            icon
                        };
                        services.push(service);

                        // Append card to the services container
                        const card = `
                        <div class="col-md-4 mb-3 service-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${icon}" alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <button class="btn btn-danger btn-sm delete-service" data-title="${title}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#services-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an icon.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-service', function() {
                const title = $(this).data('title');
                $(this).closest('.service-card').remove();
                services = services.filter((service) => service.title !== title);
            });



            //Records
            $('[record-data-create]').on('click', function() {
                const title = $('#single-record-title').val();
                const description = $('#single-record-description').val();
                const fileInput = $('#single-record-icon')[0];
                let icon = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        icon = e.target.result;

                        // Create a new record object
                        const record = {
                            title,
                            description,
                            icon
                        };
                        records.push(record);

                        // Append card to the records container
                        const card = `
                        <div class="col-md-4 mb-3 record-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${icon}" alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <button class="btn btn-danger btn-sm delete-record" data-title="${title}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#records-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an icon.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-record', function() {
                const title = $(this).data('title');

                // Remove the card
                $(this).closest('.record-card').remove();

                // Remove the record from the array
                records = records.filter((record) => record.title !== title);
            });


            //Locations
            $('[location-data-create]').on('click', function() {
                const country = $('#single-location-country').val();
                const fileInput = $('#single-location-flag')[0];
                let flag = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        flag = e.target.result;

                        // Create a new location object
                        const location = {
                            country,
                            flag
                        };
                        locations.push(location);

                        // Append card to the locations container
                        const card = `
                        <div class="col-md-3 text-center mb-3 location-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${flag}" alt="Flag" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-country">${country}</h5>
                                    <button class="btn btn-danger btn-sm delete-location" data-country="${country}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#locations-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an flag.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-location', function() {
                const country = $(this).data('country');

                // Remove the card
                $(this).closest('.location-card').remove();

                // Remove the location from the array
                locations = locations.filter((location) => location.country !== country);
            });


            //Partners
            $('[partner-data-create]').on('click', function() {
                const fileInput = $('#single-partner-logo')[0];
                let logo = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        logo = e.target.result;

                        // Create a new partner object
                        const partner = {
                            logo
                        };
                        partners.push(partner);

                        // Append card to the partners container
                        const card = `
                            <div class="col-md-3 text-center mb-3 partner-card">
                                <div class="card">
                                    <div class="card-body d-flex flex-column align-items-center ">
                                        <img src="${logo}" alt="Logo" class="img-fluid mb-3" style="max-height: 50px;">
                                        <button class="btn btn-danger btn-sm delete-partner" data-logo="${logo}">Delete</button>
                                    </div>
                                </div>
                            </div>`;
                        $('#partners-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an logo.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-partner', function() {
                const logo = $(this).data('logo');

                // Remove the card
                $(this).closest('.partner-card').remove();

                // Remove the partner from the array
                partners = partners.filter((partner) => partner.logo !== logo);
            });


            //FAQ
            $('[faq-data-create]').on('click', function() {
                const title = $('#single-faq-title').val();
                const description = $('#single-faq-description').val();



                // Create a new faq object
                const faq = {
                    title,
                    description,
                };
                faqs.push(faq);

                // Append card to the faqs container
                const card = `
                        <div class="col-md-6 mb-3 faq-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <button class="btn btn-danger btn-sm delete-faq" data-title="${title}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#faqs-container').append(card);


            });
            // Handle Delete Button Click
            $(document).on('click', '.delete-faq', function() {
                const title = $(this).data('title');

                // Remove the card
                $(this).closest('.faq-card').remove();

                // Remove the faq from the array
                faqs = faqs.filter((faq) => faq.title !== title);
            });
        });
    </script>
@endpush
