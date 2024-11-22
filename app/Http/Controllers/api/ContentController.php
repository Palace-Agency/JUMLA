<?php

namespace App\Http\Controllers\api;

use Illuminate\Routing\Controller;
use App\Models\ContentImage;
use App\Models\ContentRecord;
use App\Models\Page;
use App\Models\Service;
use Exception;

class ContentController extends Controller
{
    public function homeContent() {
        $content = Page::where('name', 'Landing page')
        ->with([
            'sections.content' => function ($query) {
                $query->with(['images', 'services', 'track_records', 'partners', 'faqs', 'locations']);
            }
        ])
        ->first();
        return response()->json(['content' => $content]);
    }

    public function serviceContent() {
        $content = Page::where('name', 'Services')
        ->with([
            'sections.content' => function ($query) {
                $query->with(['images', 'services']);
            }
        ])
        ->first();
        return response()->json(['content' => $content]);
    }

    public function aboutUsContent() {
        $content = Page::where('name', 'About us')
        ->with([
            'sections.content' => function ($query) {
                $query->with(['images', 'records']);
            }
        ])
        ->first();
        return response()->json(['content' => $content]);
    }
}
