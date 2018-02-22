console.log('Loaded!');
//change the text of main-text
var element=document.getElementById('main-text');
element.innerHTML='my second new value';
//move the image
var img=document.getElementById('vaishu');
img.onclick=function(){
 img.style.marginleft='100px';   
};