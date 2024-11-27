<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pixel_information', function (Blueprint $table) {
            $table->id();
            $table->string('country_targeted');
            $table->longText('script');
            $table->longText('noscript');
            $table->foreignId('pixel_id')->constrained('pixels')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pixel_information');
    }
};
