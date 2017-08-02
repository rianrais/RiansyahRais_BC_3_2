<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_units', function (Blueprint $table) {
            $table->increments('unit_id');
            $table->string('unit_name');
            $table->string('unit_area');
            $table->string('unit_img');
            $table->decimal('unit_price');
            $table->integer('availability_id')->unsigned();
            $table->foreign('availability_id')->references('availability_id')->on('availabilities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('room_units');
    }
}
