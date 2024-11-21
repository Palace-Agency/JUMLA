<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Page;
use App\Models\Section;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $data_pages = [
            [
            'name' => 'Landing page',
            'meta_title' => null,
            'meta_keywords' => null,
            'meta_description' => null,
            'created_at' => now(),
            'updated_at' => now()
        ],
            [
            'name' => 'Services',
            'meta_title' => null,
            'meta_keywords' => null,
            'meta_description' => null,
            'created_at' => now(),
            'updated_at' => now()
        ],
            [
            'name' => 'About us',
            'meta_title' => null,
            'meta_keywords' => null,
            'meta_description' => null,
            'created_at' => now(),
            'updated_at' => now()
        ],
            [
            'name' => 'Contact us',
            'meta_title' => null,
            'meta_keywords' => null,
            'meta_description' => null,
            'created_at' => now(),
            'updated_at' => now()],
        ];
        if (!Page::first()) {
            Page::insert($data_pages);
        }

        $data_sections = [
            ['name' => 'Header',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'About us',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Services',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Track record',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Locations',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Partners',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Blogs',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'FAQ',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Testimonials',
            'status' => true,
            'page_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'Services',
            'status' => true,
            'page_id' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ],
            ['name' => 'About us ',
            'status' => true,
            'page_id' => 3,
            'created_at' => now(),
            'updated_at' => now(),
        ],
    ];
        if (!Section::first()) {
            Section::insert($data_sections);
        }
    }
}
