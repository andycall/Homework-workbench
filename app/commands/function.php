<?php

//公共函数
function cookie_encode($dir){
    return md5($dir . "_REDROCK_TRAINING");
}


/*
 * 判断是否登录
 */

function checkLogin(){
    $cookie = Cookie::get("uid");
    $session = Session::get("uid");

    if($cookie == cookie_encode($session)){
        return true;
    }
    return false;
}

function rankCompare($a, $b){
    return ($a["score"] > $b["score"]) ? -1 : ( ($a["score"] == $b["score"]) ? 0 : 1 );
}
