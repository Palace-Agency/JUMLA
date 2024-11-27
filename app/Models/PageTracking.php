<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageTracking extends Model
{
    use HasFactory;

    protected $fillable = ['country','time_spent','visitor_id','page_id','visited_at'];

    public function page() {
        return $this->belongsTo(Page::class);
    }

}
