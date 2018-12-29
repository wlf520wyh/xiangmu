require.config({
    paths:{
        "myfocus":'../lib/mF/myfocus-2.0.4.full',
        "mF_kdui":'../lib/mF/mf-pattern/mF_kdui',
        "jq":"../lib/jquery-1.10.1.min"
    },
    shim:{
        "mF_kdui":["myfocus"],
        "iPublic":["jq","common"],
        "home":["jq","common"],
    }
});

require(['mF_kdui','iPublic','home'],function (){
    // console.log(666);  
});