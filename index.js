var date=new Date("Mar 24,2023 11:59:00").getTime();
function open(){
   // var link=document.createElement('a');
   // link.setAttribute(href,"main.html")
  //  link.onclick="main.html";
    //link.setAttribute('onclick', "main.html")
   // window.location.href=""
    window.location.href="main.html"
    }
    

var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=date-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var min=Math.floor((distance%(1000*60*60))/(1000*60));
    var sec=Math.floor((distance%(1000*60))/1000)
    document.getElementById("timer").innerHTML=+hours+" : "+min+" : "+sec;
    if(distance<0){
        clearInterval(x);
        document.getElementById("ok").innerHTML="Ok Ipa Click Pannu Box a";
        document.getElementById("timer").innerHTML="00 : 00 : 00";
        document.getElementById("im").onclick=function(){
            open()

        }
    }
},1000);

var old=new Date("Mar 24,2021 11:59:00").getTime();

var y=setInterval(function(){
    var now=new Date().getTime();
    var distance=Math.abs(old-now);
    var days=Math.floor(distance/(1000*60*60*24));
    var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var min=Math.floor((distance%(1000*60*60))/(1000*60));
    var sec=Math.floor((distance%(1000*60))/1000)
    document.getElementById("life").innerHTML=days+"days : "+hours+"hours : "+min+"minites : "+sec +"secound .";
},1000);

function after(){
    function open(){
        window.location.href=""
        window.location.href="main.html"
        }
}