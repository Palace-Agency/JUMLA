<?php

namespace App\Http\Controllers\api;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class BlogController extends Controller
{
    public function getAllBlogs() {
        $blogs = Blog::latest()->get();
        return response()->json(['blogs' => $blogs]);
    }

    public function getLatestBlogs() {
        $blogs = Blog::latest()->take(3)->get();
        return response()->json(['blogs' => $blogs]);
    }

    public function getBlog(Request $request) {
        $blog = Blog::where('slug', $request->slug)->first();

    if (!$blog) {
        return response()->json(['message' => 'Blog not found'], 404);
    }

    $relatedBlogs = Blog::where('tag', $blog->tag)
        ->where('id', '!=', $blog->id)
        ->limit(4)
        ->get();
        return response()->json(['blog' => $blog,'relatedBlogs' => $relatedBlogs]);
    }

}
