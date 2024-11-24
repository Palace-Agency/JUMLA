<div class="offcanvas offcanvas-end" style="width: 600px" tabindex="-1" id="offcanvasShow{{ $blog->id }}"
    aria-labelledby="offcanvasShowLabel">
    <div class="offcanvas-header">
        {{-- <h5 id="offcanvasShowLabel">Blog About {{ $blog->title }}</h5> --}}
        <button type="button" class="btn-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="modal-body">
            <img src="{{ asset('storage/uploads/blog/' . $blog->image) }}" height="300" width="273"
                class="card-img-top" alt="{{ $blog->title }}" />
            <div class="card-body mt-3">
                <div class="d-flex align-items-start justify-content-between">
                    <div class="d-flex items-center gap-3">
                        <h5 class="card-title">{{ $blog->title }}</h5>
                        <p class="badge bg-pill bg-secondary-subtle text-secondary font-size-12">{{ $blog->tag }}</p>
                    </div>
                </div>
                <div class="  border border-bottom-0 my-4 mx-auto"
                    style="border-color: #80808054 !important;width: 70% !important;"></div>
                <p class="card-text">{!! $blog->content !!}</p>
                <div class="mt-5 d-flex items-center justify-content-between">
                    <p class="card-text">Read in {{ $blog->estimate_reading_time }}</p>
                    <p class="card-text">Created {{ $blog->created_at->format('d M Y') }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
