<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
public function index()
{
    $blogs = Blog::latest()->get();

    if (request()->ajax()) {
        return view('container.blogs.partials.blogs', compact('blogs'))->render();
    }

    return view('container.blogs.index', compact('blogs'));
}


    public function store(Request $request)
{
    $blog = $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'tag' => 'required|string|max:100',
        'image' => 'required|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    // dd($blog);

if ($request->hasFile('image')) {
    $file = $request->file('image');
    $extension = $file->getClientOriginalExtension();
    $filename = time() . '.' . $extension;
    $file->storeAs('uploads/blog', $filename, 'public');
}


$blog = Blog::create([
    'title' => $request->title,
    'content' => $request->content,
    'tag' => $request->tag,
    'image' => $filename,
]);


    return response()->json(['success' => true, 'blog' => $blog]);
}


public function show(Blog $blog) {
    return view('container.blogs.show', compact('blog'));
}


public function update(Request $request, string $id)
{
    $blog = Blog::find($id);

    if (!$blog) {
        return response()->json([
            'error' => 'Blog not found',
        ], 404);
    }

    $request->validate([
        'title' => 'required|string|max:255',
        'content' => 'required|string',
        'tag' => 'required|string|max:100',
        'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $filename = $blog->image;

    if ($request->hasFile('image')) {
        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $file->storeAs('uploads/blog', $filename, 'public');

        if ($blog->image && Storage::disk('public')->exists("uploads/blog/{$blog->image}")) {
            Storage::disk('public')->delete("uploads/blog/{$blog->image}");
        }
    }

    $blog->update([
        'title' => $request->title,
        'content' => $request->content,
        'tag' => $request->tag,
        'image' => $filename,
    ]);

    return response()->json([
        'success' => 'Blog updated successfully',
        'data' => $blog,
    ], 200);
}


public function destroy($id) {
    $blog = Blog::find($id);

    if (!$blog) {
        return response()->json([
            'error' => 'Blog not found'
        ], 404);
    }

    $blog->delete();

    return response()->json([
        'success' => 'Blog deleted successfully',
    ], 200);
}


}
