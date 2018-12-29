<?php
    include 'cont.php';
    function sel($value,$str2='',$str3=''){
    $sql='SELECT * FROM ulist '.$str2.$str3;//Fatal error: Call to a member function fetch_all() 语句出错时报错（因为获取不到结果集，更不能获得里面的内容）

    $res=$value ->query($sql);
    $arr=$res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }
    function sel_item($value,$sk){
        $sname='sid';
        // $sk=1;
        $fu='=';
        $str='where '.$sname.$fu.$sk;
        sel($value,$str);
    }
    function sel_pai($value,$limit1,$limit2){
        // $order='sid';
        
        $str='order by sid limit '.$limit1.','.$limit2;
        sel($value,'',$str);
    }

    // sel($conn);
    // sel_pai($conn);
    $ulist=$_GET['flag'];
    if($ulist=='s'){
        sel($conn);
    }else if($ulist=='i'){
        sel_item($conn,$_GET['id']);
    }else if($ulist=='d'){
        sel_pai($conn,$_GET['page'],'17');
    }

?>