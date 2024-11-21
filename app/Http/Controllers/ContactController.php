<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller
{
    public function index() {
        $contacts = Contact::all();
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
            ->addColumn('created_at', function ($contact) {
                return $contact->created_at->diffForHumans();
            })
            // ->addColumn('action', function ($contact) {
            //         return view('dashboards.admin.categories.partials.contact_action', [
            //             'contact' => $contact,
            //         ])->render();})
            ->addColumn('checkbox', function ($row) {
                    return '<input type="checkbox" class="checkbox-input" data-id="' . $row->id . '"><label></label>';
                })
            ->rawColumns(['checkbox'])
            ->make(true);
    }
        return view('container.contacts.index');
    }
}
