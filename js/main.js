// Snow
const c=document.getElementById('snow'),x=c.getContext('2d');
let w,h,f=[];
function r(){w=c.width=innerWidth;h=c.height=innerHeight}
addEventListener('resize',r);r();
for(let i=0;i<120;i++)f.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*3+1,s:Math.random()+.5});
(function snow(){x.clearRect(0,0,w,h);x.fillStyle='rgba(255,255,255,.85)';f.forEach(e=>{x.beginPath();x.arc(e.x,e.y,e.r,0,7);x.fill();e.y+=e.s;if(e.y>h)e.y=0});requestAnimationFrame(snow)})();

// Howl
const howl=document.getElementById('howl'),btn=document.getElementById('soundToggle');let on=false;
btn.onclick=()=>{on=!on;btn.textContent=on?'🔇':'🔊';on?howl.pause():howl.play()};

// Countdown (40 days)
const end = Date.now() + 40*24*60*60*1000;
setInterval(()=>{
const now=Date.now(),d=end-now;
document.getElementById('days').textContent=Math.max(0,Math.floor(d/86400000));
document.getElementById('hours').textContent=Math.floor(d/3600000)%24;
document.getElementById('minutes').textContent=Math.floor(d/60000)%60;
document.getElementById('seconds').textContent=Math.floor(d/1000)%60;
},1000);
