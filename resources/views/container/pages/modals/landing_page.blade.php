<div class="modal fade" id="sectionModal{{ $section->id }}" tabindex="-1"
    aria-labelledby="sectionModalLabel{{ $section->id }}" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="sectionModalLabel{{ $section->id }}">Edit {{ $section->name }} Section</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
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
                                        <input type="text" value="{{ old('title', $header_content->title) }}"
                                            class="form-control" name="title" id="title"
                                            placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="description">Description</label>
                                        <textarea class="form-control" placeholder="Enter the Description" name="description" id="description" rows="3">{{ old('title', $header_content->description) }}</textarea>
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
                                        <input type="text" class="form-control"
                                            value="{{ old('title', $about_us_content?->title) }}" name="title"
                                            id="title" placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="description">Description</label>
                                        <textarea class="form-control" placeholder="Enter the description" name="description" id="description" rows="3">{{ old('description', $about_us_content?->description) }}</textarea>
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
                                        <input type="text" value="{{ old('title', $serivce_content?->title) }}"
                                            class="form-control" name="title" id="service-title"
                                            placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="service-description">Description</label>
                                        <textarea class="form-control" placeholder="Enter the description" name="description" id="service-description"
                                            rows="3">{{ old('description', $serivce_content?->description) }}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Services</label>
                                <div data-repeater-item class="mb-3 row">
                                    <!-- Service Title -->
                                    <div class="col-md-12 mt-3">
                                        <input id="single-service-title"
                                            value="{{ old('title', $track_record_content?->title) }}" type="text"
                                            class="form-control" placeholder="Enter your service title" />
                                    </div>

                                    <!-- Service Description -->
                                    <div class="col-md-12 mt-3">
                                        <textarea class="form-control" id="single-service-description" placeholder="Enter your service description"
                                            rows="3">{{ old('description', $track_record_content?->description) }}</textarea>
                                    </div>

                                    <!-- Image Input with Label -->
                                    <div class="row align-items-center mt-3">
                                        <!-- Icon Label -->
                                        <div class="col-md-1 col-4">
                                            <label class="text-muted" for="image">Icon</label>
                                        </div>

                                        <!-- File Input -->
                                        <div class="col-md-9 col-6">
                                            <input id="single-service-icon" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control" />
                                        </div>

                                        <!-- Service Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="service-img-preview" src="" alt="Preview"
                                                style="max-height: 2.2rem; max-width: 2.2rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input service-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="services-container" class="row mt-4">
                                @isset($serivce_content->services)
                                    @foreach ($serivce_content->services as $service)
                                        <div class="col-md-4 mb-3 ms-3 service-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/uploads/content/landing-page/' . $service->icon) }}"
                                                        alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <h5 class="card-title">{{ $service->title }}</h5>
                                                    <p class="card-text">{{ $service->description }}</p>
                                                    <button class="btn btn-danger btn-sm delete-service"
                                                        data-title="{{ $service->title }}">Delete</button>
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
                                        <input type="text" class="form-control" id="record-title"
                                            placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="record-description">Description</label>
                                        <textarea class="form-control" placeholder="Enter the description" id="record-description" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Records</label>
                                <div data-repeater-item class="mb-3 row">
                                    <!-- Record Title -->
                                    <div class="col-md-12 mt-3">
                                        <input id="single-record-title" name="title" type="text"
                                            class="form-control" placeholder="Enter your record number" />
                                    </div>

                                    <!-- Record Description -->
                                    <div class="col-md-12 mt-3">
                                        <textarea id="single-record-description" name="description" class="form-control"
                                            placeholder="Enter your record description" id="description" rows="3"></textarea>
                                    </div>

                                    <!-- Record Image Input -->
                                    <div class="row align-items-center mt-3">
                                        <!-- Icon Label -->
                                        <div class="col-md-1 col-4">
                                            <label class="text-muted" for="image">Icon</label>
                                        </div>

                                        <!-- File Input -->
                                        <div class="col-md-9 col-6">
                                            <input id="single-record-icon" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control " />
                                        </div>

                                        <!-- Record Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="record-img-preview" src="" alt="Preview"
                                                style="max-height: 2.2rem; max-width: 2.2rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input record-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="records-container" class="row mt-4">
                                @isset($track_records)
                                    @foreach ($track_records as $track_record)
                                        <div class="col-md-4 mb-3 ms-3 service-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/uploads/content/landing-page/' . $track_record->icon) }}"
                                                        alt="Icon" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <h5 class="card-title">{{ $track_record->record_number }}</h5>
                                                    <p class="card-text">{{ $track_record->record_title }}</p>
                                                    <button class="btn btn-danger btn-sm delete-service"
                                                        data-title="{{ $track_record->record_number }}">Delete</button>
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
                                        <input type="text" value="{{ old('title', $location_content->title) }}"
                                            name="title" class="form-control" id="location-title"
                                            placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="location-description">Description</label>
                                        <textarea class="form-control" name="description" placeholder="Enter the description" id="location-description"
                                            rows="3">{{ old('description', $location_content->description) }}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Locations</label>
                                <div data-repeater-item class="mb-3 row">
                                    <!-- Country Input -->
                                    <div class="col-md-12 mt-3">
                                        <input id="single-location-country" type="text" class="form-control"
                                            placeholder="Enter the country" />
                                    </div>

                                    <!-- Flag Input -->
                                    <div class="row align-items-center mt-3">
                                        <!-- Flag Label -->
                                        <div class="col-md-1 col-4">
                                            <label class="text-muted" for="image">Flag</label>
                                        </div>

                                        <!-- File Input -->
                                        <div class="col-md-9 col-6">
                                            <input id="single-location-flag" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control " />
                                        </div>

                                        <!-- Location Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="location-img-preview" src="" alt="Preview"
                                                style="max-width: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input location-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="locations-container" class="row mt-4">
                                @isset($locations)
                                    @foreach ($locations as $location)
                                        <div class="col-md-3 text-center mb-3 location-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src="{{ asset('storage/uploads/content/landing-page/' . $location->flag) }}"
                                                        alt="Flag" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <h5 class="card-country">{{ $location->country }}</h5>
                                                    <button class="btn btn-danger btn-sm delete-location"
                                                        data-country="{{ $location->country }}">Delete</button>
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
                                        <input type="text" value="{{ old('title', $partner_content->title) }}"
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
                                            <input id="single-partner-logo" type="file" accept=".jpg,.jpeg,.png"
                                                class=" form-control " />
                                        </div>

                                        <!-- Partner Image Preview -->
                                        <div class="col-md-2 col-2 d-flex justify-content-center">
                                            <img id="partner-img-preview" src="" alt="Preview"
                                                style="max-width: 3.5rem;max-height: 3.5rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                                        </div>
                                    </div>

                                </div>
                                <input partner-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="partners-container" class="row mt-4">
                                @isset($partner_logos)
                                    @foreach ($partner_logos as $partner)
                                        <div class="col-md-3 text-center mb-3 partner-card">
                                            <div class="card">
                                                <div class="card-body d-flex flex-column align-items-center ">
                                                    <img src="{{ asset('storage/uploads/content/landing-page/' . $partner->logo) }}"
                                                        alt="Logo" class="img-fluid mb-3" style="max-height: 50px;">
                                                    <button class="btn btn-danger btn-sm delete-partner"
                                                        data-logo="{{ $partner->logo }}">Delete</button>
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
                                        <input type="text" name="title"
                                            value="{{ old('title', $faqs_content?->title) }}" class="form-control"
                                            id="faq-title" placeholder="Enter the Title">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <label class="form-label" for="faq-description">Description</label>
                                        <textarea class="form-control" name="description" placeholder="Enter the description" id="faq-description"
                                            rows="3">{{ old('description', $faqs_content?->description) }}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Frequently asked questions </label>
                                <div data-repeater-item class="mb-3 row">
                                    <!-- FAQ Title -->
                                    <div class="col-md-12 mt-3">
                                        <input id="single-faq-title" type="text" class="form-control"
                                            placeholder="Enter the question" />
                                    </div>

                                    <!-- FAQ Description -->
                                    <div class="col-md-12 mt-3">
                                        <textarea class="form-control" id="single-faq-description" placeholder="Enter the answer" rows="3"></textarea>
                                    </div>

                                </div>
                                <input faq-data-create type="button" class="btn btn-success " value="Add" />
                            </div>
                            <div id="faqs-container" class="row mt-4">
                                @isset($faqs)
                                    @foreach ($faqs as $faq)
                                        <div class="col-md-6 mb-3 faq-card">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{{ $faq->question }}</h5>
                                                    <p class="card-text">{{ $faq->answer }}</p>
                                                    <button class="btn btn-danger btn-sm delete-faq"
                                                        data-title="{{ $faq->question }}">Delete</button>
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
            @endif

        </div>
    </div>
</div>
