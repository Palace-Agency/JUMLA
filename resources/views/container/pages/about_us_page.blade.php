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
    <h2 class="mb-3">About Us Page</h2>
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
                        <label class="form-label" for="service-image">About us images</label>
                        <form action="#" class="dropzone">
                            <div class="fallback">
                                <input class="dropzone-input" name="file" type="file" multiple="multiple">
                            </div>
                            <div class="dz-message needsclick">
                                <div class="mb-3">
                                    <i class="display-4 text-muted uil uil-cloud-upload"></i>
                                </div>

                                <h4>Drop files here or click to upload.</h4>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mb-3 col-md-12">
                    <img id="service-img-preview" src="" alt="Preview"
                        style="max-width: 48rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                </div>
            </div>
            <div class="mb-4">
                <label class="form-label">The numbers</label>
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
            <div id="records-container" class="row mt-4"></div>
        </div>
    </div>
@endsection

@push('scripts')
    <!-- Dropzone Js -->
    <script src={{ asset('assets/libs/dropzone/min/dropzone.min.js') }}></script>

    <!--tinymce js-->
    <script src={{ asset('assets/libs/tinymce/tinymce.min.js') }}></script>

    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>

    <script>
        $(document).ready(function() {

            let records = [];

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
                        <div class="col-md-4 mb-3 record-card">
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
        });
    </script>
@endpush
