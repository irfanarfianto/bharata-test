<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
   /**
    * Run the database seeds.
    */
   public function run(): void
   {
      DB::table('users')->insert([
         [
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Password123'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
         ],
         [
            'name' => 'Sample User',
            'email' => 'user@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Password123'),
            'remember_token' => Str::random(10),
            'created_at' => now(),
            'updated_at' => now(),
         ],
      ]);
   }
}
