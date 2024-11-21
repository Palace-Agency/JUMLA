@foreach ($blogs as $blog)
    <div id="blog-row-{{ $blog->id }}" class="col">
        <div class="card h-100">
            <img src="{{ asset('storage/uploads/blog/' . $blog->image) }}" height="182" width="273"
                class="card-img-top" alt="{{ $blog->title }}" />
            <div class="card-body">
                <div class="d-flex align-items-start gap-3">
                    <h5 class="card-title">{{ $blog->title }}</h5>
                    <p class="badge bg-pill bg-secondary-subtle text-secondary font-size-12">{{ $blog->tag }}</p>
                </div>
                <p class="card-text line-clamp">{{ strip_tags($blog->content) }}</p>
            </div>
            <div class="card-footer d-flex items-center justify-content-between">
                <p class="card-text">Created {{ $blog->created_at->format('d M Y') }}</p>
                <div class="d-flex items-center gap-2">
                    <a href="javascript:void(0);" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasUpdate{{ $blog->id }}"
                        aria-controls="offcanvasUpdate{{ $blog->id }}" class="text-primary"><i
                            class="uil uil-pen font-size-18"></i></a>
                    <a href="javascript:void(0);" data-id="{{ $blog->id }}" class="delete-blog text-danger"><i
                            class="uil uil-trash-alt font-size-18"></i></a>
                    <a href="javascript:void(0);" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasShow{{ $blog->id }}"
                        aria-controls="offcanvasShow{{ $blog->id }}" class="text-secondary"><i
                            class="uil uil-eye font-size-18"></i></a>
                </div>
            </div>
        </div>
    </div>
@endforeach
