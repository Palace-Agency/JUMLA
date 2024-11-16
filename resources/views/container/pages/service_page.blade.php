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
    <h2 class="mb-3">Service Page</h2>
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
    <h2 class="my-3">Page Content</h2>
    <div class="card">
        <div class="card-body">
            <div class="service-form-container row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label class="form-label" for="service-title">Title</label>
                        <input type="text" class="form-control" id="service-title" placeholder="Enter Title">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label class="form-label" for="service-description">Short description</label>
                        <textarea class="form-control" id="service-description" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label class="form-label" for="service-description">Description</label>
                        <textarea id="default-editor" style="height: 100px;"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="mb-3">
                        <label class="form-label" for="service-image">Service Image</label>
                        <input id="service_image" type="file" accept=".jpg,.jpeg,.png" class=" form-control " />
                    </div>
                </div>
                <div class="mb-3 col-md-12">
                    <img id="service-img-preview" src="" alt="Preview"
                        style="max-width: 48rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                </div>
            </div>
            <div class="mb-4">
                <label class="form-label">Services</label>
                <div data-repeater-item class="mb-3 row">
                    <!-- Service Title -->
                    <div class="col-md-12 mt-3">
                        <input id="single-service-title" type="text" class="form-control"
                            placeholder="Enter your service title" />
                    </div>

                    <!-- Service Description -->
                    <div class="col-md-12 mt-3">
                        <textarea class="form-control" id="single-service-description" placeholder="Enter your service description"
                            rows="3"></textarea>
                    </div>

                    <!-- Image Input with Label -->
                    <div class="row align-items-center mt-3">

                        <!-- File Input -->
                        <div class="col-md-10 col-6">
                            <input id="single-service-icon" type="file" accept=".jpg,.jpeg,.png" class=" form-control" />
                            <small class="text-muted d-block mb-2">
                                Please select an icon for the service <span class="text-danger">*</span>
                            </small>
                        </div>

                        <!-- Service Image Preview -->
                        <div class="col-md-2 col-2 d-flex justify-content-center">
                            <img id="service-img-preview" src="" alt="Preview"
                                style="max-height: 3.5rem; max-width: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                        </div>
                    </div>

                </div>
                <input service-data-create type="button" class="btn btn-success " value="Add" />
            </div>
            <div id="services-container" class="row mt-4"></div>
        </div>
    </div>
@endsection

@push('scripts')
    <!--tinymce js-->
    <script src={{ asset('assets/libs/tinymce/tinymce.min.js') }}></script>

    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>
    <script>
        $(document).ready(function() {

            let services = [];

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

            $(document).on('change', '#service_image', function() {
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
        });
    </script>
@endpush
