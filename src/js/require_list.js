require.config({
    paths:{
        "jq":"../lib/jquery-1.10.1.min"
    },
    shim:{
        "footList":["jq","common"]
    }
});

require(['footList'],function (){
    // console.log(777);  
});