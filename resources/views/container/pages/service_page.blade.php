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
    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Service page</h4>
            </div>
        </div>
    </div>
    <!-- end page title -->

    <form id="service-form" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-lg-12">
                <div id="addproduct-accordion" class="custom-accordion">
                    <div class="card">
                        <a href="#addproduct-billinginfo-collapse" class="text-dark " data-bs-toggle="collapse"
                            aria-expanded="true" aria-controls="addproduct-billinginfo-collapse">
                            <div class="p-4">

                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                01
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="font-size-16 mb-1">Page Content</h5>
                                        <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                    </div>

                                </div>

                            </div>
                        </a>

                        <div id="addproduct-billinginfo-collapse" class="collapse show"
                            data-bs-parent="#addproduct-accordion">
                            <div class="p-4 border-top">
                                <div class="service-form-container row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-title">Title</label>
                                            <input type="text" name="title"
                                                value="{{ old('title', $content->title ?? '') }}" class="form-control"
                                                id="service-title" placeholder="Enter your Title">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-description">Short
                                                description</label>
                                            <textarea class="form-control" name="short_description" placeholder="Enter your Short Description"
                                                id="service-description" rows="3">{{ old('short_description', $content->short_description ?? '') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-description">Description</label>
                                            <textarea name="description" id="description-classic-editor" class="form-control" placeholder="Enter your description">{{ old('description', $content->description ?? '') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-image">Service Image</label>
                                            <input id="service-image"
                                                value="{{ isset($content) && $content->images->first() ? Storage::url('uploads/content/service/' . $content->images->first()->image) : '' }}"
                                                name="image" type="file" accept=".jpg,.jpeg,.png"
                                                class="form-control" />
                                        </div>
                                    </div>
                                    <div class="mb-3 col-md-12">
                                        <img id="service-img-preview"
                                            src="{{ isset($content) && $content->images->first() ? asset('storage/uploads/content/service/' . $content->images->first()->image) : '' }}"
                                            alt="Preview"
                                            style="max-width: 48rem; display: {{ isset($content) && $content->images->first() ? 'block' : 'none' }}; border: 1px solid #ccc; padding: 2px;" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <a href="#addproduct-img-collapse" class="text-dark  collapsed" data-bs-toggle="collapse"
                            aria-haspopup="true" aria-expanded="false" aria-haspopup="true"
                            aria-controls="addproduct-img-collapse">
                            <div class="p-4">

                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                02
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="font-size-16 mb-1">Services</h5>
                                        <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                    </div>

                                </div>

                            </div>
                        </a>

                        <div id="addproduct-img-collapse" class="collapse" data-bs-parent="#addproduct-accordion">
                            <div class="p-4 border-top">
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
                                    <div class="row mt-3">

                                        <!-- File Input -->
                                        <div class="col-md-10 col-6">
                                            <input id="single-service-icon" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control" />
                                            <small class="text-muted d-block mb-2">
                                                Please select an icon for the service <span class="text-danger">*</span>
                                            </small>
                                        </div>

                                        <!-- Service Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="services-img-preview" src="" alt="Preview"
                                                style="max-height: 3.5rem; max-width: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input service-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="services-container" class="row mt-4">
                                @isset($content->services)
                                    @foreach ($content->services as $service)
                                        <div class="col-md-4 mb-3 ms-3 service-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/uploads/content/service/' . $service->icon) }}"
                                                        alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <h5 class="card-title">{{ $service->title }}</h5>
                                                    <p class="card-text">{{ $service->description }}</p>
                                                    <button class="btn btn-danger btn-sm delete-service"
                                                        data-title="{{ $service->title }}">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endisset
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <a href="#addproduct-metadata-collapse" class="text-dark  collapsed" data-bs-toggle="collapse"
                        aria-haspopup="true" aria-expanded="false" aria-haspopup="true"
                        aria-controls="addproduct-metadata-collapse">
                        <div class="p-4">

                            <div class="d-flex align-items-center">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                            03
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1 overflow-hidden">
                                    <h5 class="font-size-16 mb-1">Meta Data</h5>
                                    <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                </div>

                            </div>

                        </div>
                    </a>

                    <div id="addproduct-metadata-collapse" class="collapse" data-bs-parent="#addproduct-accordion">
                        <div class="p-4 border-top">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="metatitle">Meta title</label>
                                        <input id="metatitle" value="{{ old('meta_title', $page->meta_title) }}"
                                            name="meta_title" type="text" class="form-control" name="meta_title"
                                            placeholder="Enter your Meta title">
                                        <small class="text-muted d-block mb-2">
                                            The meta title appears as the clickable link in search engine results. It
                                            should be
                                            short and describe the page's content.
                                        </small>
                                    </div>

                                </div>

                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label class="form-label" for="metakeywords">Meta Keywords</label>
                                        <input id="metakeywords" value="{{ old('meta_keywords', $page->meta_keywords) }}"
                                            name="meta_keywords" type="text" class="form-control"
                                            name="meta_keywords" placeholder="Enter your Meta Keywords">
                                        <small class="text-muted d-block mb-2">
                                            Meta keywords are optional and include a list of relevant keywords for the
                                            page,
                                            separated by commas.
                                        </small>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-0">
                                <label class="form-label" for="metadescription">Meta Description</label>
                                <textarea name="meta_description" class="form-control" id="metadescription" rows="4"
                                    placeholder="Enter your Meta Description">{{ old('meta_description', $page->meta_description) }}</textarea>
                                <small class="text-muted d-block mb-2">
                                    The meta description is a short summary of the page's content. Aim for 150-160
                                    characters to improve SEO.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mb-5 justify-content-end">
            <button type="submit" class="btn btn-success"> <i class="uil uil-file-alt"></i> Save </button>
        </div>


    </form>
@endsection

@push('scripts')
    <!-- ckeditor -->
    <script src={{ asset('assets/libs/@ckeditor/ckeditor5-build-classic/build/ckeditor.js') }}></script>
    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>
    <!-- Notify js -->
    <script src="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.min.js"></script>

    <script src={{ asset('assets/js/pages/ecommerce-add-product.init.js') }}></script>
    <script>
        $(document).ready(function() {

            let services = [];

            ClassicEditor
                .create(document.querySelector('#description-classic-editor'))
                .catch(error => {
                    console.error(error);
                });

            $(document).on('change', '#single-service-icon', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#services-img-preview');

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

            $(document).on('change', '#service-image', function() {
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
                let img = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        img = e.target.result;
                        image = fileInput.files[0];

                        // Create a new service object
                        const service = {
                            title: title,
                            description: description,
                            icon: image
                        };
                        services.push(service);

                        console.log(services)

                        // Append card to the services container
                        const card = `
                           <div class="col-md-4 mb-3 ms-3 service-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="${img}"
                                                        alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <h5 class="card-title">${title}</h5>
                                                    <p class="card-text">${description}</p>
                                                    <button class="btn btn-danger btn-sm delete-service"
                                                        data-title="${title}">Delete</button>
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


            $('#service-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');


                services.forEach((service, index) => {
                    formData.append(`services[${index}][title]`, service.title);
                    formData.append(`services[${index}][description]`, service.description);
                    formData.append(`services[${index}][icon]`, service.icon);
                });

                console.log(formData)
                $.ajax({
                    url: "{{ route('service_page.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: "Data saved successfully!",
                                position: 'right bottom'
                            });
                        }
                    },
                    error: function(xhr) {
                        alert('An error occurred. Please try again.');
                    },
                    complete: function() {
                        submitButton.prop('disabled', false).text('Save');
                    },
                });
            });
        });
    </script>
@endpush
