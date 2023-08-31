let startbtn = document.getElementById("start");
let lapbtn = document.getElementById("lap");
let resetbtn = document.getElementById("reset");

let msec= 0;
let sec = 0;
let min = 0;
let i=0;
let n=1;
let timrid= null;

let timrdisply=document.querySelector('.display');
let laplist=document.querySelector('.laplist')


function disptime(){
    let msecString=msec<10?'0'+msec:msec;
    let secString=sec<10?'0'+sec:sec;
    let minString=min<10?'0'+min:min;
    timeString=minString+' : '+secString+' : '+msecString;
    timrdisply.innerHTML= timeString;
}

function strttime(){
    msec++;
    if (msec >99){
        sec++;
        msec=0;
        if(sec>59){
            min++;
            sec=0;
        }
    }
    disptime();
}


startbtn.addEventListener('click',function(){
    if(i==0){
        i=1;
        if (timrid !== null) {
            clearInterval(timrid);
        }
        timrid=setInterval(strttime,10);
        startbtn.classList='stop';
        startbtn.innerHTML='&#9632';
    }
    else if(i==1){
        i=0;
        clearInterval(timrid);
        startbtn.classList='start';
        startbtn.innerHTML='&#9654';
    }

})


lapbtn.addEventListener('click',function(){
    if(timeString=="00 : 00 : 00"){
        alert("Please start the watch!");
    }
    else{
        let con='Lap '+n+'. '+timeString;
        let li=document.createElement("li");
        laplist.appendChild(li);
        let sp1=document.createElement("span");
        sp1.innerHTML=con;
        li.appendChild(sp1);
        n++;}
})

resetbtn.addEventListener('click',function(){
    clearInterval(timrid);
    timeString="00 : 00 : 00";
    timrdisply.innerHTML = timeString;
    msec=0;
    sec=0;
    min=0;
    startbtn.classList='start';
    startbtn.innerHTML='&#9654';
    i=0;
    n=1;
    laplist.innerHTML='';
})