var $data=[];
$(function(){
    daoji();
    fnuxn();
    gongg();
    ddenglul();
    cbl();
    // xun();
    $.ajax({
        url: '../api/ulist2.php',
        type: 'GET',
        dataType: 'text',
        data: {'flag': 's'},
        success:function(arr){
            $data=JSON.parse(arr);
            // console.log($data)
            xun();
        }
    }); 
});
//倒计时
function daoji(){
    var ss=59;
    var mm=24;
    var ser=setInterval(daoji2,1000);
    function daoji2(){
        ss--;
        if(ss==0){ss=59;mm--;}
        $('.live_back').html('<span>00:'+mm+':'+ss+'</span>');
        $('.d_minute').html(mm-2);
        $('.d_second').html(ss-2);
    }
}
//左右移动
function fnuxn(){
    $('.d_next').click(function(event) {
        if($('.everyLun ul').css('left')=='0px'){
            $('.everyLun ul').animate({'left': '-473px'},
            1000, function(){});
        }else{
            $('.everyLun ul').animate({'left': '0px'},
            1000, function(){});
        } 
    });
    $('.d_prev').click(function(event) {
        document.getElementsByClassName('d_next')[0].click();
    });
}
//渲染
function xun(){
    var ul=$('.item_list_box ul');
    ul.html('');
    var data='';
    // console.log($data);
    for(var i=0;i<$data.length;i++){
        data+=`
            <li style="background:#fff;">
                <div class="item_box" data-sid='${$data[i]['SID']}'>
                    <div class="item_img" style="background: url(${$data[i]['URL']}_1.jpg) no-repeat;background-size: 100%;"></div>
                    <a style="color:#000;" class="img_title" href="../html/foodList.html">${$data[i]['SNAME']}</a>
                    <p class="img_abstract">${$data[i]['SCON']}</p>
                    <div class="img_qian">
                        <span class="fl img_qian_price"><i>￥</i>${$data[i]['PRICE']}</span>
                        <span class="sale_price">
                            <p>
                                <em>
                                    直降
                                </em>
                            </p>
                            <span>平日价</span><em><i>￥</i>${$data[i]['PRICE']}</em>
                        </span>
                        <span class="fr img_qian_purchased"><i>1970</i>已购买</span>
                    </div>
                </div>
            </li>`;
    }
    ul.html(data+data+data);
}
function gongg(){
    $('.notice ul').animate({'top':'-140px'}, 4000,function(){
        $('.notice ul').animate({'top':'-28px'}, 1000,function(){
            gongg();
        });
    });
}
// 登录的cookie
function ddenglul(){
    if(Cookie.get('name')){

        $('.yonghu').html('欢迎尊敬的用户：'+Cookie.get('name'));
        $('.yonghu1').css({display:'block',});
        $('.zhuche1').css({display:'none',});
                $.ajax({
            url: '../api/car.php',
            type: 'GET',
            dataType: 'text',
            data: {'flag': 'y','x':Cookie.get('name')},
            
            success:function(data){
                var su=JSON.parse(data);
                $('.mycart span').text(su.length);
                $('.go_wu_che').text(su.length);
            }
        });//退出
        $('.denglul').html('退出！');
        $('.denglul').removeAttr('href');
        $('.denglul').bind('click',function(){
            Cookie.remove('name');

            location.href='homepage.html';
        });
    }
}
//侧边栏
function cbl(){
    $('.you').mouseover(function(event) {
        // console.log(event.target.dataset.ce);
        $('.zuo div').css('visibility','hidden');
        $('.zuo div').eq(event.target.dataset.ce-1).css('visibility','visible');
    });
    $('.you').mouseout(function(event) {
        $('.zuo div').css('visibility','hidden');
    });
    $('.you div:eq(1)').click(function(event) {
        console.log(event.target);
        lcar();
    });
    $('.you div:eq(3)').click(function(event) {
        console.log(event.target);
        $(document).scrollTop(0);
    });
}
//一个跳转到购物车
function lcar(){
    location.href='../html/CarCar.html';
}
