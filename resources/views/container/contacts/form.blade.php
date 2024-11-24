<div class="modal fade" id="contactModal{{ $contact->id }}" tabindex="-1"
    aria-labelledby="contactModalLabel{{ $contact->id }}" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel{{ $contact->id }}">Replying to {{ $contact->first_name }}
                    {{ $contact->last_name }}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="reply-form">
                @csrf
                <div class="modal-body">
                    <input type="hidden" name="id" value="{{ $contact->id }}">
                    <input type="hidden" name="email" value="{{ $contact->email }}">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label" for="service-description">Object</label>
                                <input name="object" class="form-control" placeholder="Enter your email object" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="mb-3">
                                <label class="form-label">Message</label>
                                <textarea name="message" class="form-control" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    </div>
</div>
