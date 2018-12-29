<?php
include 'cont.php';

// include 'ulist2.php';

function car($vcon,$fid='1'){
    $sql="SELECT ulist.*,(SELECT car.sum FROM car WHERE car.sid = ulist.SID and car.fid in(SELECT f_user.fid FROM f_user WHERE f_user.fname='$fid'))'sum' ,(SELECT car.fid FROM car WHERE car.sid = ulist.SID and car.fid in(SELECT f_user.fid FROM f_user WHERE f_user.fname='$fid'))'fid' FROM ulist WHERE ulist.sid in 
(SELECT car.sid FROM car WHERE car.fid in (SELECT f_user.fid FROM f_user WHERE f_user.fname='$fid'));";

    $res=$vcon ->query($sql);
    $arr=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    // var_dump($arr);
}
function jial($vcon,$fid,$x,$yong){
    $sql="UPDATE car SET car.sum='$x' WHERE car.sid='$fid' and car.fid in(SELECT f_user.fid FROM f_user WHERE f_user.fname='$yong')";
    $res=$vcon ->query($sql);
    var_dump($res);
}
function iscont($vcon,$x){
    $sql="SELECT fid FROM car WHERE car.fid in(SELECT f_user.fid FROM f_user WHERE f_user.fname ='$x')";
    $res=$vcon ->query($sql);
    $arr=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
}

function news($vcon,$fid,$x,$yong){
    $sql="INSERT INTO car (sid,fid,sum)VALUES ('$fid','$yong','$x')";
    $res=$vcon ->query($sql);
    var_dump($res);
}
if(isset($_GET['flag'])){
    if($_GET['flag']=='g'){
        car($conn,$_GET['fid']);
    }else if($_GET['flag']=='jia'){
        jial($conn,$_GET['fid'],$_GET['x'],$_GET['yoy']);
    }else if($_GET['flag']=='y'){
        iscont($conn,$_GET['x']);
    }else if($_GET['flag']=='news'){
        news($conn,$_GET['fid'],$_GET['x'],$_GET['yoy']);
    }
}
?>