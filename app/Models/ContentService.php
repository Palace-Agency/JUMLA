<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentService extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'icon', 'content_id'];

    public function content()
    {
        return $this->belongsTo(Content::class);
    }

}
