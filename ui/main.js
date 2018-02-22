console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerHTML='my second new value';
//move the image
var img=document.getElementById('madi');
img.onClick=function(){
 imgstyle.marginleft='100px';   
};