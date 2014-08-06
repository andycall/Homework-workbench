<?php

    class abcController extends BaseController {



        public function showAbc(){
//          $result =   DB::select('select * from test', array(1));

          return View::make("abc", array("result" => $result));

        }
    }