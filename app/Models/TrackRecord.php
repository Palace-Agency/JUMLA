<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrackRecord extends Model
{
    use HasFactory;

    protected $fillable = ['record_number', 'record_title', 'icon','content_id'];

    public function content() {
        return $this->belongsTo(Content::class);
    }
}
