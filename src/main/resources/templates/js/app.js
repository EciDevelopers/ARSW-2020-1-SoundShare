var apiclient = apiclient;
var websocket = websocket;
var app = (function () {
    class Acto{
        constructor(youtubeaudio){
            this.youtubeaudio=youtube-audio;
        }
    }


    var id;

	var addUser = function(nombre,pass,nickname) {
		var newUser = {
			nombre : nombre,
			pass : pass,
			nickname : nickname,
		};
		apiclient.addUser(JSON.stringify(newUser));
	};
	var addSong = function(nombre,autor,genero,url) {
		var newSong = {
			id : url.split('v=')[1],
			nombre : nombre,
			genero : genero,
			author : autor,
			
		};
		apiclient.addSong(JSON.stringify(newSong));

	};
	var addRoom = function(id,nombre,genero,tipo) {
    		var newRoom = {
    			id : id,
    			nombre : nombre,
    			genero : genero,
    			tipo : tipo,
    		};
    		apiclient.addRoom(JSON.stringify(newRoom));
    };

	function createtable(){
        apiclient.getSongs(showSongs);
    }

    function createtableroom(){
        apiclient.getRooms(showRooms);
    }

    function showSongs(canciones){
        canciones.map(function(canciones) {
              $("#tablas").append(
                  '<tr class="table-success"> <td>'+
                  canciones.id +
                  '</td> <td>' +
                  canciones.nombre +
                  '</td> <td>' +
                  canciones.genero +
                  '</td> <td>' +
                  canciones.author +
                  '</td> <td>' +
                  canciones.minuto +
                  "</td> <td> <form><button type='button' class='btn btn-primary' style='  width:50%;background-color: #17202A; border: 0'  onclick='onYouTubeIframeAPIReady(\""+ canciones.nombre+"\")'><img  src='../img/play2.png' style='width:75%' alt='x'/></button></form></td>"
              );
        });
    }

    function showRooms(salas){
        salas.map(function(salas){
            $("#tablasrooms").append(
              '<tr class="table-success"> <td>'+
              salas.id +
              '</td> <td>' +
              salas.nombre +
              '</td> <td>' +
              salas.genero +
              '</td> <td>' +
              salas.tipo
            );
        });
    }

	function setUserLogged(nickname){
        console.log(nickname);
        localStorage.setItem("selectedUser",nickname);
		

    }
	function printUserLogged(){
		if (localStorage.getItem("selectedUser") !== undefined){
			document.getElementById("nick").innerHTML ='welcome ' + localStorage.getItem("selectedUser") + ' !';
			console.log('user');
			console.log(localStorage.getItem("selectedUser"));
			
		}

    }
	function getUserLogged(room){
		console.log(room);
		var url = 'https://webchatsoundshare.herokuapp.com/'+room+'?nickname='+localStorage.getItem("selectedUser");
		console.log(url);
		document.getElementById("chat").data = url;
		return url;
    }
	function getNameRoom(){
		apiclient.getNameRoom(window.location.search.substring(1).substring(3),loadNameRoom);
		console.log(window.location.search.substring(1).substring(3));
		websocket.connectAndSubscribeUser(window.location.search.substring(1).substring(3),localStorage.getItem("selectedUser"));
    }
	function printUserstoSala(users){
		console.log(users);
    }
	
	function loadNameRoom(nombre){
		localStorage.setItem("nameRoom",nombre);
		namesala = nombre;
		apiclient.getUsersToSala(nombre,printUserstoSala);
		console.log(nombre);
		nomesala=nombre;
		document.getElementById("nombre").innerHTML = 'welcome room '+nombre+' !';
		getUserLogged(nombre);
    }
    return {
      
		addUser : addUser,
		addSong : addSong,
		addRoom : addRoom,
		setUserLogged : setUserLogged,
		printUserLogged : printUserLogged,
		getUserLogged : getUserLogged,
		createtable : createtable,
		createtableroom : createtableroom,
		getNameRoom : getNameRoom,
		printUserstoSala :  printUserstoSala
    };

})();
