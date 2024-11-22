<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FAQ extends Model
{
    use HasFactory;

    protected $fillable = ['question','answer','content_id'];

    public function content() {
        return $this->belongsTo(Content::class);
    }
}
