var interval = setInterval(clock,1000);


function clock(){
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');

var seconds= document.getElementById('seconds');
var amp= document.getElementById('amp');

var h  = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var am = "AM";

if(h>12){
    h =h-12;
    am = "PM";
}


hour.innerHTML =h;
minute.innerHTML =m;
seconds.innerHTML =s;
amp.innerHTML = am;

}