<?php
//单独的删除
include 'cont.php';
    $fid=$_GET['fid'];
    $sid=$_GET['sid'];
    $sql="DELETE FROM car WHERE sid = $sid and fid=$fid";
    $res=$conn ->query($sql);
    var_dump($res);
?>