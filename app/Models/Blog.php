<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = ['title','estimate_reading_time', 'tag','slug', 'content', 'image'];

    public function content() {
        return $this->belongsTo(Content::class);
    }

    public function blog_tracking() {
        return $this->hasMany(BlogTracking::class);
    }
}
