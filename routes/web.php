<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PixelController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SystemSettingController;
use App\Http\Controllers\UserTrackingController;
use App\Models\Pixel;
use App\Models\SystemSetting;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::middleware('auth')->group(function () {
Route::get('/dashboard', [DashboardController::class,'index'])->name('pages.dashboard');
Route::get('/dashboard/page-views', [DashboardController::class, 'getPageViews']);
Route::get('/dashboard/active-users', [DashboardController::class, 'getActiveUsersData']);
Route::get('/dashboard/active-users-by-country', [DashboardController::class, 'getActiveUsersByCountry']);
Route::get('/landing_page',[ PageController::class,'landingPage'])->name('pages.landing_page');
Route::get('/service_page',[ PageController::class,'servicePage'])->name('pages.service_page');
Route::post('/service_page',[ ServiceController::class,'store'])->name('service_page.store');
Route::get('/about_us_page',[ PageController::class,'aboutUsPage'])->name('pages.about_us_page');
Route::post('/about_us_page',[ AboutUsController::class,'store'])->name('about_us_page.store');
Route::post('/landing_page/meta_data',[ LandingPageController::class,'metaData'])->name('landing_page_page.metaDataStore');
Route::post('/landing_page/header',[ LandingPageController::class,'header'])->name('landing_page_page.header');
Route::post('/landing_page/about_us',[ LandingPageController::class,'aboutUs'])->name('landing_page_page.aboutUs');
Route::post('/landing_page/service',[ LandingPageController::class,'service'])->name('landing_page_page.service');
Route::delete('/landing_page/service/{id}',[ LandingPageController::class,'serviceDelete'])->name('landing_page_page.serviceDelete');
Route::delete('/landing_page/record/{id}',[ LandingPageController::class,'recordDelete'])->name('landing_page_page.recordDelete');
Route::delete('/landing_page/location/{id}',[ LandingPageController::class,'locationDelete'])->name('landing_page_page.locationDelete');
Route::delete('/landing_page/partner/{id}',[ LandingPageController::class,'partnerDelete'])->name('landing_page_page.partnerDelete');
Route::delete('/landing_page/faq/{id}',[ LandingPageController::class,'faqDelete'])->name('landing_page_page.faqDelete');
Route::post('/landing_page/record',[ LandingPageController::class,'record'])->name('landing_page_page.record');
Route::post('/landing_page/location',[ LandingPageController::class,'location'])->name('landing_page_page.location');
Route::post('/landing_page/blog',[ LandingPageController::class,'blog'])->name('landing_page_page.blog');
Route::post('/landing_page/testimonial',[ LandingPageController::class,'testimonial'])->name('landing_page_page.testimonial');
Route::post('/landing_page/partner',[ LandingPageController::class,'partner'])->name('landing_page_page.partner');
Route::post('/landing_page/faqs',[ LandingPageController::class,'faqs'])->name('landing_page_page.faqs');
Route::get('/our-blogs',[ BlogController::class,'index'])->name('blogs.index');
Route::post('/our-blogs',[ BlogController::class,'store'])->name('blogs.store');
Route::put('/our-blogs/{id}',[ BlogController::class,'update'])->name('blogs.update');
Route::get('/our-blogs/{blog}',[ BlogController::class,'show'])->name('blogs.show');
Route::delete('/our-blogs/{id}',[ BlogController::class,'destroy'])->name('blogs.destroy');
Route::get('/contacts',[ ContactController::class,'index'])->name('contacts.index');
Route::post('/contacts-reply',[ ContactController::class,'reply'])->name('contacts.reply');
Route::get('/user-tracking',[ UserTrackingController::class,'index'])->name('tracking.index');
Route::get('/country-stats', [UserTrackingController::class, 'countryStats'])->name('country.stats');
Route::get('/page-stats', [UserTrackingController::class, 'pageStats'])->name('page.stats');
Route::get('/pixels', [PixelController::class, 'index'])->name('pixels.index');
Route::post('/pixels', [PixelController::class, 'store'])->name('pixels.store');
Route::delete('/pixels/{id}', [PixelController::class, 'PixelDelete']);
Route::get('/settings', [SystemSettingController::class, 'index'])->name('settings.index');
Route::post('/settings', [SystemSettingController::class, 'store'])->name('settings.store');
Route::post('/landing_page/{section}',[ PageController::class,'update'])->name('sections.update');
Route::post('/sections/update-status', [PageController::class, 'updateStatus'])->name('sections.update.status');
});

require __DIR__.'/auth.php';

Route::get('/{any}', function () {
    $pixels = Pixel::all();
    $settings = SystemSetting::find(1);
    return view('welcome', compact('settings','pixels'));
})->where('any', '.*');
