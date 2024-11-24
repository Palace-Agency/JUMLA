@extends('dashboard')
@push('stylesheets')
@endpush
@section('main-content')
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Pixels</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    @foreach (['facebook', 'tiktok', 'google', 'snapchat', 'twitter'] as $type)
                        <form id="{{ $type }}-form">
                            @csrf
                            <div class="mb-3 row">
                                <label for="{{ $type }}-code"
                                    class="col-md-2 col-form-label">{{ ucfirst($type) }}</label>
                                <input type="hidden" name="type" value="{{ $type }}">
                                <div class="col-md-8">
                                    <textarea class="form-control" name="{{ $type }}_code" id="{{ $type }}-code"
                                        placeholder="Enter your {{ $type }} pixel here">{{ $pixels[$type]->code ?? '' }}</textarea>
                                </div>
                                <div class="col-md-2">
                                    <button type="submit" class="btn btn-success">Save</button>
                                </div>
                            </div>
                        </form>
                    @endforeach
                </div>
            </div>
        </div> <!-- end col -->
    </div>
@endsection
@push('scripts')
    <script>
        $(document).ready(function() {

            $('#facebook-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('pixels.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.message,
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
            $('#tiktok-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('pixels.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.message,
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
            $('#google-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('pixels.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.message,
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
            $('#snapchat-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('pixels.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.message,
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
            $('#twitter-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('pixels.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.message,
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
