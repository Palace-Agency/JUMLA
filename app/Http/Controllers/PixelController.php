<?php

namespace App\Http\Controllers;

use App\Models\Pixel;
use App\Models\PixelInformation;
use Illuminate\Http\Request;

class PixelController extends Controller
{
    public function index() {
        $pixels = Pixel::with('pixel_information')->get()->keyBy('social_media');
        return view('container.pixel.index',compact('pixels'));
    }

    public function getPixels() {
        $pixels = Pixel::all();
        return response()->json(['pixels' => $pixels]);
    }


    public function store(Request $request)
    {
        $pixelType = $request->input('type');


        $pixel = Pixel::where('social_media', $pixelType)->first();

        $pixels = json_decode($request->input('pixels'), true);

        if ($pixel) {
            foreach ($pixels as $pixelData) {
                PixelInformation::create([
                    'country_targeted' => $pixelData['country'],
                    'script' => $pixelData['script'],
                    'noscript' => $pixelData['noscript'],
                    'pixel_id' => $pixel->id,
                ]);
            }
            return response()->json(['success'=> true,'message' => 'Pixel added succesfully']);

        } else {
            return response()->json(['message' => 'Pixel not found'], 404);
        }

    }

    public function PixelDelete($id) {
        $pixel = PixelInformation::find($id);


        if (!$pixel) {
            return response()->json([
                'error' => 'Pixel not found',
            ], 404);
        }



        $pixel->delete();

        return response()->json([
            'success' => 'Pixel deleted successfully',
        ], 200);

    }



}
