<?php

namespace App\Http\Controllers;

use App\Models\Pixel;
use Illuminate\Http\Request;

class PixelController extends Controller
{
    public function index() {
        $pixels = Pixel::all()->keyBy('social_media');
        return view('container.pixel.index',compact('pixels'));
    }

    public function getPixels() {
        $pixels = Pixel::all();
        return response()->json(['pixels' => $pixels]);
    }


    public function store(Request $request)
    {
        $pixelType = $request->input('type');
        $pixelCode = $request->input($pixelType . '_code');

        if (!$pixelType || !$pixelCode) {
            return response()->json(['success' => false, 'message' => 'Pixel type or code is missing'], 400);
        }

        // Update the pixel based on its type
        $updated = $this->updatePixel($pixelType, $pixelCode);

        if ($updated) {
            return response()->json(['success' => true, 'message' => ucfirst($pixelType) . ' pixel updated successfully.']);
        } else {
            return response()->json(['success' => false, 'message' => ucfirst($pixelType) . ' pixel not found.'], 404);
        }
    }

    private function updatePixel($type, $code)
    {
        return Pixel::where('social_media', $type)->update(['code' => $code]) > 0;
    }


}
