var boton = document.querySelector('button');

var sectionDivs = document.querySelector('section');

var pushme= function() {
var div = document.createElement('div');
    sectionDivs.appendChild(div);
    div.setAttribute('style', 'background:pink; color: blue; height:100px; width:100px; display: inline; padding: 4px; border: 1px solid black')
var contenido = document.querySelectorAll('div');
var cantidad = contenido.length;
var dato = document.createTextNode(cantidad);
div.appendChild(dato);
  }

boton.addEventListener('click', pushme);
