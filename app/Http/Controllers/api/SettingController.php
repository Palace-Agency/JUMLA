<?php

namespace App\Http\Controllers\api;

use Illuminate\Routing\Controller;
use App\Models\Page;
use App\Models\SystemSetting;

class SettingController extends Controller
{
    public function index() {
        $system = SystemSetting::find(1);
        return response()->json(['system' => $system]);
    }

}
