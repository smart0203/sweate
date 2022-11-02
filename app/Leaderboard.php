<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    protected $guarded = [];

    protected $casts = [
        'user_id' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function total_equity()
    {
        return $this->hasMany('App\Project', 'user_id', 'user_id')->where('equity', 1);
    }
}
