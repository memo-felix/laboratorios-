$.index.open();


var url = "http://uami-cgma.esy.es/prueba/prueba.txt";
var json, fugitivos, capturados;
var arreglo_fugitivos = [];
var arreglo_capturados = [];

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        json = JSON.parse(this.responseText);
        
        
      for (var i=0; i <4; i++) {
             fugitivos = json.Fugitivos[i].nombre;
             arreglo_fugitivos.push(fugitivos);
             var listaf = Alloy.createModel("Fugitivos", {nombre: arreglo_fugitivos[i],});
             listaf.save();
             Alloy.Collections.Fugitivos.fetch();
              
             capturados = json.Capturados[i].nombre;
             arreglo_capturados.push(capturados);
             var listac = Alloy.createModel("Capturados", {nombre: arreglo_capturados[i],});
	         listac.save();
	         Alloy.Collections.Capturados.fetch();	
        };
}
});
xhr.open('GET', url);
xhr.send();

function hola(){
	var abrir = Alloy.createController('detallesfugitivos');
	abrir.getView();
	}

