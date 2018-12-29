var $data=new Array();
var fid='';
$(function(){
    ddenglul();
    hui_home();
    var fid='0';
    if(Cookie.get('name')){
        fid=Cookie.get('name');
        // console.log(fid);
    }else{
       fid='0'; 
    }
    $.ajax({
        url: '../api/car.php',
        type: 'GET',
        dataType: 'text',
        data: {'flag': 'g','fid':fid},
        success:function(data){
            // console.log(data)
            $data=JSON.parse(data);
            if($data.length==0){
                $('.cart_split').html('<p style="height:200px;width:800px;text-align:center;line-height:200px;font-size:36px;">没有任何商品</p>');
                    $('.c_paid').html('0');
                    $('.fs_14').html('0');
                    $('.c_piece i').html('0');    
            }else{
                xun($data);
            }    
            // xun($data);
        }
    });
});
    function xun(data){
        var card=$('.cart_split');
        card.html('');
        var di=dian(card);
        // console.log(data);
        fid=data[0]['fid'];
        // console.log(fid);
        var arr="";
        for(var i=0;i<data.length;i++){
            arr+=`<div class="shopping_con clearfix" data-role="product" data-attr="" data-sid="${data[i]['SID']}">
                <div class="c_meg">
                    <dl>
                        <dt>
                            <a href="javascript:;">
                                <img src="${data[i]['URL']}_1.jpg" width="78" height="78">
                            </a>
                        </dt>
                        <dd>
                            <p class="m_tit"><a href="javascript:;">${data[i]['SNAME']}</a></p>
                        </dd>
                    </dl>
                </div>
                <div class="c_price">
                    <p class="c_price_num">¥<i>${data[i]['PRICE']}</i></p>
                </div>
                <div class="c_quantity">
                    <div class="c_amount clearfix">
                        <a class="jian" href="javascript:void(0)">-</a>
                        <input type="text" name="amt" value="${data[i]['sum']}">
                        <a class="jia" href="javascript:void(0)">+</a>
                    </div>
                </div>
                <div class="c_sum">
                    <p>¥<i>${parseInt(data[i]['PRICE'])*parseInt(data[i]['sum'])}</i></p>
                </div>
                <div class="c_action">
                    <i class="i_del" data-role="del">删除</i>
                </div>
                <div class="c_check">
                    <input data-role="product" type="checkbox" checked="checked" name="hobby"></div>
                </div>`;
        }
        // console.log(arr);
        card.html(di+arr);
        Sclick();
        quanxuan();
        hei();//求和
        dels();
        $('.shopping_con :checked').click(function(event) {
            hei();
        });
        
        $('.c_piece i').text($('.shopping_con :checked').length);
        // console.log($('.c_sum i'));
        // console.log($('.c_amount input'));
    }

    function dian(ele){
        var data2=`<div class="cart_split_tt">
                        <input type="checkbox" data-role="block" target="ec" checked="checked">
                        <i class="icon_home"></i>
                        <label>优品惠自营</label>
                        <span>满168包邮</span>
                    </div>`;
        // ele.html(data2);
        // console.log($('.cart_split_tt'));
             
        return data2;
    }
    function Sclick(){
        // var shu=$('.c_quantity input');
        $('.jian').click(function(event) {
             var shu=$(this).parent().find('input');
             var sum=$(this).parent().parent().parent().find('.c_sum i');
             var dan=$(this).parent().parent().parent().find('.c_price_num i');
             var x=parseInt(shu.val())-1;
            if(shu.val()!='1'){
                $.ajax({
                url: '../api/car.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': 'jia','fid':$(this).parent().parent().parent().data('sid'),'x':x,'yoy':Cookie.get('name')},
                success:function(data){
                    console.log(data);
                    shu.val(x);
                    sum.text(x*parseInt(dan.text()));
                    hei();
                }
                });

                
            }
        });

        $('.jia').click(function(event) {
            var shu=$(this).parent().find('input');
            var sum=$(this).parent().parent().parent().find('.c_sum i');
            var dan=$(this).parent().parent().parent().find('.c_price_num i');
            var x=parseInt(shu.val())+1;
            // var ffname=Cookie.get('name')?Cookie.get('name'):3;
            $.ajax({
                url: '../api/car.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': 'jia','fid':$(this).parent().parent().parent().data('sid'),'x':x,'yoy':Cookie.get('name')},
                success:function(data){
                    console.log(data);
                    shu.val(x);
                    sum.text(x*parseInt(dan.text()));
                    hei();
                }
            });

                 
            
        });
    }
    function hei(){
        var hei=$('.c_sum i');
        // console.log($('.shopping_con :checked'))
        hei=$('.shopping_con :checked').parent().parent().find('.c_sum i');
        var ns=0;
        for(var i=0;i<hei.length;i++){
            ns+=Number(hei.eq(i).text());
        }
        document.querySelector('.c_paid i').innerHTML=ns-10;
        document.querySelector('.fs_14').innerHTML=ns;
        return ns;
    }

    // 登录退出
    function ddenglul(){
        if(Cookie.get('name')){
            $('.zhucel').html('欢迎尊敬的用户：'+Cookie.get('name'));
            $('.denglul').html('退出！');
            $('.denglul').removeAttr('href');
            $('.denglul').bind('click',function(){
                Cookie.remove('name');

                location.href='homepage.html';
            });
        }
        
    }
    function quanxuan(){
        // console.log($('.shopping_con [type=checkbox]'));
        // console.log($('.quanxian'));
        $('.quanxian').prop('checked',false);
        $('.quanxian').click(function(event) {
            /* Act on the event */
            $('.shopping_con [type=checkbox]').prop('checked',true);
            hei();
        });
    }
    // 删除单个
    function dels(){
        $('.i_del').click(function(event) {
            $.ajax({
                url: '../api/del.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': 'jia','fid':fid,'sid':$(this).parent().parent().data('sid')},
                success:function(data){
                    console.log(data);
                    //重新加载页面
                    location.reload();
                }
            }); 
        });
        //全部删除
        $('#Del').click(function(){
            $('#Delt').css({display:'inline-block'});
            $('#Deltt').css({display:'inline-block'});
        });
        $('#Delt').click(function(event){
            $.ajax({
                url: '../api/del.php',
                type: 'GET',
                dataType: 'text',
                data: {'flag': 'jia','fid':fid,'sid':'sid'},
                success:function(data){
                    console.log(data);
                    //重新加载页面
                    location.reload();
                }
            }); 

        });
        $('#Deltt').click(function(){
            
                $('#Delt').css({display:'none'});
                $('#Deltt').css({display:'none'});
            
        });
    }
    function hui_home(){
        $('.car_til').click(function(event) {
            location.href='../html/homepage.html';
        });
    
}

    



