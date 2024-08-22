var div = document.getElementById('div')

div.addEventListener('click',function() {
    alert('Hola! Soy el div');
});

var div = document.getElementById('boton')

div.addEventListener('click',function(event) {
    alert('Hola!);
    event.stopPropagation(); 
});
