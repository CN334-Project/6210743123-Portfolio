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
        // $validator = Validator::make($request->all(), [
        //     'title'=>'required|max:10',
        //     'detail'=>'required|max:191',
        // ]);

        // if($validator->fails()) {
        //     return response()->json([
        //         'validate_err'=> $validator->messages(),
        //     ]);
        // } 
        // else {
        //     $data = new Data;
        //     $data->title = $request->input('title');
        //     $data->detail = $request->input('detail');
        //     $data->save();

        //     return response()->json([
        //         'status'=> 200,
        //         'message'=>'Data Added Successfully',
        //     ]);
        // }  
        
        $data = new Data;
        $data->title = $request->input('title');
        $data->detail = $request->input('detail');
        $data->save();

        return response()->json([
            'status'=> 200,
            'message'=>'Data Added Successfully',
        ]);
    }

    public function edit($id) {
        $data = Data::find($id);

        return response()->json([
            'status' => 200,
            'data' => $data,
        ]);
    }

    public function update(Request $request, $id) {
        $data = Data::find($id);
        $data->title = $request->input('title');
        $data->detail = $request->input('detail');
        $data->update();

        return response()->json([
            'status'=> 200,
            'message'=>'Data Updated Successfully',
        ]);
    }

    public function destroy($id) {
        $data = Data::find($id);
        $data->delete();

        return response()->json([
            'status'=> 200,
            'message'=>'Data Deleted Successfully',
        ]);
    }
}
