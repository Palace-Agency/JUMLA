<?php

namespace App\Http\Controllers\api;

use Illuminate\Routing\Controller;
use App\Models\PageTracking;
use Illuminate\Http\Request;

class TimeTrackingController extends Controller
{
    public function timeTracking(Request $request) {
            // $pageIds = [
    //     '/services' => 2,
    //     '/about-us' => 3,
    //     '/contact-us' => 4,
    // ];

    // $pageId = $pageIds[$request['page']] ?? 1;

    // PageTracking::create([
    //     'ip_adresse' => $request['ipAdresse'],
    //     'country' => $request['country'],
    //     'time_spent' => $request['timeSpent'],
    //     'page_id' => $pageId,
    //     'visited_at' => now(),
    // ]);
        if($request['page'] === '/services') {
            PageTracking::create([
                'ip_adresse' => $request['ipAdresse'],
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 2,
                'visited_at' => now(),
            ]);
        } elseif ($request['page'] === '/about-us') {
            PageTracking::create([
                'ip_adresse' => $request['ipAdresse'],
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 3,
                'visited_at' => now(),
            ]);
        } elseif ($request['page'] === '/contact-us') {
            PageTracking::create([
                'ip_adresse' => $request['ipAdresse'],
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 4,
                'visited_at' => now(),
            ]);
        } else {
            PageTracking::create([
                'ip_adresse' => $request['ipAdresse'],
                'country' => $request['country'],
                'time_spent' => $request['timeSpent'],
                'page_id' => 1,
                'visited_at' => now(),
            ]);
        }
    }
}
