<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogTracking;
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
        $today = Carbon::today();
        $activeUsers = PageTracking::whereDate('visited_at', $today)
        ->distinct('visitor_id')
        ->count();

        $pageStats = PageTracking::select('page_id', DB::raw('SUM(time_spent) as total_time'), DB::raw('COUNT(*) as views'))
                      ->groupBy('page_id')
                      ->orderBy('views', 'desc')
                      ->get();

        $topBlogs = BlogTracking::select('blog_id', DB::raw('COUNT(DISTINCT visitor_id) as unique_visitors'))
        ->with('blogs')
        ->groupBy('blog_id')
        ->orderBy('unique_visitors', 'desc')
        ->limit(10)
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
            ->distinct('visitor_id')
            ->count();

        $lastWeekActiveUsers = PageTracking::whereBetween('visited_at', [$lastWeekStart, $lastWeekEnd])
            ->distinct('visitor_id')
            ->count();
        $activeUsersGrowth = $this->calculateGrowthPercentage($currentWeekActiveUsers, $lastWeekActiveUsers);



        // Blog growth calculation
        $currentWeekBlogs = BlogTracking::whereBetween('visited_at', [$currentWeekStart, $currentWeekEnd])
            ->distinct('visitor_id')
            ->count();

        $lastWeekBlogs = BlogTracking::whereBetween('visited_at', [$lastWeekStart, $lastWeekEnd])
            ->distinct('visitor_id')
            ->count();
        $BlogsGrowth = $this->calculateGrowthPercentage($currentWeekBlogs, $lastWeekBlogs);


        return view('container.dashboard',compact('topBlogs','activeUsers','pages_number','mostViewedPage','currentWeekViews','growth_percentage','activeUsersGrowth','currentWeekBlogs','BlogsGrowth'));
    }

    public function getPageViews()
{
    $pages = ['Landing Page', 'Contact Us', 'Services', 'About Us'];

    $data = [];

    foreach ($pages as $pageName) {
        $page = Page::where('name', $pageName)->first();

        if ($page) {
            $monthlyViews = PageTracking::where('page_id', $page->id)
                ->select(
                    DB::raw("DATE_FORMAT(visited_at, '%Y-%m') as month"),
                    DB::raw('COUNT(DISTINCT CONCAT(visitor_id, "-", DATE_FORMAT(visited_at, "%Y-%m"))) as views')
                )
                ->groupBy('month')
                ->orderBy('month')
                ->get();

            $data[$pageName] = $monthlyViews->mapWithKeys(function ($item) {
                return [$item->month => $item->views];
            });
        }
    }

    return response()->json($data);
}

public function getActiveUsersData()
{
    $data = PageTracking::select(
            DB::raw("DATE(visited_at) as date"),
            DB::raw('COUNT(DISTINCT visitor_id) as active_users')
        )
        ->groupBy(DB::raw("DATE(visited_at)"))
        ->orderBy('date', 'desc')
        ->limit(30)
        ->get();

    return response()->json($data);
}

public function getActiveUsersByCountry()
{
    $data = PageTracking::select('country', DB::raw('COUNT(DISTINCT visitor_id) as active_users'))
        ->groupBy('country')
        ->orderBy('active_users', 'desc')
        ->get();

    return response()->json($data);
}





    private function calculateGrowthPercentage($current, $previous)
     {
         if ($previous > 0) {
             return min(round((($current - $previous) / $previous) * 100, 2),100);
         }
         return $current > 0 ? 100 : 0;
     }


}
