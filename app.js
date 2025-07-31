// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaHTML = document.getElementById("listaAmigos");


function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;
    let li = document.createElement("li");

    if (nombreDeAmigo == ""){
        alert("Por favor, inserte un nombre.");
    }
    else
        if (amigos.map(nombre => nombre.toLowerCase()).includes(nombreDeAmigo.toLowerCase())) {
        alert("Este nombre ya esta repetido.");
        }
        else{
            amigos.push(nombreDeAmigo);
            li.textContent = nombreDeAmigo;
            listaHTML.appendChild(li);
        }
    borrarCampo();
    console.log(amigos);
}

function borrarCampo() {
    let inputAmigo = document.getElementById("amigo");
    inputAmigo.value = "";
    inputAmigo.focus();
}

function sortearAmigo() {
    let amigoSorteado = document.getElementById("resultado");
    let maximo = amigos.length;
    let indiceAleatorio = Math.floor(Math.random() * maximo);
    if (amigos.length == 0) {
        alert("La lista de amigos esta vacia.");
    }
    else{
        console.log(amigos[indiceAleatorio]);
        amigoSorteado.innerText = amigos[indiceAleatorio];
    }
}