//Comando para establecer conexion activa

var socket = io();

socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});


var lbtTicket1 = $('#lblTicket1');
var lbtTicket2 = $('#lblTicket2');
var lbtTicket3 = $('#lblTicket3');
var lbtTicket4 = $('#lblTicket4');

var lbtEscritorio1 = $('#lblEscritorio1');
var lbtEscritorio2 = $('#lblEscritorio2');
var lbtEscritorio3 = $('#lblEscritorio3');
var lbtEscritorio4 = $('#lblEscritorio4');


var lblTickets = [lbtTicket1, lbtTicket2, lbtTicket3, lbtTicket4];

var lblEscritorios = [lbtEscritorio1, lbtEscritorio2, lbtEscritorio3, lbtEscritorio4];

socket.on('estadoActual', function(data) {
    console.log(data);
    actualizaHtml(data.ultimos4);
});



socket.on('ultimos4', function(data) {
    // console.log(data);
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHtml(data.ultimos4);
});

function actualizaHtml(ultimos4) {

    for (var i = 0; i <= ultimos4.length - 1; i++) {

        lblTickets[i].text('Ticket' + ultimos4[i].numero);
        lblEscritorios[i].text('Bascula' + ultimos4[i].escritorio);

    }

}