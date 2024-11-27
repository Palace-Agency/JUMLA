<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pixel extends Model
{
    use HasFactory;
    protected $fillable = ['social_media'];

    public function pixel_information() {
        return $this->hasMany(PixelInformation::class);
    }

}
