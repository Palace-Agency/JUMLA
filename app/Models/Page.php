<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $fillable = ['name','meta_title', 'meta_description', 'meta_keywords'];

    public function sections() {
        return $this->hasMany(Section::class);
    }

    public function time_spent() {
        return $this->hasMany(PageTracking::class);
    }

}
