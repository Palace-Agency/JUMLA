@extends('dashboard')
@section('main-content')
    <div class="row">
        <form id="settings-form">
            @csrf
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <h4 class="card-title">System Settings</h4>
                        <p class="card-title-desc">Configure the settings for your <span class="text-danger">website</span>
                            below.</p>
                        <div class="mb-3 row">
                            <label for="example-text-input" class="col-md-2 col-form-label">Website<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" name="website_name" placeholder="E-jumla"
                                    value="{{ old('website_name', $setting?->website_name) }}" id="website-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-url-input" class="col-md-2 col-form-label">Website URL<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" name="facebook_url" type="url"
                                    placeholder="https://website.com"
                                    value="{{ old('website_url', $setting?->website_url) }}" id="example-url-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="row align-items-center mt-3">
                                <!-- Logo Label -->
                                <label class="col-md-2 col-form-label" for="logo-image">Logo<span
                                        class="text-danger">*</span></label>


                                <!-- Logo Input -->
                                <div class="col-md-8 col-6">
                                    <input id="logo-image"
                                        value="{{ isset($setting) && $setting->logo ? Storage::url('uploads/settings/' . $setting->logo) : '' }}"
                                        type="file" name="logo" accept=".jpg,.jpeg,.png" class="form-control" />
                                </div>

                                <!-- Logo Image Preview -->
                                <div class="col-md-2 col-2 d-flex justify-content-center">
                                    <img id="logo-img-preview"
                                        src="{{ isset($setting) && $setting->logo ? asset('storage/uploads/settings/' . $setting->logo) : '' }}"
                                        alt="Preview"
                                        style="max-width: 3.5rem;display: {{ isset($setting) && $setting->logo ? 'block' : 'none' }}; border: 1px solid #ccc; padding: 2px;" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <div class="row align-items-center mt-3">
                                <!-- Favicon Label -->
                                <label class="col-md-2 col-form-label" for="favicon-image">Favicon<span
                                        class="text-danger">*</span></label>

                                <!-- Favicon Input -->
                                <div class="col-md-8 col-6">
                                    <input id="favicon-image"
                                        value="{{ isset($setting) && $setting->favicon ? Storage::url('uploads/settings/' . $setting->favicon) : '' }}"
                                        type="file" name="favicon" accept=".jpg,.jpeg,.png" class="form-control" />
                                </div>

                                <!-- Favicon Image Preview -->
                                <div class="col-md-2 col-2 d-flex justify-content-center">
                                    <img id="favicon-img-preview"
                                        src="{{ isset($setting) && $setting->favicon ? asset('storage/uploads/settings/' . $setting->favicon) : '' }}"
                                        alt="Preview"
                                        style="max-width: 3.5rem;display: {{ isset($setting) && $setting->favicon ? 'block' : 'none' }}; border: 1px solid #ccc; padding: 2px;" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-email-input" class="col-md-2 col-form-label">Email<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" value="{{ old('email', $setting?->email) }}" name="email"
                                    type="email" placeholder="email@example.com" id="example-email-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-tel-input" class="col-md-2 col-form-label">Telephone<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" value="{{ old('phone', $setting?->phone) }}" name="phone"
                                    type="tel" placeholder="+212 666-668702" id="example-tel-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-url-input" class="col-md-2 col-form-label">Facebook URL<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" name="facebook_url" type="url"
                                    placeholder="https://facebook.com"
                                    value="{{ old('facebook_url', $setting?->facebook_url) }}" id="example-url-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-url-input" class="col-md-2 col-form-label">Tiktok URL<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" value="{{ old('tiktok_url', $setting?->tiktok_url) }}"
                                    name="tiktok_url" type="url" placeholder="https://tiktok.com"
                                    id="example-url-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="example-url-input" class="col-md-2 col-form-label">Instagram URL<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <input class="form-control" value="{{ old('instagram_url', $setting?->instagram_url) }}"
                                    name="instagram_url" type="url" placeholder="https://instagram.com"
                                    id="example-url-input">
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="privacy-classic-editor" class="col-md-2 col-form-label">Privacy and policy<span
                                    class="text-danger">*</span></label>
                            <div class="col-md-10">
                                <textarea name="privacy_policy" id="privacy-classic-editor" class="form-control"
                                    placeholder="Enter your privacy and policy">{{ old('privacy_policy', $setting->privacy_policy ?? '') }}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end col -->
            <div class="d-flex mb-5 justify-content-end">
                <button type="submit" class="btn btn-success"> <i class="uil uil-file-alt"></i> Save </button>
            </div>
        </form>
    </div>
@endsection
@push('scripts')
    <!-- ckeditor -->
    <script src={{ asset('assets/libs/@ckeditor/ckeditor5-build-classic/build/ckeditor.js') }}></script>
    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>
    <script>
        $(document).ready(function() {
            ClassicEditor
                .create(document.querySelector('#privacy-classic-editor'))
                .catch(error => {
                    console.error(error);
                });

            $(document).on('change', '#logo-image', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#logo-img-preview');

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
            $(document).on('change', '#favicon-image', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#favicon-img-preview');

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


            $('#settings-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('settings.store') }}",
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
        })
    </script>
@endpush
