$(document).ready(function() {
//Alternativa para mostar y ocultar text2 al pasar el mouse por el primer <div>
// // $("#text1").mouseenter(function () {
// //         $("#text2").show();
// // })

// // $("#text1").mouseout(function () {
// //         $("#text2").hide();
// })



//Consultar si serviría para poder agrandar imagen
// $("#caja").hover (function(){
//     let rutaImagen = $(this).attr('src=assets/img/Pac-Man_Cutscene.svg (1).png');
// });


// Mostrar y ocultar text2 al hacer hover en text1
$('#text1').hover(function() {
    $('#text2').show();
}, function() {
    $('#text2').hide();
});


// Para agrandar imagen <div> id "caja2"
$('#caja2').click(function() {
    $('#img').toggleClass('ampliado'); // Alternar clase para agrandar o restaurar tamaño

});

$('#caja2').mouseleave(function() {
    $('#img').removeClass('ampliado'); // Eliminar la clase "ampliado" al salir
  });



// Agrandar texto al hacer doble clic en caja3
$('#caja3').dblclick(function() {
    $(this).css('font-size', '24px'); // Agrandar el texto
});



});