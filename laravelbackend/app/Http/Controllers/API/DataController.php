<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Data;

class DataController extends Controller
{
    public function index() {
        $datas = Data::all();
        return response()->json([
            'status'=> 200,
            'datas'=>$datas,
        ]);
    }

    public function store(Request $request) {
        $data = new Data;
        $data->title = $request->input('title');
        $data->detail = $request->input('detail');
        $data->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Data Added Successfully',
        ]);
    }
}
