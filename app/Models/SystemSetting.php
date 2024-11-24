<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemSetting extends Model
{
    use HasFactory;

    protected $fillable = ['favicon','logo','website_name','website_url','email','phone','facebook_url','tiktok_url','instagram_url','privacy_policy'];
}
