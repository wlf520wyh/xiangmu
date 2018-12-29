<?php
include 'cont.php';
    $fname=$_GET['fname'];
    $sql="SELECT fid FROM f_user WHERE fname ='$fname'";
    $res=$conn ->query($sql);
    $res3=$res->fetch_row();
    echo $res3[0];
?>