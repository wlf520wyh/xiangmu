var item_sum=0;
var sssid=0;
var newcl='jia';
var itmes_img="";
$(function(){
    getfid();
    goods_tagName=$('.goods_tagName');
    goods_xiang=$('.goods_xiang');
    goods_Name=$('.goods_Name');
    goods_price= $('.goods_price');
    arrImg=[];  
    xunID(location.search.substring(4,location.search.length));
    
    $('.xia_tag').find('a').on('click',function(){
        $('.xia_tag a').removeClass('asd');
        $(this).addClass('asd');
    });
    // console.log($('.xia_tag').offset(),$(document).scrollTop());
    var stop=$('.xia_tag').offset().top;
    
    $(document).scroll(function(event) {
        if($(document).scrollTop()>=stop){
            $('.xia_tag').addClass('xia_tag_xi');
            // $('.xia_tag').css('display','none');
        }else{
             $('.xia_tag').removeClass('xia_tag_xi');
            // $('.xia_tag').css('display','block');
        }     
    });
    
    var jia=$('#lessBtn');
    var jian=$('#addBtn');
    var shu=$('#goodsNumberInput');
    // console.log(jia,jian,shu);
    jia.click(function(event) {
        if(shu.val()!='1'){
            shu.val(parseInt(shu.val())-1);
        }
    });
    jian.click(function(event) {
        shu.val(parseInt(shu.val())+1);
    });
         

});
function xunID(id){
    $.ajax({
        url: '../api/ulist2.php',
        type: 'GET',
        dataType: 'text',
        data: {'flag': 'i','id':id},
        success:function(data){
            //success指的是请求并成功返回信息
            //data是返回的内容
            var arr=JSON.parse(data);
            // console.log(arr[0]);
            goods_tagName.html(arr[0]['STAG']);
            goods_Name.html(arr[0]['SNAME']);
            goods_xiang.html(arr[0]['SCON']);
            goods_price.html('￥'+arr[0]['PRICE']);
            arrImg.push(arr[0]['URL']+'_1.jpg');
            //存图片url
            itmes_img=arr[0]['URL']+'_1.jpg';
            arrImg.push(arr[0]['URL']+'_2.jpg');
            arrImg.push(arr[0]['URL']+'_3.jpg');
            fangdajing();
        }
    });
}
function fangdajing(){
    //数组假数据，换成你们数据库查询的数据即可
    var arrSmall = arrImg;
    var arrBig = arrImg;
    
    //渲染数据  
    var html='';
    for(var i=0;i<arrSmall.length;i++){
        html+=`<li><img src="${arrSmall[i]}" data-lsrc="${arrSmall[i]}" data-maxSrc="${arrBig[i]}"></li>`;
    }
    // console.log(html);
    $('#MagnifierWrap2 .spec-items ul').html(html);//生成节点
    $('#MagnifierWrap2 .spec-items ul li').eq(0).addClass('on');//第一个li样式为on
    
    //第一个大图的渲染
    var str=`<img class="MagTargetImg" src="${arrSmall[0]}" data-src="${arrBig[0]}">`;
    $('#MagnifierWrap2 .MagnifierMain').html(str);
    
    //调用放大镜插件：传最大盒子id即可
    MagnifierF("MagnifierWrap2");
}
//购物车小标
function ddenglul(){
    if(Cookie.get('name')){
        $('.zhucel').html('欢迎尊敬的用户：'+Cookie.get('name'));

        $.ajax({
            url: '../api/car.php',
            type: 'GET',
            dataType: 'text',
            data: {'flag': 'y','x':Cookie.get('name')},
            success:function(data){
                //success指的是请求并成功返回信息
                //data是返回的内容
                var su=JSON.parse(data);
                su=su.length;
                $('.mycart span').text(su);
                $('.go_wu_che').text(su);
                
            }
        });
        //退出登录删除cookie回到首页
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
function lcar(){
    location.href='../html/CarCar.html';
}
//飞入购物车
function feirufei(){
    var yoy=Cookie.get('name')?Cookie.get('name'):1;
    $('.addCart').on('click',function(even){
        // console.log(666);     
        item_sum=item_sum+Number($('#goodsNumberInput').val());
        // console.log(item_sum,Number($('#goodsNumberInput').val()));
        if(newcl=='jia'){
            //请求一波
            $.ajax({
                url: '../api/car.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': newcl,
                'fid':location.search.substring(4,location.search.length),
                'x':item_sum,
                'yoy':yoy},
                success:function(data){
                //success指的是请求并成功返回信息
                //data是返回的内容
                    // console.log(data); 
                }
            });
        }else{
           $.ajax({
                url: '../api/car.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': newcl,
                'fid':location.search.substring(4,location.search.length),
                'x':Number($('#goodsNumberInput').val()),
                'yoy':sssid},
                success:function(data){
                //success指的是请求并成功返回信息
                //data是返回的内容
                    // console.log(data); 
                }
            }); 
        }
    });
    $('.addCart').shoping({
        endElement:".cbl",
        iconCSS:"",
        iconImg:itmes_img,   
        endFunction:function(element){
            $("#num").html(parseInt($("#num").html())+1);
            // console.log(element);
            return false;
        }
    });
}
function dang_goods(){
    if(Cookie.get('name')==undefined){
        alert('请先登入再买东西吧！');
        location.href="../html/login.html";
    }
    $.ajax({
        url: '../api/addCar.php',
        type: 'GET',
        dataType: 'text',
        data: {'flag': Cookie.get('name'),'sid':location.search.substring(4,location.search.length)},
        success:function(data){
            // console.log(data);
            //success指的是请求并成功返回信息
            //data是返回的内容
            if (data!='string'){
                newcl='jia';
                var arr=JSON.parse(data);
                item_sum=Number(arr['sum']);
                sssid=Number(arr['fid']);
                feirufei();
            }else{
                // console.log('string');  
                newcl='news';
                feirufei();
            }
            
        }
    });
}
function getfid(){
    $.ajax({
        url: '../api/getfid.php',
        type: 'GET',
        dataType: 'text',
        data: {'fname': Cookie.get('name')},
        success:function(data){
            //success指的是请求并成功返回信息
            //data是返回的内容
            sssid=Number(data);
            dang_goods();
            ddenglul();
            cbl();
        }
    });
}
