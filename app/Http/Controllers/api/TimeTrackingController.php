<?php

namespace App\Http\Controllers\api;

use App\Models\Blog;
use App\Models\BlogTracking;
use Illuminate\Routing\Controller;
use App\Models\PageTracking;
use Illuminate\Http\Request;

class TimeTrackingController extends Controller
{
    public function timeTracking(Request $request) {
         $pageIds = [
             '/services' => 2,
             '/about-us' => 3,
             '/contact-us' => 4,
         ];

         $pageId = $pageIds[$request['page']] ?? 1;

         PageTracking::create([
             'country' => $request['country'],
             'time_spent' => $request['timeSpent'],
             'visitor_id' => $request['visitorId'],
             'page_id' => $pageId,
             'visited_at' => now(),
         ]);
    }


    public function blogTimeTracking(Request $request) {
         $blog = Blog::where('slug', $request->blogSlug)->first();

         BlogTracking::create([
             'time_spent' => $request['timeSpent'],
             'visitor_id' => $request['visitorId'],
             'blog_id' => $blog->id,
             'visited_at' => now(),
         ]);
    }
}
