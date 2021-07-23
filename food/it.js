var g_Interval = 1;
var g_PersonCount = 25;
var g_Timer;
var running = false;

function beginRndNum(trigger){
 if(running){
 running = false;
 clearTimeout(g_Timer); 
 $(trigger).val("开始");
 $('#ResultNum').css('color','black');
 }
 else{
 running = true;
 $('#ResultNum').css('color','#00cc75');
 $(trigger).val("停止");
 beginTimer();
 }
}

function updateRndNum(){
 var arr=[
 "螺蛳粉",
 "面",
 "麻辣烫"
 "炒粉",
 "云吞",
 "桂林米粉",
 "饺子",
 "M记",
 "日料",
 "竹升面"
 ]
 var num = Math.floor(Math.random()*g_PersonCount+1);
 var num2 = arr[num];//把random出来的数字变成数组下标
 $('#ResultNum').html(num2);
}

function beginTimer(){
 g_Timer = setTimeout(beat, g_Interval);
}

function beat() {
 g_Timer = setTimeout(beat, g_Interval);
 updateRndNum();
}