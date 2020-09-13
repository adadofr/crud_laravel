<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    public $timestamps = false;
    protected $fillable = ['avatar', 'lastname', 'firstname', 'description'];
}
