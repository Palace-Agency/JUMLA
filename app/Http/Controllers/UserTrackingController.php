<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\PageTracking;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\Facades\DataTables;

class UserTrackingController extends Controller
{
    function formatTime($milliseconds)
{
    if ($milliseconds < 1000) {
        return "{$milliseconds} ms";
    } elseif ($milliseconds < 60000) {
        return round($milliseconds / 1000, 2) . " seconds";
    } elseif ($milliseconds < 3600000) {
        return round($milliseconds / 60000, 2) . " minutes";
    } else {
        return round($milliseconds / 3600000, 2) . " hours";
    }
}
    public function index() {
        return view('container.tracking.index');
    }


    public function countryStats() {
        $query = PageTracking::selectRaw('country, COUNT(DISTINCT visitor_id) as user_count, AVG(time_spent) as avg_time_spent')
        ->groupBy('country');
          if (request()->ajax()) {
               return DataTables::of($query)
               ->addIndexColumn()
               ->editColumn('avg_time_spent', function ($row) {
                   return $this->formatTime($row->avg_time_spent);
               })
               ->make(true);
          }
    }

    public function pageStats() {
        $query = PageTracking::selectRaw('page_id, SUM(time_spent) as total_time_spent, AVG(time_spent) as avg_time_spent')
        ->with('page')
        ->groupBy('page_id');

        if (request()->ajax()) {
            return DataTables::of($query)
            ->addIndexColumn()
            ->addColumn('page_name', function ($row) {
                return $row->page ? $row->page->name : 'Uknown';
            })
            ->editColumn('total_time_spent', function ($row) {
                return $this->formatTime($row->total_time_spent);
            })
            ->editColumn('avg_time_spent', function ($row) {
                return $this->formatTime($row->avg_time_spent);
            })
            ->make(true);
    }
    }
}
