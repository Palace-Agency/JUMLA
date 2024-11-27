@extends('dashboard')
@push('stylesheets')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-notify@1.0.4/dist/simple-notify.css" />
    <link href={{ asset('assets/libs/sweetalert2/sweetalert2.min.css') }} rel="stylesheet" type="text/css" />

    <style>
        .line-clamp {
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    </style>
@endpush
@section('main-content')
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Blogs</h4>
            </div>
        </div>
    </div>
    <button class="btn btn-success waves-effect waves-light mb-3" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="mdi mdi-plus me-1"></i> Add
        blog</button>

    <div class="row row-cols-1 row-cols-md-3 g-4">
        @include('container.blogs.partials.blogs', ['blogs' => $blogs])
    </div>

    @foreach ($blogs as $blog)
        @include('container.blogs.modals.show', ['blog' => $blog])
    @endforeach

    @foreach ($blogs as $blog)
        @include('container.blogs.modals.edit', ['blog' => $blog])
    @endforeach

    @include('container.blogs.modals.add')
@endsection
@push('scripts')
    <!-- ckeditor -->
    <script src={{ asset('assets/libs/@ckeditor/ckeditor5-build-classic/build/ckeditor.js') }}></script>
    <!-- init js -->
    <script src={{ asset('assets/js/pages/form-editor.init.js') }}></script>
    <!-- Bootstrap Toasts Js -->
    <script src={{ asset('assets/js/pages/bootstrap-toasts.init.js') }}></script>
    <script>
        $(document).ready(function() {
            const editors = document.querySelectorAll('.editor');

            editors.forEach((textarea, index) => {
                ClassicEditor
                    .create(textarea)
                    .then(editor => {
                        console.log(`CKEditor initialized for textarea #${index}`);
                    })
                    .catch(error => {
                        console.error('CKEditor initialization error:', error);
                    });
            });

            ClassicEditor
                .create(document.querySelector('#add-classic-editor'))
                .catch(error => {
                    console.error(error);
                });

            $(document).on('change', '#blog-img', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#blog-img-preview');

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


            $('#blog-title').keyup(function() {
                var title = $(this).val();
                var slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                $('#blog-slug').val(slug);
            });

            $(document).on('keyup', '.edit-blog-slug', function() {
                var $titleInput = $(this);
                var title = $titleInput.val();
                var slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

                $titleInput.closest('.col-md-12').next('.col-md-12').find('input[name="slug"]').val(slug);
            });

            $('#blog-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');
                let slug = $('#blog-slug').val();

                $.ajax({
                    url: "{{ route('blogs.store') }}",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            $('#blog-form')[0].reset();
                            $('#blog-img-preview').hide();

                            $('#offcanvasRight').offcanvas('hide');

                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: "Blog added successfully!",
                                position: 'right bottom'
                            });
                            location.reload();
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


            $('.update-blog-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');
                var blogId = $(this).data('id');

                submitButton.prop('disabled', true).text('Updating...');

                $.ajax({
                    url: `/our-blogs/${blogId}`,
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    headers: {
                        'X-HTTP-Method-Override': 'PUT'
                    },
                    success: function(response) {
                        if (response.success) {
                            // $(e.target)[0].reset();

                            // $(`#blog-img-preview${blogId}`).hide();

                            $(`#offcanvasUpdate${blogId}`).offcanvas('hide');

                            new Notify({
                                status: 'success',
                                title: 'Success!',
                                text: response.success,
                                position: 'right bottom'
                            });
                            location.reload();
                        }
                    },
                    error: function(xhr) {
                        console.error('An error occurred. Please try again.');
                        let errors = xhr.responseJSON?.errors;
                        if (errors) {
                            Object.keys(errors).forEach(field => {
                                let errorMessages = errors[field].join(', ');
                                console.error(`${field}: ${errorMessages}`);
                            });
                        }
                    },
                    complete: function() {
                        submitButton.prop('disabled', false).text('Update');
                    },
                });
            });

            $(".delete-blog").on('click', function(e) {
                e.preventDefault();
                var blogId = $(this).data('id');
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: `/landing_page/service/${blogId}`,
                            type: 'DELETE',
                            data: {
                                _token: '{{ csrf_token() }}'
                            },
                            success: function(response) {
                                if (response.success) {
                                    new Notify({
                                        status: 'success',
                                        title: 'Success!',
                                        text: response.success,
                                        position: 'right bottom'
                                    });
                                    $(`#blog-row-${blogId}`).remove();
                                } else {
                                    new Notify({
                                        status: 'error',
                                        title: 'Error!',
                                        text: response.error,
                                        position: 'right bottom'
                                    });
                                }
                            },
                            error: function(xhr, status, error) {
                                console.error(xhr.responseText);
                            }
                        });
                    }
                });
            });


            // function loadBlogs() {
            //     $.ajax({
            //         url: "{{ route('blogs.index') }}",
            //         method: "GET",
            //         success: function(response) {
            //             $('.row-cols-md-4').html(
            //                 response);
            //         },
            //         error: function() {
            //             alert('Failed to load blogs.');
            //         },
            //     });
            // }

        })
    </script>
@endpush
