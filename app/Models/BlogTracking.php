<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogTracking extends Model
{
    use HasFactory;

    protected $fillable = ['ip_adresse','time_spent','blog_id'];

    public function blogs() {
        return $this->belongsTo(Blog::class);
    }

}
