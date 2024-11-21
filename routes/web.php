<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServiceController;
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

Route::get('/dashboard', function () {
    return view('container.dashboard');
})->name('pages.dashboard');
Route::get('/landing_page',[ PageController::class,'landingPage'])->name('pages.landing_page');
Route::get('/service_page',[ PageController::class,'servicePage'])->name('pages.service_page');
Route::post('/service_page',[ ServiceController::class,'store'])->name('service_page.store');
Route::get('/about_us_page',[ PageController::class,'aboutUsPage'])->name('pages.about_us_page');
Route::post('/about_us_page',[ AboutUsController::class,'store'])->name('about_us_page.store');
Route::get('/blogs',[ BlogController::class,'index'])->name('blogs.index');
Route::post('/blogs',[ BlogController::class,'store'])->name('blogs.store');
Route::put('/blogs/{id}',[ BlogController::class,'update'])->name('blogs.update');
Route::get('/blogs/{blog}',[ BlogController::class,'show'])->name('blogs.show');
Route::delete('/blogs/{id}',[ BlogController::class,'destroy'])->name('blogs.destroy');
Route::get('/contacts',[ ContactController::class,'index'])->name('contacts.index');
Route::post('/landing_page/{section}',[ PageController::class,'update'])->name('sections.update');
Route::post('/sections/update-status', [PageController::class, 'updateStatus'])->name('sections.update.status');


require __DIR__.'/auth.php';

Route::get('/{any?}', function () {
    return view('welcome');
});
