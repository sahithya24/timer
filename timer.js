var time = 0;
var running = 0;
function strt(){
   if(running==0){
       running=1;
       increment();
       document.getElementById("startPause").innerHTML = "Pause";
   }
    else{
        running=0;
        document.getElementById("startPause").innerHTML = "Resume";
    }
}
function reset(){
    running=0;
    time=0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("disp").innerHTML = "00:00:00";
}
function increment(){
    if(running==1){
        setTimeout(function(){
            time++;
            var min = Math.floor(time/10/60);
            var sec = Math.floor(time/10%60);
            var tenth = time%10;
            
            if(min<10){
                min = "0" + min;
            }
            if(sec<10){
                sec = "0" + sec;
            }
            if(tenth<10){
              tenth = "0" + tenth;
            }
            document.getElementById("disp").innerHTML = min + ":" + sec + ":" + tenth;
            increment();
        },100)
    }
}