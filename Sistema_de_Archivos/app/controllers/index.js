$.index.open();


var url = "http://uami-cgma.esy.es/prueba/prueba.txt";
var json, fugitivos, capturados, listaf, i;
var arreglo_fugitivos = [];
var arreglo_capturados = [];

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        json = JSON.parse(this.responseText);
        
        
      for (var i=0; i <4; i++) {
             fugitivos = json.Fugitivos[i].nombre;
             arreglo_fugitivos.push(fugitivos);
             listaf = Alloy.createModel("Fugitivos", {nombre: arreglo_fugitivos[i],});
             listaf.save();
             Alloy.Collections.Fugitivos.fetch();
              
        };
}
});
xhr.open('GET', url);
xhr.send();


function capturar(e){
	var pica = $.lbnombre.text;
	
	alert(pica);
	Ti.API.info(arreglo_fugitivos);
}