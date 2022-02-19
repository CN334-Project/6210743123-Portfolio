<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\DataController;

Route::get('datas', [DataController::class, 'index']);
Route::post('/add-data', [DataController::class, 'store']);
Route::get('/edit-data/{id}', [DataController::class, 'edit']);
Route::put('/update-data/{id}', [DataController::class, 'update']);
Route::delete('/delete-data/{id}', [DataController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
