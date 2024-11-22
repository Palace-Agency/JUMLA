<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\ContentService;
use App\Models\FAQ;
use App\Models\Location;
use App\Models\Page;
use App\Models\Partner;
use App\Models\Service;
use App\Models\TrackRecord;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class LandingPageController extends Controller
{

    public function metaData(Request $request) {
        $page = Page::where('name', '=', 'Landing page')->first();
        if ($page) {
            $page->update([
                'meta_title' => $request['meta_title'],
                'meta_description' => $request['meta_description'],
                'meta_keywords' => $request['meta_keywords'],
            ]);
        }

        return response()->json([
            'success' => 'Meta data saved successfully',
        ]);

    }

    public function header(Request $request) {
        $content = Content::where('section_id', 1)->first();
        if ($content) {
            $content->update([
                'title' => $request['title'],
                'description' => $request['description'],
            ]);
        } else {
            $content = Content::create([
                'title' => $request['title'],
                'description' => $request['description'],
                'section_id' => 1,
            ]);
        }

        return response()->json([
            'success' => 'Header data saved successfully',
        ]);
    }


    public function aboutUs(Request $request) {
        $content = Content::where('section_id', 2)->first();
        if ($content) {
            $content->update([
                'title' => $request['title'],
                'description' => $request['description'],
            ]);
        } else {
            $content = Content::create([
                'title' => $request['title'],
                'description' => $request['description'],
                'section_id' => 2,
            ]);
        }

        return response()->json([
            'success' => 'About us data saved successfully',
        ]);

    }

    public function service(Request $request) {
    $services = $request->input('services');
    $icons = $request->file('services.*.icon');
    try {
        DB::transaction(function () use ($request, $services,$icons) {
            $content = Content::where('section_id', 3)->first();
            if ($content) {
                $content->update([
                    'title' => $request['title'],
                    'description' => $request['description'],
                ]);
            } else {
                $content = Content::create([
                    'title' => $request['title'],
                    'description' => $request['description'],
                    'section_id' => 3,
                ]);
            }

            if (isset($services) && isset($icons)) {
                foreach ($services as $index => $service) {
                    $title = $service['title'];
                    $description = $service['description'];
                    $icon = $icons[$index];
                    $existingService = ContentService::where('title', $service['title'])->where('content_id', $content->id)->first();
                    if ($existingService ) {
                        $iconName = $existingService->icon;
                             $oldIconePath = storage_path("app/public/uploads/content/landing-page/" . $iconName);
                             $fileExists = file_exists($oldIconePath);
                             if ($fileExists) {
                                 File::delete($oldIconePath);
                             }
                             $extension = $icon->getClientOriginalExtension();
                             $iconname = uniqid() . '.' . $extension;
                             $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');

                            $existingService->update([
                            'description' => $description,
                            'icon' => $iconname,
                             ]);
                    }
                    else {
                        $extension = $icon->getClientOriginalExtension();
                        $iconname = uniqid() . '.' . $extension;
                        $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');
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
            'success' => 'Service data saved successfully',
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


    public function record(Request $request) {
          $records = $request->input('records');
          $icons = $request->file('records.*.icon');
          try {
              DB::transaction(function () use ($request, $records,$icons) {
                  $content = Content::where('section_id', 4)->first();
                  if ($content) {
                      $content->update([
                          'title' => $request['title'],
                          'description' => $request['description'],
                      ]);
                  } else {
                      $content = Content::create([
                          'title' => $request['title'],
                          'description' => $request['description'],
                          'section_id' => 4,
                      ]);
                  }

                  if (isset($records) && isset($icons)) {
                      foreach ($records as $index => $record) {
                          $number = $record['title'];
                          $description = $record['description'];
                          $icon = $icons[$index];
                          $existingRecord = TrackRecord::where('record_number', $record['title'])->where('record_title', $record['description'])->first();
                          if ($existingRecord) {
                              $iconName = $existingRecord->icon;
                                   $oldIconePath = storage_path("app/public/uploads/content/landing-page/" . $iconName);
                                   $fileExists = file_exists($oldIconePath);
                                   if ($fileExists) {
                                       File::delete($oldIconePath);
                                   }
                                   $extension = $icon->getClientOriginalExtension();
                                   $iconname = uniqid() . '.' . $extension;
                                   $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');

                                  $existingRecord->update([
                                  'record_number' => $number,
                                  'record_title' => $description,
                                  'icon' => $iconname,
                                   ]);
                          }
                          else {
                              $extension = $icon->getClientOriginalExtension();
                              $iconname = uniqid() . '.' . $extension;
                              $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');
                              TrackRecord::create([
                               'record_number' => $number ,
                               'record_title' => $description,
                               'icon' => $iconname,
                               'content_id' => $content->id,
                              ]);
                          }
                      }
                  }
              });

              return response()->json([
                  'success' => 'Track records data saved successfully',
              ]);
          } catch (Exception $e) {
              return response()->json(
                  [
                      'error' => 'Track records creation failed: ' . $e->getMessage(),
                  ],
                  500,
              );
          }
    }


    public function location(Request $request) {
          $locations = $request->input('locations');
          $icons = $request->file('locations.*.icon');
          try {
              DB::transaction(function () use ($request, $locations,$icons) {
                  $content = Content::where('section_id', 5)->first();
                  if ($content) {
                      $content->update([
                          'title' => $request['title'],
                          'description' => $request['description'],
                      ]);
                  } else {
                      $content = Content::create([
                          'title' => $request['title'],
                          'description' => $request['description'],
                          'section_id' => 5,
                      ]);
                  }

                  if (isset($locations) && isset($icons)) {
                      foreach ($locations as $index => $location) {
                          $country = $location['country'];
                          $icon = $icons[$index];
                          $existinglocation = Location::where('country', $location['country'])->first();
                          if ($existinglocation) {
                                   $iconName = $existinglocation->icon;
                                   $oldIconePath = storage_path("app/public/uploads/content/landing-page/" . $iconName);
                                   $fileExists = file_exists($oldIconePath);
                                   if ($fileExists) {
                                       File::delete($oldIconePath);
                                   }
                                   $extension = $icon->getClientOriginalExtension();
                                   $iconname = uniqid() . '.' . $extension;
                                   $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');

                                  $existinglocation->update([
                                  'country' => $country,
                                  'flag' => $iconname,
                                   ]);
                          }
                          else {
                              $extension = $icon->getClientOriginalExtension();
                              $iconname = uniqid() . '.' . $extension;
                              $icon->storeAs('uploads/content/landing-page/', $iconname, 'public');
                              Location::create([
                               'country' => $country,
                               'flag' => $iconname,
                               'content_id' => $content->id,
                              ]);
                          }
                      }
                  }
              });

              return response()->json([
                  'success' => 'Locations data saved successfully',
              ]);
          } catch (Exception $e) {
              return response()->json(
                  [
                      'error' => 'Locations creation failed: ' . $e->getMessage(),
                  ],
                  500,
              );
          }
    }

    public function partner(Request $request)
    {

      try {
        DB::transaction(function () use ($request) {

            $content = Content::where('section_id', 6)->first();

            if ($content) {
                $content->update([
                    'title' => $request['title'],
                ]);
            } else {
                $content = Content::create([
                    'title' => $request['title'],
                    'section_id' => 6,
                ]);
            }

            if (isset($request['logos'])) {
                foreach ($request['logos'] as $imageData) {
                        $extension = $imageData->getClientOriginalExtension();
                        $imagename = uniqid() . '.' . $extension;
                        $imageData->storeAs('uploads/content/landing-page/', $imagename, 'public');
                        Partner::create([
                            'logo' => $imagename,
                            'content_id' => $content->id,
                        ]);
                }
            }

        });

        return response()->json([
            'success' => 'Partner data saved successfully',
        ]);
    } catch (Exception $e) {
        return response()->json(
            [
                'error' => 'Partner data creation failed: ' . $e->getMessage(),
            ],
            500,
        );
    }
    }


    public function blog(Request $request) {
        $content = Content::where('section_id', 7)->first();
        if ($content) {
            $content->update([
                'title' => $request['title'],
                'description' => $request['description'],
            ]);
        } else {
            $content = Content::create([
                'title' => $request['title'],
                'description' => $request['description'],
                'section_id' => 7,
            ]);
        }

        return response()->json([
            'success' => 'Blog data saved successfully',
        ]);
    }

    public function faqs(Request $request)
    {

      try {
        DB::transaction(function () use ($request) {

            $content = Content::where('section_id', 8)->first();

            if ($content) {
                $content->update([
                    'title' => $request['title'],
                    'description' => $request['description'],
                ]);
            } else {
                $content = Content::create([
                    'title' => $request['title'],
                    'description' => $request['description'],
                    'section_id' => 8,
                ]);
            }

            if (isset($request['faqs'])) {
                $faqs = json_decode($request['faqs'], true);

                foreach ($faqs as $faq) {
                    $existingFaq = FAQ::where('question', $faq['question'])->where('answer', $faq['answer'])->first();


                    if ($existingFaq) {
                        $existingFaq->update([
                            'question' => $faq['question'],
                            'answer' => $faq['answer'],
                        ]);
                    } else {
                        FAQ::create([
                            'question' => $faq['question'],
                            'answer' => $faq['answer'],
                            'content_id' => $content->id,
                        ]);
                    }
                }
            }

        });

        return response()->json([
            'success' => 'FAQ data saved successfully',
        ]);
    } catch (Exception $e) {
        return response()->json(
            [
                'error' => 'FAQ data creation failed: ' . $e->getMessage(),
            ],
            500,
        );
    }
    }

    public function testimonial(Request $request) {
        $content = Content::where('section_id', 9)->first();
        if ($content) {
            $content->update([
                'title' => $request['title'],
            ]);
        } else {
            $content = Content::create([
                'title' => $request['title'],
                'section_id' => 9,
            ]);
        }

        return response()->json([
            'success' => 'Testimonials data saved successfully',
        ]);
    }


}


    //   public function store(Request $request)
    //   {
    //       $page = Page::where('name', '=', 'Services')->first();
    //       $services = $request->input('services');
    //       $icons = $request->file('services.*.icon');
    //       try {
    //           DB::transaction(function () use ($request, $page, $services,$icons) {
    //               if ($page) {
    //                   $page->update([
    //                       'meta_title' => $request['meta_title'],
    //                       'meta_description' => $request['meta_description'],
    //                       'meta_keywords' => $request['meta_keywords'],
    //                   ]);
    //               }

    //               $content = Content::where('section_id', 10)->with('images')->first();
    //               if ($content && $content->images->isNotEmpty()) {
    //                  $existingImage = $content->images->first();

    //                   if ($existingImage) {
    //                       $existingImage->delete();

    //                       $oldImagePath = storage_path("app/public/uploads/content/service/" . $existingImage->image);
    //                       $fileExists = file_exists($oldImagePath);
    //                       if ($fileExists) {
    //                           File::delete($oldImagePath);
    //                       }

    //                       $file = $request->file('image');
    //                       $extension = $file->getClientOriginalExtension();
    //                       $imagename = time() . '.' . $extension;
    //                       $file->storeAs('uploads/content/service/', $imagename, 'public');
    //                   }
    //               } else {
    //                   if ($request->hasFile('image')) {
    //                       $file = $request->file('image');
    //                       $extension = $file->getClientOriginalExtension();
    //                       $imagename = time() . '.' . $extension;
    //                       $file->storeAs('uploads/content/service/', $imagename, 'public');
    //                   }
    //               }

    //               if ($content) {
    //                   $content->update([
    //                       'title' => $request['title'],
    //                       'short_description' => $request['short_description'],
    //                       'description' => $request['description'],
    //                   ]);
    //                   if ($request->hasFile('image')) {
    //                       $content->images()->create(['image' => $imagename]);
    //                     }
    //               } else {
    //                   $content = Content::create([
    //                       'title' => $request['title'],
    //                       'short_description' => $request['short_description'],
    //                       'description' => $request['description'],
    //                       'section_id' => 10,
    //                   ]);
    //                   if ($request->hasFile('image')) {
    //                       $content->images()->create(['image' => $imagename]);
    //                   }
    //               }

    //               if (isset($services) && isset($icons)) {
    //                   foreach ($services as $index => $service) {
    //                       $title = $service['title'];
    //                       $description = $service['description'];
    //                       $icon = $icons[$index];
    //                       $existingService = ContentService::where('title', $service['title'])->where('content_id', $content->id)->first();
    //                       if ($existingService ) {
    //                           $iconName = $existingService->icon;
    //                                $oldIconePath = storage_path("app/public/uploads/content/service/" . $iconName);
    //                                $fileExists = file_exists($oldIconePath);
    //                                if ($fileExists) {
    //                                    File::delete($oldIconePath);
    //                                }
    //                                $extension = $icon->getClientOriginalExtension();
    //                                $iconname = uniqid() . '.' . $extension;
    //                                $icon->storeAs('uploads/content/service/', $iconname, 'public');

    //                               $existingService->update([
    //                               'description' => $description,
    //                               'icon' => $iconname,
    //                                ]);
    //                       }
    //                       else {
    //                           $extension = $icon->getClientOriginalExtension();
    //                           $iconname = uniqid() . '.' . $extension;
    //                           $icon->storeAs('uploads/content/service/', $iconname, 'public');
    //                           ContentService::create([
    //                            'title' => $title ,
    //                            'description' => $description,
    //                            'icon' => $iconname,
    //                            'content_id' => $content->id,
    //                           ]);
    //                       }
    //                   }
    //               }
    //           });

    //           return response()->json([
    //               'success' => 'Service saved successfully',
    //           ]);
    //       } catch (Exception $e) {
    //           return response()->json(
    //               [
    //                   'error' => 'Service creation failed: ' . $e->getMessage(),
    //               ],
    //               500,
    //           );
    //       }
    //   }


