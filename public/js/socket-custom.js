var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});
// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos la conexión, bruh')
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Funciona ya, por Dios'
}, function(resp) {
    console.log('Respuesta del servidor:', resp);
});

// Escuchar información

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

})