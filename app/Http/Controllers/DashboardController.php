<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Page;
use App\Models\PageTracking;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{

    public function index()
    {
        $pages_number = Page::all()->count();
        $blogs_number = Blog::all()->count();
        $today = Carbon::today();
        $activeUsers = PageTracking::whereDate('visited_at', $today)
        ->distinct('ip_adresse')
        ->count();
        $pageStats = PageTracking::select('page_id', DB::raw('SUM(time_spent) as total_time'), DB::raw('COUNT(*) as views'))
                      ->groupBy('page_id')
                      ->orderBy('views', 'desc')
                      ->get();

        $mostViewedPage = $pageStats->first();


        $currentWeekStart = Carbon::now()->startOfWeek();
        $currentWeekEnd = Carbon::now()->endOfWeek();

        $lastWeekStart = Carbon::now()->subWeek()->startOfWeek();
        $lastWeekEnd = Carbon::now()->subWeek()->endOfWeek();

        // Page views growth calculation
        $currentWeekViews = PageTracking::whereBetween('visited_at', [$currentWeekStart, $currentWeekEnd])->count();
        $lastWeekViews = PageTracking::whereBetween('visited_at', [$lastWeekStart, $lastWeekEnd])->count();

        $growth_percentage = $this->calculateGrowthPercentage($currentWeekViews, $lastWeekViews);

        // Active users growth calculation
        $currentWeekActiveUsers = PageTracking::whereBetween('visited_at', [$currentWeekStart, $currentWeekEnd])
            ->distinct('ip_adresse')
            ->count();

        $lastWeekActiveUsers = PageTracking::whereBetween('visited_at', [$lastWeekStart, $lastWeekEnd])
            ->distinct('ip_adresse')
            ->count();

        $activeUsersGrowth = $this->calculateGrowthPercentage($currentWeekActiveUsers, $lastWeekActiveUsers);

        return view('container.dashboard',compact('activeUsers','pages_number','mostViewedPage','blogs_number','currentWeekViews','growth_percentage','activeUsersGrowth'));
    }


    private function calculateGrowthPercentage($current, $previous)
     {
         if ($previous > 0) {
             return min(round((($current - $previous) / $previous) * 100, 2),100);
         }
         return $current > 0 ? 100 : 0;
     }


}
