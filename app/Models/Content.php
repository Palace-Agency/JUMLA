<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'short_description', 'description', 'image', 'section_id'];

    public function images()
    {
        return $this->hasMany(ContentImage::class);
    }

    public function services()
    {
        return $this->hasMany(ContentService::class);
    }

    public function records()
    {
        return $this->hasMany(ContentRecord::class);
    }

    public function track_records() {
        return $this->hasMany(TrackRecord::class);
    }

    public function partners() {
        return $this->hasMany(Partner::class);
    }

    public function faqs() {
        return $this->hasMany(FAQ::class);
    }

    public function locations() {
        return $this->hasMany(Location::class);
    }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

}
