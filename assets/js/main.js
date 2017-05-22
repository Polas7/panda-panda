var borrar = document.getElementsByClassName("borrar");
var content= document.getElementsByClassName("imax");

for (var i = 0; i < borrar.length; i++) {
    var hid = borrar[i];
    hid.addEventListener("click", deleteF);
}

var pictures = ["assets/img/primer.jpg","assets/img/segund.jpg", "assets/img/leng.jpg", "assets/img/tercer.jpg"];
 var content= document.getElementById("01");
 var img= document.createElement("img");
 img.setAttribute("src", pictures[0]);
 img.setAttribute("class", "imagen");
 content.appendChild(img);