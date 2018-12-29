window.onload = function(){
    var header_logo = document.getElementById("header_logo");
    var cbl = document.getElementsByClassName("cbl")[0];
    
    window.onscroll = function(){
        if(window.scrollY > 200){
            header_logo.style.position="fixed";
            header_logo.style.top="-25px";
            cbl.style.display="block";
        }else{
            header_logo.style.position="relative";
            header_logo.style.top="0px";
            cbl.style.display="none";
        }
    }
}
