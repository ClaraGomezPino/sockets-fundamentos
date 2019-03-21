const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a Hallownest!'
    })



    client.on('disconnect', () => {
        console.log('Se desconectó el usuario, nos ha dejado solos.')
    });


    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo funciona bien. :D'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo ha salido mal. :c'
        //     });
        // }


    });

});