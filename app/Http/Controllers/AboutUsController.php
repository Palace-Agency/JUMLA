<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\ContentImage;
use App\Models\ContentRecord;
use App\Models\Page;
use App\Models\Service;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class AboutUsController extends Controller
{
public function store(Request $request)
{
    $page = Page::where('name', '=', 'About us')->first();

  try {
        DB::transaction(function () use ($request, $page) {
            if ($page) {
                $page->update([
                    'meta_title' => $request['meta_title'],
                    'meta_description' => $request['meta_description'],
                    'meta_keywords' => $request['meta_keywords'],
                ]);
            }

            $content = Content::where('section_id', 11)->first();

            if ($content) {
                $content->update([
                    'title' => $request['title'],
                    'short_description' => $request['short_description'],
                    'description' => $request['description'],
                ]);
            } else {
                $content = Content::create([
                    'title' => $request['title'],
                    'short_description' => $request['short_description'],
                    'description' => $request['description'],
                    'section_id' => 11,
                ]);
            }

            if (isset($request['images'])) {
                foreach ($request['images'] as $imageData) {
                        $extension = $imageData->getClientOriginalExtension();
                        $imagename = uniqid() . '.' . $extension;
                        $imageData->storeAs('uploads/content/about-us/', $imagename, 'public');
                        ContentImage::create([
                            'image' => $imagename,
                            'content_id' => $content->id,
                        ]);
                }
            }


            if (isset($request['records'])) {
                $records = json_decode($request['records'], true);

                foreach ($records as $record) {
                    $existingRecord = ContentRecord::where('numbers', $record['record_number'])->where('description', $record['record_description'])->first();


                    if ($existingRecord) {
                        $existingRecord->update([
                            'numbers' => $record['record_number'],
                            'description' => $record['record_description'],
                        ]);
                    } else {
                        ContentRecord::create([
                            'numbers' => $record['record_number'],
                            'description' => $record['record_description'],
                            'content_id' => $content->id,
                        ]);
                    }
                }
            }
        });

        return response()->json([
            'success' => 'About us data saved successfully',
        ]);
    } catch (Exception $e) {
        return response()->json(
            [
                'error' => 'About us data creation failed: ' . $e->getMessage(),
            ],
            500,
        );
    }
}

}
