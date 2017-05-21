var borrar = document.getElementsByClassName("borrar");
var content= document.getElementsByClassName("imax");

for (var i = 0; i < borrar.length; i++) {
    var hid = borrar[i];
    hid.addEventListener("click", deleteF);
}

