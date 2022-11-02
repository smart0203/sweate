<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('status')->default('Hiring');
            $table->string('applicant_type')->default('Individual');
            $table->string('thumbnail')->nullable();
            $table->boolean('ui_ux_designer')->default(false);
            $table->boolean('front_end_engineer')->default(false);
            $table->boolean('back_end_engineer')->default(false);
            $table->boolean('data_expert')->default(false);
            $table->boolean('sales_marketing')->default(false);
            $table->boolean('other')->default(false);
            $table->string('other_skill')->nullable();
            $table->boolean('equity')->default(false);
            $table->boolean('rev_share')->default(false);
            $table->boolean('is_open_hiring')->default(true);
            $table->string('max_person')->nullable();
            $table->string('project_url')->nullable();
            $table->timestamp('start_time')->nullable();
            $table->timestamp('finish_time')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
