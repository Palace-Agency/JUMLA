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
    <div class="page-title-box d-flex align-items-center justify-content-between">
        <h4 class="mb-0">Landing page</h4>
    </div>
    <div class="row">
        <form id="meta-form">
            @csrf
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <!-- Meta Title -->
                        <div class="my-3 row">
                            <label for="meta-title" class="col-md-2 col-form-label">Meta Title</label>
                            <div class="col-md-10">
                                <input class="form-control" value="{{ old('meta_title', $page->meta_title) }}"
                                    type="text" id="meta-title" name="meta_title"
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
                                    placeholder="Enter a concise meta description" required>{{ old('meta_description', $page->meta_description) }}</textarea>
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
                                <input class="form-control" value="{{ old('meta_keywords', $page->meta_keywords) }}"
                                    type="text" id="meta-keywords" name="meta_keywords"
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
    <div class="page-title-box d-flex align-items-center justify-content-between">
        <h4 class="mb-0">Sections</h4>
    </div>
    <div class="row">
        <div class="col-md-12 mb-3">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                        @foreach ($sections as $section)
                            <li class="nav-item">
                                <a class="nav-link {{ $section->id === 1 ? 'active' : '' }}" data-bs-toggle="tab"
                                    href="#{{ $section->id }}" role="tab">
                                    <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                                    <span class="d-none d-sm-block">{{ $section->name }}</span>
                                </a>
                            </li>
                        @endforeach
                    </ul>

                    <div class="tab-content p-3 text-muted">
                        @foreach ($sections as $section)
                            <div class="tab-pane {{ $section->id === 1 ? 'active' : '' }}" id="{{ $section->id }}"
                                role="tabpanel">
                                @if ($section->id === 1)
                                    <!-- Fields specific to Header -->
                                    <form id="header-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="title">Title</label>
                                                            <input type="text" required
                                                                value="{{ old('title', $header_content?->title) }}"
                                                                class="form-control" name="title" id="title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="description">Description</label>
                                                            <textarea required class="form-control" placeholder="Enter the Description" name="description" id="description"
                                                                rows="3">{{ old('description', $header_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 2)
                                    <!-- Fields specific to About Us -->
                                    <form id="aboutus-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="title">Title</label>
                                                            <input required type="text" class="form-control"
                                                                value="{{ old('title', $about_us_content?->title) }}"
                                                                name="title" id="title" placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="description">Description</label>
                                                            <textarea required class="form-control" placeholder="Enter the description" name="description" id="description"
                                                                rows="3">{{ old('description', $about_us_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 3)
                                    <!-- Fields specific to Services -->
                                    <form id="service-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="service-form-container row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="service-title">Title</label>
                                                            <input type="text" required
                                                                value="{{ old('title', $serivce_content?->title) }}"
                                                                class="form-control" name="title" id="service-title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="service-description">Description</label>
                                                            <textarea required class="form-control" placeholder="Enter the description" name="description"
                                                                id="service-description" rows="3">{{ old('description', $serivce_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Services</label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <!-- Service Title -->
                                                        <div class="col-md-12 mt-3">
                                                            <input id="single-service-title" type="text"
                                                                class="form-control"
                                                                placeholder="Enter your service title" />
                                                        </div>

                                                        <!-- Service Description -->
                                                        <div class="col-md-12 mt-3">
                                                            <textarea class="form-control" id="single-service-description" placeholder="Enter your service description"
                                                                rows="3"></textarea>
                                                        </div>

                                                        <!-- Image Input with Label -->
                                                        <div class="row align-items-center mt-3">
                                                            <!-- Icon Label -->
                                                            <div class="col-md-1 col-4">
                                                                <label class="text-muted" for="image">Icon</label>
                                                            </div>

                                                            <!-- File Input -->
                                                            <div class="col-md-9 col-6">
                                                                <input id="single-service-icon" type="file"
                                                                    accept=".jpg,.jpeg,.png" class=" form-control" />
                                                                <small class="text-muted d-block mb-2">
                                                                    The icon should be white for better
                                                                    appearance <span class="text-danger">*</span>
                                                                </small>
                                                            </div>

                                                            <!-- Service Image Preview -->
                                                            <div class="col-md-2 col-2 d-flex justify-content-center">
                                                                <img id="service-img-preview" src=""
                                                                    alt="Preview"
                                                                    style="max-height: 2.2rem; max-width: 2.2rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <input service-data-create type="button" class="btn btn-success "
                                                        value="Add" />
                                                </div>
                                                <div id="#" class="row mt-4">
                                                    @isset($serivce_content->services)
                                                        @foreach ($serivce_content->services as $service)
                                                            <div id="service-row-{{ $service->id }}"
                                                                class="col-md-5 mb-3 gap-3">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <img src="{{ asset('storage/uploads/content/landing-page/' . $service->icon) }}"
                                                                            alt="Icon" class="img-fluid mb-3"
                                                                            style="max-height: 50px;">
                                                                        <h5 class="card-title">{{ $service->title }}</h5>
                                                                        <p class="card-text">{{ $service->description }}</p>
                                                                        <button type="button"
                                                                            class="btn btn-danger btn-sm delete-service-bg"
                                                                            data-id="{{ $service->id }}">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 4)
                                    <!-- Fields specific to Track Record -->
                                    <form id="track-record-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="record-form-container row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="record-title">Title</label>
                                                            <input required type="text"
                                                                value="{{ old('title', $track_record_content?->title) }}"
                                                                class="form-control" name="title" id="record-title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="record-description">Description</label>
                                                            <textarea required class="form-control" name="description" placeholder="Enter the description"
                                                                id="record-description" rows="3">
                                                            {{ old('description', $track_record_content?->description) }}
                                                            </textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Records</label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <!-- Record Title -->
                                                        <div class="col-md-12 mt-3">
                                                            <input id="single-record-title" type="text"
                                                                class="form-control"
                                                                placeholder="Enter your record number" />
                                                        </div>

                                                        <!-- Record Description -->
                                                        <div class="col-md-12 mt-3">
                                                            <textarea id="single-record-description" class="form-control" placeholder="Enter your record description"
                                                                id="description" rows="3"></textarea>
                                                        </div>

                                                        <!-- Record Image Input -->
                                                        <div class="row align-items-center mt-3">
                                                            <!-- Icon Label -->
                                                            <div class="col-md-1 col-4">
                                                                <label class="text-muted" for="image">Icon</label>
                                                            </div>

                                                            <!-- File Input -->
                                                            <div class="col-md-9 col-6">
                                                                <input id="single-record-icon" type="file"
                                                                    accept=".jpg,.jpeg,.png" class=" form-control " />
                                                                <small class="text-muted d-block mb-2">
                                                                    The icon should be black for better
                                                                    appearance <span class="text-danger">*</span>
                                                                </small>
                                                            </div>

                                                            <!-- Record Image Preview -->
                                                            <div class="col-md-2 col-2 d-flex justify-content-center">
                                                                <img id="record-img-preview" src=""
                                                                    alt="Preview"
                                                                    style="max-height: 2.2rem; max-width: 2.2rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <input record-data-create type="button" class="btn btn-success "
                                                        value="Add" />
                                                </div>
                                                <div id="records-container" class="row mt-4">
                                                    @isset($track_records)
                                                        @foreach ($track_records as $track_record)
                                                            <div id="record-container-{{ $track_record->id }}"
                                                                class="col-md-4 mb-3 ms-3 service-card">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <img src="{{ asset('storage/uploads/content/landing-page/' . $track_record->icon) }}"
                                                                            alt="Icon" class="img-fluid mb-3"
                                                                            style="max-height: 50px;">
                                                                        <h5 class="card-title">
                                                                            {{ $track_record->record_number }}</h5>
                                                                        <p class="card-text">{{ $track_record->record_title }}
                                                                        </p>
                                                                        <button type="button"
                                                                            class="btn btn-danger btn-sm delete-record-bg"
                                                                            data-id="{{ $track_record->id }}">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 5)
                                    <!-- Fields specific to Locations -->
                                    <form id="location-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="location-form-container row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="location-title">Title</label>
                                                            <input required type="text"
                                                                value="{{ old('title', $location_content?->title) }}"
                                                                name="title" class="form-control" id="location-title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="location-description">Description</label>
                                                            <textarea required class="form-control" name="description" placeholder="Enter the description"
                                                                id="location-description" rows="3">{{ old('description', $location_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Locations</label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <!-- Country Input -->
                                                        <div class="col-md-12 mt-3">
                                                            <input id="single-location-country" type="text"
                                                                class="form-control" placeholder="Enter the country" />
                                                        </div>

                                                        <!-- Flag Input -->
                                                        <div class="row align-items-center mt-3">
                                                            <!-- Flag Label -->
                                                            <div class="col-md-1 col-4">
                                                                <label class="text-muted" for="image">Flag</label>
                                                            </div>

                                                            <!-- File Input -->
                                                            <div class="col-md-9 col-6">
                                                                <input id="single-location-flag" type="file"
                                                                    accept=".jpg,.jpeg,.png" class=" form-control " />
                                                            </div>

                                                            <!-- Location Image Preview -->
                                                            <div class="col-md-2 col-2 d-flex justify-content-center">
                                                                <img id="location-img-preview" src=""
                                                                    alt="Preview"
                                                                    style="max-width: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <input location-data-create type="button" class="btn btn-success "
                                                        value="Add" />
                                                </div>
                                                <div id="locations-container" class="row mt-4">
                                                    @isset($locations)
                                                        @foreach ($locations as $location)
                                                            <div id="location-container-{{ $location->id }}"
                                                                class="col-md-3 text-center mb-3 location-card">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <img src="{{ asset('storage/uploads/content/landing-page/' . $location->flag) }}"
                                                                            alt="Flag" class="img-fluid mb-3"
                                                                            style="max-height: 50px;">
                                                                        <h5 class="card-country">{{ $location->country }}</h5>
                                                                        <button type="button"
                                                                            class="btn btn-danger btn-sm delete-location-bg"
                                                                            data-id="{{ $location->id }}">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 6)
                                    <!-- Fields specific to Partners -->
                                    <form id="partner-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="partner-form-container row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="partner-title">Title</label>
                                                            <input required type="text"
                                                                value="{{ old('title', $partner_content?->title) }}"
                                                                name="title" class="form-control" id="partner-title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <label class="form-label">Partners</label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <!-- Logo Input -->
                                                        <div class="row align-items-center mt-3">
                                                            <!-- Logo Label -->
                                                            <div class="col-md-1 col-4">
                                                                <label class="text-muted" for="image">Logo</label>
                                                            </div>

                                                            <!-- File Input -->
                                                            <div class="col-md-9 col-6">
                                                                <input id="single-partner-logo" type="file"
                                                                    accept=".jpg,.jpeg,.png" class=" form-control " />
                                                            </div>

                                                            <!-- Partner Image Preview -->
                                                            <div class="col-md-2 col-2 d-flex justify-content-center">
                                                                <img id="partner-img-preview" src=""
                                                                    alt="Preview"
                                                                    style="max-width: 3.5rem;max-height: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <input partner-data-create type="button" class="btn btn-success "
                                                        value="Add" />
                                                </div>
                                                <div id="partners-container" class="row mt-4">
                                                    @isset($partner_logos)
                                                        @foreach ($partner_logos as $partner)
                                                            <div id="partner-container-{{ $partner->id }}"
                                                                class="col-md-3 text-center mb-3 partner-card">
                                                                <div class="card">
                                                                    <div
                                                                        class="card-body d-flex flex-column align-items-center ">
                                                                        <img src="{{ asset('storage/uploads/content/landing-page/' . $partner->logo) }}"
                                                                            alt="Logo" class="img-fluid mb-3"
                                                                            style="max-height: 50px;">
                                                                        <button type="button"
                                                                            class="btn btn-danger btn-sm delete-partner-bg"
                                                                            data-id="{{ $partner->id }}">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 7)
                                    <!-- Fields specific to Blogs -->
                                    <form id="blog-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="title">Title</label>
                                                            <input required type="text"
                                                                value="{{ old('title', $blog_content?->title) }}"
                                                                class="form-control" name="title" id="title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="description">Description</label>
                                                            <textarea required class="form-control" placeholder="Enter the Description" name="description" id="description"
                                                                rows="3">{{ old('description', $blog_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif ($section->id === 8)
                                    <!-- Fields specific to FAQ -->
                                    <form id="faq-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="faq-form-container row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="faq-title">Title</label>
                                                            <input required type="text" name="title"
                                                                value="{{ old('title', $faqs_content?->title) }}"
                                                                class="form-control" id="faq-title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label"
                                                                for="faq-description">Description</label>
                                                            <textarea required class="form-control" name="description" placeholder="Enter the description" id="faq-description"
                                                                rows="3">{{ old('description', $faqs_content?->description) }}</textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Frequently asked questions </label>
                                                    <div data-repeater-item class="mb-3 row">
                                                        <!-- FAQ Title -->
                                                        <div class="col-md-12 mt-3">
                                                            <input id="single-faq-title" type="text"
                                                                class="form-control" placeholder="Enter the question" />
                                                        </div>

                                                        <!-- FAQ Description -->
                                                        <div class="col-md-12 mt-3">
                                                            <textarea class="form-control" id="single-faq-description" placeholder="Enter the answer" rows="3"></textarea>
                                                        </div>

                                                    </div>
                                                    <input faq-data-create type="button" class="btn btn-success "
                                                        value="Add" />
                                                </div>
                                                <div id="faqs-container" class="row mt-4">
                                                    @isset($faqs)
                                                        @foreach ($faqs as $faq)
                                                            <div id="faq-container-{{ $faq->id }}"
                                                                class="col-md-6 mb-3 faq-card">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <h5 class="card-title">{{ $faq->question }}</h5>
                                                                        <p class="card-text">{{ $faq->answer }}</p>
                                                                        <button type="button"
                                                                            class="btn btn-danger btn-sm delete-faq-bg"
                                                                            data-id="{{ $faq->id }}">Delete</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        @endforeach
                                                    @endisset
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @elseif($section->id === 9)
                                    <!-- Fields specific to Testimonials -->
                                    <form id="testimonial-form">
                                        @csrf
                                        <div class="modal-body">
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="mb-3">
                                                            <label class="form-label" for="title">Title</label>
                                                            <input required type="text"
                                                                value="{{ old('title', $testimonial_content?->title) }}"
                                                                class="form-control" name="title" id="title"
                                                                placeholder="Enter the Title">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Save</button>
                                        </div>
                                    </form>
                                @endif

                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- @foreach ($sections as $section)
        @include('container.pages.modals.landing_page', ['section' => $section])
    @endforeach --}}
@endsection

@push('scripts')
    <script>
        $(document).ready(function() {
            let services = [];
            let records = [];
            let locations = [];
            let partners = [];
            let faqs = [];

            $(document).on('change', '#single-service-icon', function() {
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

            $(document).on('change', '#single-record-icon', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#record-img-preview');

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

            $(document).on('change', '#single-location-flag', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#location-img-preview');

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

            $(document).on('change', '#single-partner-logo', function() {
                var input = $(this)[0];
                var preview = $(this).closest('.row').find('#partner-img-preview');

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
                let icon = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        icon = e.target.result;
                        image = fileInput.files[0];

                        // Create a new service object
                        const service = {
                            title: title,
                            description: description,
                            icon: image
                        };
                        services.push(service);

                        // Append card to the services container
                        const card = `
                        <div class="col-md-4 mb-3 service-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${icon}" alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <button class="btn btn-danger btn-sm delete-service" data-title="${title}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('##').append(card);
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


            // Handle Delete Button Click
            $('.delete-service-bg').on('click', function() {
                var serviceId = $(this).data('id');
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
                            url: `/landing_page/service/${serviceId}`,
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
                                    $(`#service-row-${serviceId}`).remove();
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


            // Handle Delete Button Click
            $('.delete-record-bg').on('click', function() {
                var recordId = $(this).data('id');
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
                            url: `/landing_page/record/${recordId}`,
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
                                    $(`#record-container-${recordId}`).remove();
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
            // Handle Delete Button Click
            $('.delete-location-bg').on('click', function() {
                var locationId = $(this).data('id');
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
                            url: `/landing_page/location/${locationId}`,
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
                                    $(`#location-container-${locationId}`).remove();
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
            // Handle Delete Button Click
            $('.delete-partner-bg').on('click', function() {
                var partnerId = $(this).data('id');
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
                            url: `/landing_page/partner/${partnerId}`,
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
                                    $(`#partner-container-${partnerId}`).remove();
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
            // Handle Delete Button Click
            $('.delete-faq-bg').on('click', function() {
                var faqId = $(this).data('id');
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
                            url: `/landing_page/faq/${faqId}`,
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
                                    $(`#faq-container-${faqId}`).remove();
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



            //Records
            $('[record-data-create]').on('click', function() {
                const title = $('#single-record-title').val();
                const description = $('#single-record-description').val();
                const fileInput = $('#single-record-icon')[0];
                let icon = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        icon = e.target.result;
                        image = fileInput.files[0];

                        // Create a new record object
                        const record = {
                            title: title,
                            description: description,
                            icon: image
                        };
                        records.push(record);

                        // Append card to the records container
                        const card = `
                        <div class="col-md-4 mb-3 record-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${icon}" alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">${description}</p>
                                    <button class="btn btn-danger btn-sm delete-record" data-title="${title}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#records-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an icon.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-record', function() {
                const title = $(this).data('title');

                // Remove the card
                $(this).closest('.record-card').remove();

                // Remove the record from the array
                records = records.filter((record) => record.title !== title);
            });


            //Locations
            $('[location-data-create]').on('click', function() {
                const country = $('#single-location-country').val();
                const fileInput = $('#single-location-flag')[0];
                let flag = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        flag = e.target.result;
                        image = fileInput.files[0];

                        // Create a new location object
                        const location = {
                            country: country,
                            flag: image
                        };
                        locations.push(location);

                        // Append card to the locations container
                        const card = `
                        <div class="col-md-3 text-center mb-3 location-card">
                            <div class="card">
                                <div class="card-body">
                                    <img src="${flag}" alt="Flag" class="img-fluid mb-3" style="max-height: 50px;">
                                    <h5 class="card-country">${country}</h5>
                                    <button class="btn btn-danger btn-sm delete-location" data-country="${country}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                        $('#locations-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an flag.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-location', function() {
                const country = $(this).data('country');

                // Remove the card
                $(this).closest('.location-card').remove();

                // Remove the location from the array
                locations = locations.filter((location) => location.country !== country);
            });


            //Partners
            $('[partner-data-create]').on('click', function() {
                const fileInput = $('#single-partner-logo')[0];
                let logo = '';

                if (fileInput && fileInput.files && fileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        logo = e.target.result;
                        image = fileInput.files[0];

                        // Create a new partner object
                        const partner = {
                            logo: image
                        };
                        partners.push(partner);

                        // Append card to the partners container
                        const card = `
                            <div class="col-md-3 text-center mb-3 partner-card">
                                <div class="card">
                                    <div class="card-body d-flex flex-column align-items-center ">
                                        <img src="${logo}" alt="Logo" class="img-fluid mb-3" style="max-height: 50px;">
                                        <button class="btn btn-danger btn-sm delete-partner" data-logo="${logo}">Delete</button>
                                    </div>
                                </div>
                            </div>`;
                        $('#partners-container').append(card);
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                } else {
                    alert('Please select an logo.');
                }
            });

            // Handle Delete Button Click
            $(document).on('click', '.delete-partner', function() {
                const logo = $(this).data('logo');

                // Remove the card
                $(this).closest('.partner-card').remove();

                // Remove the partner from the array
                partners = partners.filter((partner) => partner.logo !== logo);
            });


            //FAQ
            $('[faq-data-create]').on('click', function() {
                const question = $('#single-faq-title').val();
                const answer = $('#single-faq-description').val();



                // Create a new faq object
                const faq = {
                    question,
                    answer,
                };
                faqs.push(faq);

                // Append card to the faqs container
                const card = `
                        <div class="col-md-6 mb-3 faq-card">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">${question}</h5>
                                    <p class="card-text">${answer}</p>
                                    <button class="btn btn-danger btn-sm delete-faq" data-title="${question}">Delete</button>
                                </div>
                            </div>
                        </div>`;
                $('#faqs-container').append(card);


            });
            // Handle Delete Button Click
            $(document).on('click', '.delete-faq', function() {
                const title = $(this).data('title');

                // Remove the card
                $(this).closest('.faq-card').remove();

                // Remove the faq from the array
                faqs = faqs.filter((faq) => faq.title !== title);
            });


            $('#meta-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('landing_page_page.metaDataStore') }}",
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

            $('#header-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('landing_page_page.header') }}",
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

            $('#aboutus-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('landing_page_page.aboutUs') }}",
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

                $.ajax({
                    url: "{{ route('landing_page_page.service') }}",
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
                            // $('#services-container').reload();
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

            $('#track-record-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                records.forEach((record, index) => {
                    formData.append(`records[${index}][title]`, record.title);
                    formData.append(`records[${index}][description]`, record.description);
                    formData.append(`records[${index}][icon]`, record.icon);
                });

                $.ajax({
                    url: "{{ route('landing_page_page.record') }}",
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

            $('#location-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');
                let locationsContainer = $('#locations-container')

                submitButton.prop('disabled', true).text('Saving...');

                locations.forEach((location, index) => {
                    formData.append(`locations[${index}][country]`, location.country);
                    formData.append(`locations[${index}][icon]`, location.flag);
                });

                $.ajax({
                    url: "{{ route('landing_page_page.location') }}",
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

            $('#partner-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                partners.forEach((partner) => {
                    formData.append(`logos[]`, partner.logo);
                });

                $.ajax({
                    url: "{{ route('landing_page_page.partner') }}",
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

            $('#blog-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('landing_page_page.blog') }}",
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


            $('#faq-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                formData.append('faqs', JSON.stringify(faqs));

                $.ajax({
                    url: "{{ route('landing_page_page.faqs') }}",
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

            $('#testimonial-form').on('submit', function(e) {
                e.preventDefault();

                let formData = new FormData(this);
                let submitButton = $(this).find('button[type="submit"]');

                submitButton.prop('disabled', true).text('Saving...');

                $.ajax({
                    url: "{{ route('landing_page_page.testimonial') }}",
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
