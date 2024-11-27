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
        <div class="col-md-12 mb-3">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                        @foreach (['facebook', 'tiktok', 'google', 'snapchat', 'twitter'] as $type)
                            <li class="nav-item">
                                <a class="nav-link {{ $type === 'facebook' ? 'active' : '' }}" data-bs-toggle="tab"
                                    href="#{{ $type }}" role="tab">
                                    <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                                    <span class="d-none d-sm-block">{{ $type }}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>

                    <div class="tab-content p-3 text-muted">
                        @foreach (['facebook', 'tiktok', 'google', 'snapchat', 'twitter'] as $type)
                            <div class="tab-pane {{ $type === 'facebook' ? 'active' : '' }}" id="{{ $type }}"
                                role="tabpanel">
                                <form id="{{ $type }}-form">
                                    @csrf
                                    <div class="modal-body">
                                        <input type="hidden" value="{{ $type }}" name="type">
                                        <div>
                                            <div class="my-5">
                                                <div data-repeater-item class="mb-3 row">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="mb-3">
                                                                <label class="form-label" for="country">Country
                                                                    targeted</label>
                                                                <input type="text" value="{{ old('country') }}"
                                                                    class="form-control" id="{{ $type }}-country"
                                                                    placeholder="Enter the name of the country you are targeting">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="mb-3">
                                                                <label class="form-label" for="script">script</label>
                                                                <textarea class="form-control" placeholder="Enter the code between the script tag" id="{{ $type }}-script"
                                                                    rows="3">{{ old('script') }}</textarea>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="mb-3">
                                                                <label class="form-label" for="noscript">noscript</label>
                                                                <textarea class="form-control" placeholder="Enter the url inside the src" id="{{ $type }}-noscript"
                                                                    rows="3">{{ old('noscript') }}</textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {{-- <small class="text-muted d-block mb-2">
                                                        The icon should be white for better
                                                        appearance <span class="text-danger">*</span>
                                                    </small> --}}

                                                </div>
                                                <input {{ $type }}-data-create type="button"
                                                    class="btn btn-success " value="Add" />
                                            </div>
                                            <div id="{{ $type }}-container" class="row mt-4">
                                                @foreach ($pixels->where('social_media', $type)->first()?->pixel_information ?? [] as $info)
                                                    <div id="{{ $type }}-row-{{ $info->id }}"
                                                        class="col-md-5 mb-3 gap-3">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h5 class="card-title">{{ $info->country_targeted }}</h5>
                                                                <p class="card-text">Script: {{ $info->script }}</p>
                                                                <p class="card-text">No Script URL: {{ $info->noscript }}
                                                                </p>
                                                                <button type="button"
                                                                    class="btn btn-danger btn-sm delete-{{ $type }}"
                                                                    data-id="{{ $info->id }}">Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                            <div id="{{ $type }}-container" class="row mt-4"></div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script>
        $(document).ready(function() {
            let facebook = [];
            let tiktok = [];
            let google = [];
            let twitter = [];
            let snapchat = [];

            $('[facebook-data-create]').on('click', function() {
                const country = $('#facebook-country').val();
                const script = $('#facebook-script').val();
                const noscript = $('#facebook-noscript').val();



                const fb = {
                    country,
                    script,
                    noscript,
                };
                facebook.push(fb);

                const card = `
                        <div class="col-md-6 mb-3 fb-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${country}</h5>
                                    <p class="card-text">Script : ${script}</p>
                                    <p class="card-text">No script url : ${noscript}</p>
                                    <button class="btn btn-danger btn-sm delete-fb" data-title="${script}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#facebook-container').append(card);


            });

            $(document).on('click', '.delete-fb', function() {
                const script = $(this).data('script');

                $(this).closest('.fb-card').remove();

                fbs = facebook.filter((fb) => fb.script !== script);
            });



            $('[tiktok-data-create]').on('click', function() {
                const country = $('#tiktok-country').val();
                const script = $('#tiktok-script').val();
                const noscript = $('#tiktok-noscript').val();



                const tok = {
                    country,
                    script,
                    noscript,
                };
                tiktok.push(tok);

                const card = `
                        <div class="col-md-6 mb-3 tok-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${country}</h5>
                                    <p class="card-text">Script : ${script}</p>
                                    <p class="card-text">No script url : ${noscript}</p>
                                    <button class="btn btn-danger btn-sm delete-tok" data-title="${script}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#tiktok-container').append(card);


            });

            $(document).on('click', '.delete-tok', function() {
                const script = $(this).data('script');

                $(this).closest('.tok-card').remove();

                toks = facebook.filter((tok) => tok.script !== script);
            });


            $('[google-data-create]').on('click', function() {
                const country = $('#google-country').val();
                const script = $('#google-script').val();
                const noscript = $('#google-noscript').val();



                const go = {
                    country,
                    script,
                    noscript,
                };
                google.push(go);

                const card = `
                        <div class="col-md-6 mb-3 go-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${country}</h5>
                                    <p class="card-text">Script : ${script}</p>
                                    <p class="card-text">No script url : ${noscript}</p>
                                    <button class="btn btn-danger btn-sm delete-go" data-title="${script}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#google-container').append(card);


            });

            $(document).on('click', '.delete-go', function() {
                const script = $(this).data('script');

                $(this).closest('.go-card').remove();

                gos = facebook.filter((go) => go.script !== script);
            });


            $('[snapchat-data-create]').on('click', function() {
                const country = $('#snapchat-country').val();
                const script = $('#snapchat-script').val();
                const noscript = $('#snapchat-noscript').val();



                const chat = {
                    country,
                    script,
                    noscript,
                };
                snapchat.push(chat);

                const card = `
                        <div class="col-md-6 mb-3 chat-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${country}</h5>
                                    <p class="card-text">Script : ${script}</p>
                                    <p class="card-text">No script url : ${noscript}</p>
                                    <button class="btn btn-danger btn-sm delete-chat" data-title="${script}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#snapchat-container').append(card);


            });

            $(document).on('click', '.delete-chat', function() {
                const script = $(this).data('script');

                $(this).closest('.chat-card').remove();

                chats = facebook.filter((chat) => chat.script !== script);
            });


            $('[twitter-data-create]').on('click', function() {
                const country = $('#twitter-country').val();
                const script = $('#twitter-script').val();
                const noscript = $('#twitter-noscript').val();



                const twit = {
                    country,
                    script,
                    noscript,
                };
                twitter.push(twit);

                const card = `
                        <div class="col-md-6 mb-3 twit-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${country}</h5>
                                    <p class="card-text">Script : ${script}</p>
                                    <p class="card-text">No script url : ${noscript}</p>
                                    <button class="btn btn-danger btn-sm delete-twit" data-title="${script}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#twitter-container').append(card);


            });

            $(document).on('click', '.delete-twit', function() {
                const script = $(this).data('script');

                $(this).closest('.twit-card').remove();

                twits = facebook.filter((twit) => twit.script !== script);
            });




            $('#facebook-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');
                formData.append('pixels', JSON.stringify(facebook));


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
                formData.append('pixels', JSON.stringify(tiktok));


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

                formData.append('pixels', JSON.stringify(google));
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

                formData.append('pixels', JSON.stringify(snapchat));
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

                formData.append('pixels', JSON.stringify(twitter));
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

            // Handle Delete Button Click
            $('.delete-facebook').on('click', function() {
                var facebookId = $(this).data('id');
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
                            url: `/pixels/${facebookId}`,
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
                                    $(`#facebook-row-${facebookId}`).remove();
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
            $('.delete-google').on('click', function() {
                var googleId = $(this).data('id');
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
                            url: `/pixels/${googleId}`,
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
                                    $(`#google-row-${googleId}`).remove();
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
            $('.delete-twitter').on('click', function() {
                var twitterId = $(this).data('id');
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
                            url: `/pixels/${twitterId}`,
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
                                    $(`#twitter-row-${twitterId}`).remove();
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
            $('.delete-snapchat').on('click', function() {
                var snapchatId = $(this).data('id');
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
                            url: `/pixels/${snapchatId}`,
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
                                    $(`#snapchat-row-${snapchatId}`).remove();
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
            $('.delete-tiktok').on('click', function() {
                var tiktokId = $(this).data('id');
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
                            url: `/pixels/${tiktokId}`,
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
                                    $(`#tiktok-row-${tiktokId}`).remove();
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

        })
    </script>
@endpush
