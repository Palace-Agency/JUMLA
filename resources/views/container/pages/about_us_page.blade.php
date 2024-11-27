@extends('dashboard')
@push('stylesheets')
    <!-- Plugins css -->
    <link href={{ asset('assets/libs/dropzone/min/dropzone.min.css') }} rel="stylesheet" type="text/css" />
    <style>
        input:not(.dropzone-input),
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
                <h4 class="mb-0">About us page</h4>
            </div>
        </div>
    </div>
    <!-- end page title -->
    <form id="about-us-form" enctype="multipart/form-data">
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
                                            <input required type="text" value="{{ old('title', $content->title ?? '') }}"
                                                class="form-control" name="title" id="service-title"
                                                placeholder="Enter your Title">
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-description">Short description</label>
                                            <textarea required class="form-control" name="short_description" placeholder="Enter your Short Description"
                                                id="service-description" rows="3">{{ old('short_description', $content->short_description ?? '') }}</textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="mb-3">
                                            <label class="form-label" for="service-description">Description</label>
                                            <textarea required name="description" name="description" id="description-classic-editor" class="form-control"
                                                placeholder="Enter your description">{{ old('description', $content->description ?? '') }}</textarea>
                                        </div>
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
                                        <h5 class="font-size-16 mb-1">Page Images</h5>
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
                                    <!-- Image Input with Label -->
                                    <div class="row mt-3">
                                        <!-- File Input -->
                                        <div class="col-md-10 col-6">
                                            <input id="single-about-us-img" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control" />
                                            <small class="text-muted d-block mb-2">
                                                Please select 4 images for the about us page <span
                                                    class="text-danger">*</span>
                                            </small>
                                        </div>

                                        <!-- Service Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="about-us-img-preview" src="" alt="Preview"
                                                style="max-height: 3.5rem; max-width: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input aboutus-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="about-us-container" class="row mt-4">
                                @isset($content->images)
                                    @foreach ($content->images as $image)
                                        <div class="col-md-2 text-center mb-3 ms-3 about-us-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/uploads/content/about-us/' . $image->image) }}"
                                                        alt="Icon" class="img-fluid d-block mb-3"
                                                        style="max-height: 100px;">
                                                    <button class="btn btn-danger btn-sm delete-image"
                                                        data-title="{{ $image }}">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endisset
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
                                            <input required value="{{ old('meta_title', $page->meta_title ?? '') }}"
                                                id="metatitle" name="meta_title" type="text" class="form-control"
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
                                            <input required id="metakeywords"
                                                value="{{ old('meta_keywords', $page->meta_keywords ?? '') }}"
                                                name="meta_keywords" type="text" class="form-control"
                                                placeholder="Enter your Meta Keywords">
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
                                    <textarea required class="form-control" name="meta_description" id="metadescription" rows="4"
                                        placeholder="Enter your Meta Description">{{ old('meta_description', $page->meta_description ?? '') }}</textarea>
                                    <small class="text-muted d-block mb-2">
                                        The meta description is a short summary of the page's content. Aim for 150-160
                                        characters to improve SEO.
                                    </small>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <a href="#addproduct-numbers-collapse" class="text-dark  collapsed" data-bs-toggle="collapse"
                            aria-haspopup="true" aria-expanded="false" aria-haspopup="true"
                            aria-controls="addproduct-numbers-collapse">
                            <div class="p-4">

                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-3">
                                        <div class="avatar-xs">
                                            <div class="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                04
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 overflow-hidden">
                                        <h5 class="font-size-16 mb-1">Track records</h5>
                                        <p class="text-muted text-truncate mb-0">Fill all information below</p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                                    </div>

                                </div>

                            </div>
                        </a>

                        <div id="addproduct-numbers-collapse" class="collapse" data-bs-parent="#addproduct-accordion">
                            <div class="p-4 border-top">

                                <div data-repeater-item class="mb-3 row">
                                    <!-- Reecord Title -->
                                    <div class="col-md-12 mt-3">
                                        <input id="single-record-title" type="text" class="form-control"
                                            placeholder="Enter the record number" />
                                    </div>

                                    <!-- Record Description -->
                                    <div class="col-md-12 mt-3">
                                        <textarea class="form-control" id="single-record-description" placeholder="Enter your record description"
                                            rows="3"></textarea>
                                    </div>


                                </div>
                                <input record-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="records-container" class="row mt-4">
                                @isset($content->records)
                                    @foreach ($content->records as $record)
                                        <div class="col-md-2 ms-3 text-center mb-3 record-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ $record->numbers }}</h5>
                                                    <p class="card-text">{{ $record->description }}</p>
                                                    <button class="btn btn-danger btn-sm delete-record"
                                                        data-number="{{ $record->numbers }}">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                @endisset
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex mb-5 justify-content-end">
            <button type="submit" class="btn btn-success"> <i class="uil uil-file-alt"></i> Save </button>
        </div>
        <!-- end row -->

    </form>
@endsection

@push('scripts')
    <!-- Dropzone Js -->
    <script src={{ asset('assets/libs/dropzone/min/dropzone.min.js') }}></script>

    <!-- ckeditor -->
    <script src={{ asset('assets/libs/@ckeditor/ckeditor5-build-classic/build/ckeditor.js') }}></script>

    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>

    <script>
        $(document).ready(function() {

            let records = [];
            let images = [];

            ClassicEditor
                .create(document.querySelector('#description-classic-editor'))
                .catch(error => {
                    console.error(error);
                });

            $(document).on('change', '#single-about-us-img', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#about-us-img-preview');

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


            //About us
            $('[aboutus-data-create]').on('click', function() {
                const fileInput = $('#single-about-us-img')[0];
                let img = '';
                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        img = e.target.result;
                        picture = fileInput.files[0];

                        // Create a new service object
                        const image = {
                            image: picture
                        };
                        images.push(image);

                        // Append card to the services container
                        const card = `
                        <div class="col-md-2 text-center mb-3 ms-3 about-us-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${img}" alt="Icon" class="img-fluid d-block mb-3" style="max-height: 100px;">
                                    <button class="btn btn-danger btn-sm delete-image" data-title="${img}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#about-us-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an icon.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-image', function() {
                const img = $(this).data('title');
                $(this).closest('.about-us-card').remove();
                images = images.filter((image) => image.img !== img);
            });
            //Records
            $('[record-data-create]').on('click', function() {
                const record_number = $('#single-record-title').val();
                const record_description = $('#single-record-description').val();

                // Create a new record object
                const record = {
                    record_number,
                    record_description,
                };
                records.push(record);

                // Append card to the records container
                const card = `
                        <div class="col-md-2 ms-3 text-center mb-3 record-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${record_number}</h5>
                                    <p class="card-text">${record_description}</p>
                                    <button class="btn btn-danger btn-sm delete-record" data-number="${record_number}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#records-container').append(card);

            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-record', function() {
                const number = $(this).data('number');
                $(this).closest('.record-card').remove();
                records = records.filter((record) => record.record_number !== number);
            });

            $('#about-us-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');


                formData.append('records', JSON.stringify(records));

                images.forEach((img) => {
                    formData.append(`images[]`, img.image);
                });

                console.log(formData)

                $.ajax({
                    url: "{{ route('about_us_page.store') }}",
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
