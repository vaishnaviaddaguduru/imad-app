console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerHTML='my second new value';
//move the image
var img=document.getElementById('madi');
img.onClick=function(){
 imgstyle.marginleft='100px';   
};
var button=document.getElementById('counter');
button.onclick=function(){
  counter=counter+1;
  var span=document.getElementById('count');
  span.innerHTML=counter.toString();
};
