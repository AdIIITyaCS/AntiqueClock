setInterval(()=>{
  d=new Date
  htime=d.getHours();
  mtime=d.getMinutes();
  stime=d.getSeconds();
  hRotation=30*htime+mtime/2;  // by default the hands of clock moves around the center of their axis but using transform-origin we can rotate it, around the the center of origin(clock)
  mRotation=6*mtime+stime/10;
  sRotation=6*stime;
  hour.style.transform=`rotate(${hRotation}deg)`;
  minute.style.transform=`rotate(${mRotation}deg)`;
  second.style.transform=`rotate(${sRotation}deg)`;
},1000);