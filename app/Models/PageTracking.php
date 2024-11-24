<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageTracking extends Model
{
    use HasFactory;

    protected $fillable = ['ip_adresse','country','time_spent','page_id','visited_at'];

    public function page() {
        return $this->belongsTo(Page::class);
    }

}
