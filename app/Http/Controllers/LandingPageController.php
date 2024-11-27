<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\ContentRecord;
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
                'meta_title' => trim($request['meta_title']),
                'meta_description' => trim($request['meta_description']),
                'meta_keywords' => trim($request['meta_keywords']),
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
                'title' => trim($request['title']),
                'description' => trim($request['description']),
            ]);
        } else {
            $content = Content::create([
                'title' => trim($request['title']),
                'description' => trim($request['description']),
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
                'title' => trim($request['title']),
                'description' => trim($request['description']),
            ]);
        } else {
            $content = Content::create([
                'title' => trim($request['title']),
                'description' => trim($request['description']),
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
                    'title' => trim($request['title']),
                    'description' => trim($request['description']),
                ]);
            } else {
                $content = Content::create([
                    'title' => trim($request['title']),
                    'description' => trim($request['description']),
                    'section_id' => 3,
                ]);
            }

            if (isset($services) && isset($icons)) {
                foreach ($services as $index => $service) {
                    $title = trim($service['title']);
                    $description = trim($service['description']);
                    $icon = $icons[$index];
                    $existingService = ContentService::where('title', trim($service['title']))->where('content_id', $content->id)->first();
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
                          'title' => trim($request['title']),
                          'description' => trim($request['description']),
                      ]);
                  } else {
                      $content = Content::create([
                          'title' => trim($request['title']),
                          'description' => trim($request['description']),
                          'section_id' => 4,
                      ]);
                  }

                  if (isset($records) && isset($icons)) {
                      foreach ($records as $index => $record) {
                          $number = trim($record['title']);
                          $description = trim($record['description']);
                          $icon = $icons[$index];
                          $existingRecord = TrackRecord::where('record_number', trim($record['title']))->where('record_title', $record['description'])->first();
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
                          'title' => trim($request['title']),
                          'description' => trim($request['description']),
                      ]);
                  } else {
                      $content = Content::create([
                          'title' => trim($request['title']),
                          'description' => trim($request['description']),
                          'section_id' => 5,
                      ]);
                  }

                  if (isset($locations) && isset($icons)) {
                      foreach ($locations as $index => $location) {
                          $country = trim($location['country']);
                          $icon = $icons[$index];
                          $existinglocation = Location::where('country', trim($location['country']))->first();
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
                    'title' => trim($request['title']),
                ]);
            } else {
                $content = Content::create([
                    'title' => trim($request['title']),
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
                'title' => trim($request['title']),
                'description' => trim($request['description']),
            ]);
        } else {
            $content = Content::create([
                'title' => trim($request['title']),
                'description' => trim($request['description']),
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
                    'title' => trim($request['title']),
                    'description' => trim($request['description']),
                ]);
            } else {
                $content = Content::create([
                    'title' => trim($request['title']),
                    'description' => trim($request['description']),
                    'section_id' => 8,
                ]);
            }

            if (isset($request['faqs'])) {
                $faqs = json_decode($request['faqs'], true);

                foreach ($faqs as $faq) {
                    $existingFaq = FAQ::where('question', $faq['question'])->where('answer', $faq['answer'])->first();


                    if ($existingFaq) {
                        $existingFaq->update([
                            'question' => trim($faq['question']),
                            'answer' => trim($faq['answer']),
                        ]);
                    } else {
                        FAQ::create([
                            'question' => trim($faq['question']),
                            'answer' => trim($faq['answer']),
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
                'title' => trim($request['title']),
            ]);
        } else {
            $content = Content::create([
                'title' => trim($request['title']),
                'section_id' => 9,
            ]);
        }

        return response()->json([
            'success' => 'Testimonials data saved successfully',
        ]);
    }


    public function serviceDelete($id) {
        $service = ContentService::find($id);

        if (!$service) {
            return response()->json([
                'error' => 'Service not found',
            ], 404);
        }

        try {
            DB::transaction(function () use ($service) {
                   if (is_string($service->icon)) {
                       $iconPath = storage_path("app/public/uploads/content/landing-page/" . $service->icon);

                       if (File::exists($iconPath)) {
                           File::delete($iconPath);
                       }
                   }

                   $service->delete();
            });

            return response()->json([
                'success' => 'Service deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Service deletion failed: ' . $e->getMessage(),
            ], 500);
        }
    }


    public function recordDelete($id) {
        $record = TrackRecord::find($id);


        if (!$record) {
            return response()->json([
                'error' => 'Record not found',
            ], 404);
        }

        try {
            DB::transaction(function () use ($record) {
                   if (is_string($record->icon)) {
                       $iconPath = storage_path("app/public/uploads/content/landing-page/" . $record->icon);

                       if (File::exists($iconPath)) {
                           File::delete($iconPath);
                       }
                   }

                   $record->delete();
            });

            return response()->json([
                'success' => 'Record deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Record deletion failed: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function locationDelete($id) {
        $location = Location::find($id);


        if (!$location) {
            return response()->json([
                'error' => 'Location not found',
            ], 404);
        }

        try {
            DB::transaction(function () use ($location) {
                   if (is_string($location->flag)) {
                       $iconPath = storage_path("app/public/uploads/content/landing-page/" . $location->flag);

                       if (File::exists($iconPath)) {
                           File::delete($iconPath);
                       }
                   }

                   $location->delete();
            });

            return response()->json([
                'success' => 'Location deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Location deletion failed: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function PartnerDelete($id) {
        $partner = Partner::find($id);


        if (!$partner) {
            return response()->json([
                'error' => 'Partner not found',
            ], 404);
        }

        try {
            DB::transaction(function () use ($partner) {
                   if (is_string($partner->logo)) {
                       $iconPath = storage_path("app/public/uploads/content/landing-page/" . $partner->logo);

                       if (File::exists($iconPath)) {
                           File::delete($iconPath);
                       }
                   }

                   $partner->delete();
            });

            return response()->json([
                'success' => 'Partner deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Partner deletion failed: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function faqDelete($id) {
        $faq = FAQ::find($id);


        if (!$faq) {
            return response()->json([
                'error' => 'FAQ not found',
            ], 404);
        }



        $faq->delete();

        return response()->json([
            'success' => 'FAQ deleted successfully',
        ], 200);

    }


}




