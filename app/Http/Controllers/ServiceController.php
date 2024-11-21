<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\ContentService;
use App\Models\Page;
use App\Models\Service;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ServiceController extends Controller
{
public function store(Request $request)
{
    $page = Page::where('name', '=', 'Services')->first();
    $services = $request->input('services');
    $icons = $request->file('services.*.icon');
    try {
        DB::transaction(function () use ($request, $page, $services,$icons) {
            if ($page) {
                $page->update([
                    'meta_title' => $request['meta_title'],
                    'meta_description' => $request['meta_description'],
                    'meta_keywords' => $request['meta_keywords'],
                ]);
            }

            $content = Content::where('section_id', 10)->with('images')->first();
            if ($content && $content->images->isNotEmpty()) {
               $existingImage = $content->images->first();

                if ($existingImage) {
                    $existingImage->delete();

                    $oldImagePath = storage_path("app/public/uploads/content/service/" . $existingImage->image);
                    $fileExists = file_exists($oldImagePath);
                    if ($fileExists) {
                        File::delete($oldImagePath);
                    }

                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $imagename = time() . '.' . $extension;
                    $file->storeAs('uploads/content/service/', $imagename, 'public');
                }
            } else {
                if ($request->hasFile('image')) {
                    $file = $request->file('image');
                    $extension = $file->getClientOriginalExtension();
                    $imagename = time() . '.' . $extension;
                    $file->storeAs('uploads/content/service/', $imagename, 'public');
                }
            }

            if ($content) {
                $content->update([
                    'title' => $request['title'],
                    'short_description' => $request['short_description'],
                    'description' => $request['description'],
                ]);
                if ($request->hasFile('image')) {
                    $content->images()->create(['image' => $imagename]);
                  }
            } else {
                $content = Content::create([
                    'title' => $request['title'],
                    'short_description' => $request['short_description'],
                    'description' => $request['description'],
                    'section_id' => 10,
                ]);
                if ($request->hasFile('image')) {
                    $content->images()->create(['image' => $imagename]);
                }
            }

            if (isset($services) && isset($icons)) {
                foreach ($services as $index => $service) {
                    $title = $service['title'];
                    $description = $service['description'];
                    $icon = $icons[$index];
                    $existingService = ContentService::where('title', $service['title'])->where('content_id', $content->id)->first();
                    if ($existingService ) {
                        $iconName = $existingService->icon;
                             $oldIconePath = storage_path("app/public/uploads/content/service/" . $iconName);
                             $fileExists = file_exists($oldIconePath);
                             if ($fileExists) {
                                 File::delete($oldIconePath);
                             }
                             $extension = $icon->getClientOriginalExtension();
                             $iconname = uniqid() . '.' . $extension;
                             $icon->storeAs('uploads/content/service/', $iconname, 'public');

                            $existingService->update([
                            'description' => $description,
                            'icon' => $iconname,
                             ]);
                    }
                    else {
                        $extension = $icon->getClientOriginalExtension();
                        $iconname = uniqid() . '.' . $extension;
                        $icon->storeAs('uploads/content/service/', $iconname, 'public');
                        ContentService::create([
                         'title' => $title ,
                         'description' => $description,
                         'icon' => $iconname,
                         'content_id' => $content->id,
                        ]);
                    }
                }
            }
        });

        return response()->json([
            'success' => 'Service saved successfully',
        ]);
    } catch (Exception $e) {
        return response()->json(
            [
                'error' => 'Service creation failed: ' . $e->getMessage(),
            ],
            500,
        );
    }
}



}
