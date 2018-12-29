require.config({
    paths:{
        "jq":"../lib/jquery-1.10.1.min"
    },
    shim:{
        "car":["jq","common"]
    }
});

require(['car'],function (){
    // console.log(666);  
});