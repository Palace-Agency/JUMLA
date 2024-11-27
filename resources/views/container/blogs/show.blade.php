@extends('dashboard')
@push('stylesheets')
@endpush
@section('main-content')
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Blogs</h4>
            </div>
        </div>
    </div>

    <div class="col-12">
        <div class="card p-5">
            <img src="{{ asset('storage/uploads/blog/' . $blog->image) }}"
                style="width:400px; height:200px; object-fit: cover;" class="mx-auto d-block" alt="{{ $blog->title }}" />
            <div class="card-body">
                <div class="d-flex align-items-start gap-3">
                    <a href="{{ route('blogs.show', ['blog' => $blog]) }}" class="text-secondary">
                        <h5 class="card-title">{{ $blog->title }}</h5>
                    </a>
                    <p class="badge bg-pill bg-secondary-subtle text-secondary font-size-12">{{ $blog->tag }}</p>
                </div>
                <p class="card-text line-clamp">{!! $blog->content !!}</p>
            </div>
            <div class="card-footer d-flex items-center justify-content-between">
                <p class="card-text">Created {{ $blog->created_at->format('d M Y') }}</p>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
@endpush
