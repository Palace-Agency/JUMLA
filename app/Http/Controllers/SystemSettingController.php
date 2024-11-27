<?php

namespace App\Http\Controllers;

use App\Models\SystemSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SystemSettingController extends Controller
{
    public function index() {
        $setting = SystemSetting::find(1);
        return view('container.settings.index',compact('setting'));
    }

public function store(Request $request)
{
    $setting = SystemSetting::find(1);

    $setting->website_name = trim($request->website_name);
    $setting->website_url = trim($request->website_url);
    $setting->favicon = trim($request->favicon);
    $setting->email = trim($request->email);
    $setting->phone = trim($request->phone);
    $setting->facebook_url = trim($request->facebook_url);
    $setting->tiktok_url = trim($request->tiktok_url);
    $setting->instagram_url = trim($request->instagram_url);
    $setting->privacy_policy = trim($request->privacy_policy);

    if ($request->hasFile('logo')) {
        if ($setting->logo) {
            $oldLogoPath = storage_path("app/public/uploads/settings/" . $setting->logo);
            if (file_exists($oldLogoPath)) {
                File::delete($oldLogoPath);
            }
        }

        $file = $request->file('logo');
        $extension = $file->getClientOriginalExtension();
        $imagename = time() . '.' . $extension;
        $file->storeAs('uploads/settings/', $imagename, 'public');

        $setting->logo = $imagename;
    }

    if ($request->hasFile('favicon')) {
        if ($setting->favicon) {
            $oldFavIconPath = storage_path("app/public/uploads/settings/" . $setting->favicon);
            if (file_exists($oldFavIconPath)) {
                File::delete($oldFavIconPath);
            }
        }

        $file = $request->file('favicon');
        $extension = $file->getClientOriginalExtension();
        $imagename = time() . '.' . $extension;
        $file->storeAs('uploads/settings/', $imagename, 'public');

        $setting->favicon = $imagename;
    }

    $setting->save();

    return response()->json(['success' => 'Data saved successfully']);
}

}
