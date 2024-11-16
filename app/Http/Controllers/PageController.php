<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function landingPage() {
        $sections = Section::all();
        // dd($sections);
        return view('container.pages.landing_page', compact('sections'));
    }

    public function servicePage() {
        // $sections = Section::all();
        // dd($sections);
        return view('container.pages.service_page');
    }

    public function aboutUsPage() {
        // $sections = Section::all();
        // dd($sections);
        return view('container.pages.about_us_page');
    }

    public function updateStatus(Request $request)
    {
    $section = Section::find($request->pk);
    if ($section) {
        $section->status = $request->value;
        $section->save();

        return response()->json(['success' => true, 'message' => 'Status updated successfully.']);
    }

    return response()->json(['success' => false, 'message' => 'Section not found.'], 404);
   }

}
