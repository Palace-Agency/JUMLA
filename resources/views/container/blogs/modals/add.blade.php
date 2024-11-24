<div class="offcanvas offcanvas-end" style="width: 550px" tabindex="-1" id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Add new blog</h5>
        <button type="button" class="btn-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <form id="blog-form" enctype="multipart/form-data">
            @csrf
            <div class="modal-body">
                <div class="mb-4">
                    <div data-repeater-item class="mb-3 row">
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Title</label>
                            <input name="title" id="blog-title" required type="text" class="form-control"
                                placeholder="Enter your blog title" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Slug</label>
                            <input name="slug" readonly id="blog-slug" type="text" class="form-control"
                                required />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Tag</label>
                            <input name="tag" id="blog-tag" required type="text" class="form-control"
                                placeholder="Enter your blog tag" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Reading time</label>
                            <input name="estimate_reading_time" id="blog-reading-time" required type="text"
                                class="form-control" placeholder="Enter your estimate reading time, Ex: 3 minutes" />
                        </div>
                        <div class="col-md-12 mt-3">
                            <label class="form-label">Content</label>
                            <textarea name="content" id="add-classic-editor" class="form-control" placeholder="Enter your blog content"></textarea>
                        </div>

                        <div class="row align-items-center mt-3">
                            <!-- File Input -->
                            <div class="col-md-12">
                                <label class="form-label">Blog image</label>
                                <input name="image" id="blog-img" required type="file" accept=".jpg,.jpeg,.png"
                                    class=" form-control " />
                            </div>

                            <!-- Blog Image Preview -->
                            <div class="col-md-12 d-flex justify-content-center">
                                <img id="blog-img-preview" src="" alt="Preview"
                                    style="max-width: 30rem; display: none; border: 1px solid #ccc; padding: 2px;" />
                            </div>
                        </div>

                    </div>
                </div>
                <div id="locations-container" class="row"></div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</div>
