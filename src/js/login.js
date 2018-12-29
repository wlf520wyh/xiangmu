$(function(){
    var yanz=$('.input1_r span');
    var tel=$('.input1_r .tel');
    var pwd=$('.input1_r .pwd');
    var rpwd=$('.input1_r .r_pwd');

    var l_tel=$('.username');
    var l_pws=$('.log_pws');

    var flag=[0,0,0,0];
    //初始化验证码
    var xi=vfc();
    // 验证码绑定点击事件
    yanz.find('a').click(function(){xi=vfc();});
    $('.yanz').change(function(event) {
        if($('.yanz').val()==xi){
            flag[3]=1;   
        }else{
            flag[3]=0;
                 
        }
    });
    //验证码
    function vfc(){
        var num1=funRoma();
        yanz.find('a').css({"transform":"skewX("+(parseInt(Math.random()*-10)+20)+"deg)","display":"block"});
        yanz.css("background",rColor());
        yanz.css("color",rColor());
        yanz.find(' a').text(num1);
        return num1;
    }


    tel.on("input",function(){
        //用户名验证 含正则
        var reg=new RegExp('[0-9a-z]{3,11}');
        // var reg=new RegExp('^1[34578]\d{9}$');
        $('.i_message .div1').css({'visibility':'visible'});

        $.ajax({
            url: '../api/login.php',
            type: 'GET',
            dataType: 'text',
            data: {'fname': tel.val()},
            success:function(data1){
                // var arr=JSON.parse(data);
                if(data1=='no'){
                    if(tel.val().search(reg)!=-1){
                        $('.input1_l span:nth-child(1) i').addClass('ik3');
                        $('.input1_l span:nth-child(1) i').css('top','8px');
                        $('.i_message .div1').html('只允许数字，请输入常用手机号，避免忘记');
                        flag[0]=1;
                    }
                }else{
                    $('.input1_l span:nth-child(1) i').addClass('ik1');
                    $('.i_message .div1').html('这个号码太抢手，没了哦！')
                    $('.input1_l span:nth-child(1) i').removeClass('ik3');
                    flag[0]=0;
                }
            }
        });
    });
    tel.on("blur",function(){
        $('.i_message .div1').css({'visibility':'hidden'});
    });
    pwd.on("input",function(){
        $('.i_message .div2').css({'visibility':'visible'});
        if(pwd.val().length>=6){
            $('.input1_l span:nth-child(3) i').addClass('ik3');
            flag[1]=1;
        }else{
            $('.input1_l span:nth-child(3) i').removeClass('ik3');
            flag[1]=0;
        }
    });
    pwd.on("blur",function(){
        //用户名验证
        $('.i_message .div2').css({'visibility':'hidden'});
    });
    rpwd.on("input",function(){
        $('.i_message .div2').css({'visibility':'visible'});
        if(rpwd.val()==pwd.val()){
            $('.input1_l span:nth-child(4) i').addClass('ik3');
            flag[2]=1;
        }else{
            $('.input1_l span:nth-child(4) i').removeClass('ik3');
            flag[2]=0;
        }
    });
    rpwd.on("blur",function(){
        $('.i_message .div2').css({'visibility':'hidden'});
    });
    

         
    
    $('.submit').click(function(event) {
        if($('.tiaokuan input').get(0).checked){
            for(var i=0;i<flag.length;i++){
                if(flag[i]==0){
                    console.log(i);
                    switch (i) {
                        case 0:
                            alert('用户名输入有误');
                            break;
                        case 1:
                            alert('密码输入有误');
                            break;
                        case 2:
                            alert('密码重复输入有误');
                            break;
                        case 3:
                            alert('验证码输入有误');
                            break;
                        default:
                            break;
                    }
                    return;
                }
            }
            // console.log(0009);
            $.ajax({
                url: '../api/login.php',
                type: 'GET',
                dataType: 'text',
                data: {'fname': tel.val(),'psw': rpwd.val()},
                success:function(data){
                    
                }
            });
            
            location.href='../html/login.html';
        }
    });
// 登录界面验证
    $('.log_sit').click(function(event) {
        if(l_tel.val()&&l_pws.val()){ 
            console.log(l_tel.val(),l_pws.val());

            $.ajax({
                url: '../api/login.php',
                type: 'GET',
                dataType: 'text',
                data: {'fname': l_tel.val()},
                success:function(data1){
                    if(data1==l_pws.val()){
                        // console.log(1);
                        // console.log(Cookie.get('name')); 
                        
                        Cookie.set('name',l_tel.val(),new Date());

                        $('.ktips').css('display','none');
                        l_tel.css('border','1px solid #a2a2a2');
                        location.href='../html/homepage.html';
                    }else{
                        $('.ktips').css('display','block');
                        l_tel.css('border','1px solid #ffadb0');
                        console.log(0);
                    }
                }
            });
        }else{
            // Cookie.set('name',l_tel.val());
        }
    }); 

});


 //随机4位验证码
function funRoma(){
    //xiao 97-122;da 65-90;shu 48-57
    var xiao =parseInt(Math.random()*26)+97;
    var da=parseInt(Math.random()*26)+65;
    var shu=parseInt(Math.random()*10);
    var shu2=parseInt(Math.random()*4);
    var a=[];
    var arr=new Array();
    arr.push(String.fromCharCode(xiao));
    arr.push(String.fromCharCode(da));
    arr.push(shu);
    arr.push(parseInt(Math.random()*10));
    for(var i=0;i<4;i++){
        var shu2=parseInt(Math.random()*4);
        a.push(arr[shu2]);
    }
    return a.join('');
}
//随机颜色
function rColor(){
    var color='';
    for(i=0;i<6;i++){
        var a=parseInt(Math.random()*16);
        if(a>=10)
            a=String.fromCharCode(a+87+'');  
        color+=a;
        }
    return '#'+color;
}