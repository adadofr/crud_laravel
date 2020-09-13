<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Star;

class StarController extends Controller
{
    public function index()
    {
        return Star::all();
    }
 
    public function show($id)
    {
        return Star::find($id);
    }

    public function store(Request $request)
    {
        return Star::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $star = Star::findOrFail($id);
        $star->update($request->all());

        return $star;
    }

    public function delete(Request $request, $id)
    {
        $star = Star::findOrFail($id);
        $star->delete();

        return 204;
    }
}
