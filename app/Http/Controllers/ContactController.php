<?php

namespace App\Http\Controllers;

use App\Mail\ContactReplyMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller
{
    public function index() {
        $contacts = Contact::latest()->get();
        if (request()->ajax()) {
        return DataTables::of($contacts)
            ->addIndexColumn()
            ->addColumn('name', function ($contact) {
                return $contact->first_name . ' ' . $contact->last_name;
            })
            ->addColumn('email', function ($contact) {
                return $contact->email;
            })
            ->addColumn('message', function ($contact) {
                return $contact->message;
            })
            ->addColumn('replied', function ($contact) {
                if($contact->replied == true) {
                    return '<div class="badge bg-pill bg-success-subtle text-success font-size-12">Replied</div>' ;
                } else {
                    return '<div class="badge bg-pill bg-danger-subtle text-danger font-size-12">Not yet</div>';
                }
            })
            ->addColumn('created_at', function ($contact) {
                return $contact->created_at->diffForHumans();
            })
            ->addColumn('checkbox', function ($row) {
                    return '<input type="checkbox" class="checkbox-input" data-id="' . $row->id . '"><label></label>';
                })
            ->addColumn('action', function ($row) {
                    return '<button data-bs-toggle="modal" data-bs-target="#contactModal' . $row->id . '" class="btn btn-primary"  data-id="' . $row->id . '">Reply</button>';
                })
            ->rawColumns(['action','checkbox','replied'])
            ->make(true);
    }
        return view('container.contacts.index',compact('contacts'));
    }

    public function store(Request $request) {
        Contact::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'phone_number' => $request['phone_number'],
            'message' => $request['message'],
        ]);
    }

    public function reply(Request $request) {
        $validated = $request->validate([
        'id' => 'required|numeric',
        'object' => 'required|string',
        'message' => 'required|string',
        'email' => 'required|email',
    ]);

    $id = trim($validated['id']);
    $object = trim($validated['object']);
    $message = trim($validated['message']);
    $email = trim($validated['email']);

    Mail::to($email)->send(new ContactReplyMail($object, $message));

    $contact = Contact::findOrFail($id);
    $contact->replied = true;
    $contact->save();

    return response()->json(['success' => true, 'message' => 'Email sent successfully!']);
    }
}
