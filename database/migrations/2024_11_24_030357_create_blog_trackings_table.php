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
        Schema::create('blog_trackings', function (Blueprint $table) {
            $table->id();
            $table->string('visitor_id');
            $table->string('time_spent');
            $table->foreignId('blog_id')->constrained('blogs')->onDelete('cascade');
            $table->timestamps('visited_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_trackings');
    }
};
