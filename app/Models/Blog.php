<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'tag', 'content', 'image'];

    public function content() {
        return $this->belongsTo(Content::class);
    }
}
