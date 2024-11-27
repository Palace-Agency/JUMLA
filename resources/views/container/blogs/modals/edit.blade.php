<div class="offcanvas offcanvas-end" style="width: 550px" tabindex="-1" id="offcanvasUpdate{{ $blog->id }}"
    aria-labelledby="offcanvasUpdateLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasUpdateLabel">Update Blog</h5>
        <button type="button" class="btn-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <form class="update-blog-form" data-id="{{ $blog->id }}" enctype="multipart/form-data">
            @csrf
            <input type="hidden" name="blog_id" id="blog-id" />

            <div class="modal-body">
                <div class="mb-4">
                    <div data-repeater-item class="mb-3 row">
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Title</label>
                            <input name="title" required type="text" value="{{ old('title', $blog->title) }}"
                                class="form-control edit-blog-slug" placeholder="Enter your blog title" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Slug</label>
                            <input name="slug" required readonly type="text"
                                value="{{ old('slug', $blog->slug) }}" class="form-control edit-blog-slug" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Tag</label>
                            <input name="tag" id="blog-tag" type="text" value="{{ old('tag', $blog->tag) }}"
                                class="form-control" placeholder="Enter your blog tag" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Reading time</label>
                            <input name="estimate_reading_time" id="blog-reading-time"
                                value="{{ old('estimate_reading_time', $blog->estimate_reading_time) }}" required
                                type="text" class="form-control"
                                placeholder="Enter your estimate reading time, Ex: 3 minutes" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Content</label>
                            <textarea name="content" id="classic-editor{{ $blog->id }}" class="form-control editor"
                                placeholder="Enter your blog content">{{ old('content', $blog->content) }}</textarea>
                        </div>

                        <div class="row align-items-center mt-3">
                            <div class="col-md-12">
                                <label class="form-label">Blog image</label>
                                <input required name="image" id="blog-img" type="file" accept=".jpg,.jpeg,.png"
                                    class="form-control" />
                            </div>

                            <div class="col-md-12 d-flex justify-content-center">
                                <img id="blog-img-preview{{ $blog->id }}"
                                    src="{{ asset('storage/uploads/blog/' . $blog->image) }}" alt="Image Preview"
                                    style="max-width: 30rem; display: block; border: 1px solid #ccc; padding: 2px;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</div>
