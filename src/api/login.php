<?php
//连接数据库
include 'cont.php';

function isUser($vconn,$user){
    $sql="SELECT fname FROM f_user";
    $res=$vconn->query($sql);//结果集
    // $res3=$res->fetch_all(MYSQLI_ASSOC);
    for($i=0;$i<$res->num_rows;$i++){
        $res3=$res->fetch_row();
        // var_dump($res3[0]==$user);
        if($res3[0]==$user){
            // $yes='yes';
            $yes=isPws($user);
            echo $yes;
            return;
        }else{
            $yes='no';
        }
    }
    echo $yes;
    $vconn->close();
    
    // echo json_encode($res3,JSON_UNESCAPED_UNICODE);//不转成json传到前台无效

    // var_dump($res3);
    // var_dump($res->fetch_all(MYSQLI_ASSOC));
}
// $page=isset($_GET['page']);
// $psw=isset($_POST['psw']) ? $_POST['psw'] : '123456';

if(isset($_GET['psw'])){
    zhul($conn,$_GET['fname'],$_GET['psw']);
}else{
    isUser($conn,$_GET['fname']);
}

// echo isset($_GET['fname']) ? $_GET['fname'] : '默认值';
// echo $_GET['fname'];

// var_dump(isset($_GET['fname']));
function isPws($fna){
    $conn=new mysqli('localhost','root','','ugoshop');
    $sql="SELECT fpws FROM f_user where fname='".$fna."'";
    $res=$conn->query($sql);//结果集
    $res3=$res->fetch_row();
    return $res3[0];
}
//注册了
function zhul($vconn,$us,$ps){
    $sql='INSERT INTO f_user (fname,fpws) VALUES ("'.$us.'","'.$ps.'")';
    $res=$vconn->query($sql);
    echo "ok";
}
?>