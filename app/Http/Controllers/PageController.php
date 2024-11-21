<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Page;
use App\Models\Section;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function landingPage() {
        $sections = Section::where('page_id',1)->get();
        // dd($sections);
        return view('container.pages.landing_page', compact('sections'));
    }

    public function servicePage() {
        $content = Content::where('section_id', 10)->with(['images','services'])->first();
        $page = Page::where('name', 'Services')->first();
        return view('container.pages.service_page',compact('content','page'));
    }

    public function aboutUsPage() {
        $content = Content::where('section_id', 11)->with(['images','records'])->first();
        $page = Page::where('name', 'About us')->first();
        // dd($content);
        return view('container.pages.about_us_page',compact('content','page'));
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
