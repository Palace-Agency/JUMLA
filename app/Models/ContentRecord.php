<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentRecord extends Model
{
    use HasFactory;

    protected $fillable = ['numbers', 'description', 'content_id'];

        public function content()
    {
        return $this->belongsTo(Content::class);
    }
}
