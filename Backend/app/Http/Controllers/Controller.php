<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function bookUnit(Request $request) 
    {
        DB::beginTransaction(); /* Fungsi ini agar dapat melakukan banyak transaksi data 
                                kedalam database. */

        try 
        {
            //Membuat validasi atas property.
            $this->validate($request, [
                'unit_id' => 'required',
                'customer_id' => 'required',
                'rent_in_date' => 'required',
                'rent_out_date' => 'required'
            ]);
            
            //Memasukan input request kedalam variable.
            $unitID = $request->input('unit_id');
            $customerID = $request->input('customer_id');
            $rentIn = $request->input('rent_in_date');
            $rentOut = $request->input('rent_out_date');

            //Dari variable diatas dimasukan kedalam DB.
            DB::table('rents')->insert([
                ['unit_id' => $unitID, 'customer_id' => $customerID,
                 'rent_in_date' => $rentIn, 'rent_out' => $rentOut]
            ]);


            // Setelah save() mereturn data kembali.
            $rent = DB::table('rents')->select(rents.rent_id, rents.customer_id, rents.unit_id, 
            rents.rent_in_date, rents.rent_out_date, rent.status_id)->get();

            /*Message yang dikeluarkan setelah sukses memasukan data.
            Fungsi DB commit memasukan semua data yang sukses */
            DB::commit();
            return response()->json($rent, 200);
        }

        catch(\Exception $e) 
        {
            DB::rollBack(); /* Fungsi ini merollback apabila terdapat 
                            data yang gagal/error masuk kedalam DB */
            return response()->json(["message" => $e->getMessage()], 500);
        }   
    }
}
