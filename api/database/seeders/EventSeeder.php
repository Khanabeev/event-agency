<?php

namespace Database\Seeders;

use Domain\Event\Model\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::factory()->count(10)->create();
    }
}
