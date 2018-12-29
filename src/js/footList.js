var $data=new Object();
$(function(){
    // xun($('.flist_t'));
    ddenglul();
    cbl();
    ahj();
    ahj2();
     var jg=0;
     $('.list_nav_l li').click(function(event) {
        var sdata=$data.slice();//拷贝数据不让排序干扰
        if(event.target.parentNode.className){
            event.target.style.backgroundPosition='4px -304px';
            xun($('.flist_t'),pai(sdata,1));
        }else{
            document.getElementById('jg_pai').style.cssText='';
            xun($('.flist_t'),pai(sdata,0));
        }
        $('.list_nav_l li').removeClass('paipai');
        
        // if($(this).attr('class')){}
        if(event.target.id!='jg_pai'){
             xun($('.flist_t'),$data);    
        }
             
        var this2=document.getElementById('jg_pai');

        // console.log($('#jg_pai').parent()[0]);
             
        // console.log(this2.parentNode.getAttribute('class'));//获取不到class
             
        $(this).addClass('paipai');
     });
 
    
});
function xun(ele,asd){
    ele.html('');
    // pai(asd);
    var data='';
    for(var i=0;i<asd.length;i++){
        data+=`
    <div class="goods" data-sid='${asd[i]['SID']}'>
        <img class="goods_img" src="${asd[i]['URL']}_1.jpg"/>
        <span class="goods_name">${asd[i]['SNAME']}</span>
        <div class="qian_comment">
            <span class="goods_qian fl">￥${asd[i]['PRICE']}</span>
            <span class="goods_comment fr">评论<a href="">40</a>条</span>
        </div>
        <div class="ping">
            <div class="fl"><span>免邮费</span></div>
            <div class="fr"><span>积分</span>0</div>
            <div>
                <p>用户评价</p>
                <span><img src="../css/img/leftyin.jpg" height="9" width="13" alt="" /></span>
                <span class="zhongPing">太便宜了！不买！</span>
                <span><img src="../css/img/rightyin.jpg" height="10" width="14" alt="" /></span>
            </div>
        </div>
    </div>`;

    }
    ele.html(data);

    //购买点击后吧id传过去
     $('.goods').bind('click',function(){
        // ele.dataset.sid
        location.href='../html/itemDetailed.html?id='+$(this).data("sid"); 
     });
}

function pai(qr,aa){
    jj='-';
    qr.sort(function(a,b){
        // var aa=a['PRICE'];
        // var bb=b['PRICE'];
        // return eval(jj+a['PRICE']+'+'+b['PRICE']);
        if(aa){
            return eval(jj+a['PRICE']+'+'+b['PRICE']);
        }else{
            return eval(a['PRICE']+jj+b['PRICE']);
        }
    });  
    console.log(qr);
    return qr;
}
//购物车小标数量
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
                $('.mycart span').text(su.length);
                $('.go_wu_che').text(su.length);
                
            }
        });

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
//初始化数据
function ahj(){
    $.ajax({
         url: '../api/ulist2.php',
         type: 'GET',
         dataType: 'text',
         data: {'flag': 'd','page':'0'},
         success:function(arr){
            $data=JSON.parse(arr);
            // console.log($data);
            xun($('.flist_t'),$data);
         }
     });
}
//获取页数
function ahj2(){
    var dpage=1;
    var zpage=0;
    //请求
    $.ajax({
         url: '../api/ulist2.php',
         type: 'GET',
         dataType: 'text',
         data: {'flag': 's'},
         success:function(arr){
            //success指的是请求并成功返回信息
            //data是返回的内容
            var arr=JSON.parse(arr);
            // console.log($data);
            // console.log(arr.length);
            var ahj2j=Math.ceil(arr.length/17);
            // console.log(arr);
            // console.log(ahj2j);
            for(var i=0;i<ahj2j;i++){
                // console.log(i);
                $('#P_fan').prepend('<span>'+(3-i)+'</span>');
                console.log(3-i);
            }
            if((ahj2j)==i){
                $('#P_fan span').css({background:'cyan',});
            }
            $('#P_fan span').click(function(event) {
                // console.log(event.target);
                dpage=Number(event.target.innerText);
                $.ajax({
                    url: '../api/ulist2.php',
                    type: 'GET',
                    dataType: 'text',
                    data: {'page': (Number(event.target.innerText)-1)*6,'flag':'d'},
                    success:function(arr){
                        //success指的是请求并成功返回信息
                        //data是返回的内容
                        $data=JSON.parse(arr);
                        // console.log($data);
                        xun($('.flist_t'),$data);
                    }
                });
                
            });
         }
     });
    //dpage++;上下页
    $('#P_fan .to_bottom').click(function(event) {
         zpage=$('#P_fan span').length;
         if(dpage<zpage){
            //请求
            $.ajax({
                url: '../api/ulist2.php',
                type: 'GET',
                dataType: 'text',
                data: {'page': dpage*6,'flag':'d'},
                success:function(arr){
                    //success指的是请求并成功返回信息
                    //data是返回的内容
                    $data=JSON.parse(arr);
                    // console.log($data);
                    xun($('.flist_t'),$data);
                    dpage++;
                    console.log(dpage);
                         
                }
            });
         } 
         
    });
    //dpage--;上下页
    $('#P_fan .to_top').click(function(event) {
         zpage=$('#P_fan span').length;
         if(dpage<zpage){
            $.ajax({
                url: '../api/ulist2.php',
                type: 'GET',
                dataType: 'text',
                data: {'page': dpage*6,'flag':'d'},
                success:function(arr){
                    //success指的是请求并成功返回信息
                    //data是返回的内容
                    $data=JSON.parse(arr);
                    // console.log($data);
                    xun($('.flist_t'),$data);
                    dpage--;
                    console.log(dpage);
                         
                }
            });
         } 
         
    });
}