
var txtMezclar=$("#txtMezclar");
var txtTexto=$("#txtTexto");
var mensajes=['Estamos agradecidos por su preferencia','Daremos lo mejor por ti','Los mejores en la industria'];
var actual=0;
  txtMezclar.shuffleLetters();

  txtTexto.on("keypress",function( e ){



  });

setInterval(function(){
  actual++;
  if(actual>=mensajes.length){
    actual=0;
  }

  txtMezclar.shuffleLetters({
    "text": mensajes [actual]
  });

}, 10000);


$(function($) {
  $('.slider').sss();
});
