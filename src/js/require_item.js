require.config({
    paths:{
        "addShopping":'../lib/jquery-addShopping',
        "fangdajin":"../lib/js",
        "jq":"../lib/jquery-1.10.1.min"
    },
    shim:{
        "addShopping":["jq"],
        "fangdajin":["jq"],
        "item":["jq","common"],
    }
});

require(['addShopping','fangdajin','item'],function (){
    // console.log(666);  
});