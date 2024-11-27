<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PixelInformation extends Model
{
    use HasFactory;

    protected $fillable = ['country_targeted','script','noscript','pixel_id'];

    public function pixels() {
        return $this->belongsTo(Pixel::class);
    }
}
