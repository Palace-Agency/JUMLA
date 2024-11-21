<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\FAQ;
use App\Models\Location;
use App\Models\Page;
use App\Models\Partner;
use App\Models\Section;
use App\Models\TrackRecord;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function landingPage() {
        $sections = Section::where('page_id',1)->get();
        $page = Page::where('name', 'Landing page')->first();
        $header_content = Content::where('section_id', 1)->first();
        $about_us_content = Content::where('section_id', 2)->first();
        $serivce_content = Content::where('section_id', 3)->with(['services'])->first();
        $track_record_content = Content::where('section_id', 4)->first();
        $track_records = TrackRecord::all();
        $location_content = Content::where('section_id', 5)->first();
        $locations = Location::all();
        $partner_content = Content::where('section_id', 6)->first();
        $partner_logos = Partner::all();
        $blog_content = Content::where('section_id', 7)->first();
        $faqs_content = Content::where('section_id', 8)->first();
        $faqs = FAQ::all();
        $testimonial_content = Content::where('section_id', 9)->first();
        return view('container.pages.landing_page', compact([
            'sections','page','header_content','about_us_content','serivce_content','track_record_content','track_records','location_content','locations','partner_logos'
            ,'partner_content','faqs_content','faqs','blog_content','testimonial_content'
        ]));
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
