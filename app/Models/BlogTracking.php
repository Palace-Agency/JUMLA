<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogTracking extends Model
{
    use HasFactory;

    protected $fillable = ['visitor_id','time_spent','blog_id','visited_at'];

public function blogs()
{
    return $this->belongsTo(Blog::class, 'blog_id');
}


}
