<?php

namespace App\Http\Controllers\api;

use Illuminate\Routing\Controller;
use App\Models\Page;
use App\Models\PageTracking;
use Illuminate\Http\Request;

class TimeTrackingController extends Controller
{
    public function timeTracking(Request $request) {
        if($request['page'] === '/services') {
            PageTracking::create([
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 2,
            ]);
        } elseif ($request['page'] === '/about-us') {
            PageTracking::create([
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 3,
            ]);
        } elseif ($request['page'] === '/contact-us') {
            PageTracking::create([
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 4,
            ]);
        } else {
            PageTracking::create([
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 1,
            ]);
        }
    }
}
