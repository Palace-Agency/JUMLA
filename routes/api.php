<?php

use App\Http\Controllers\api\BlogController;
use App\Http\Controllers\api\ContentController;
use App\Http\Controllers\api\SettingController;
use App\Http\Controllers\api\TimeTrackingController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PixelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home-content',[ContentController::class,'homeContent']);
Route::get('/service-content',[ContentController::class,'serviceContent']);
Route::get('/aboutus-content',[ContentController::class,'aboutUsContent']);
Route::post('/time-tracking',[TimeTrackingController::class,'timeTracking']);
Route::post('/blog-tracking',[TimeTrackingController::class,'blogTimeTracking']);
Route::post('/contacts',[ContactController::class,'store']);
Route::get('/system-settings',[SettingController::class,'index']);
Route::get('/pixels',[PixelController::class,'getPixels']);
Route::get('/get-Allblogs',[BlogController::class,'getAllblogs']);
Route::get('/get-blogs',[BlogController::class,'getLatestblogs']);
Route::post('/get-blog',[BlogController::class,'getBlog']);
Route::post('/login', [AuthenticatedSessionController::class, 'store']);

