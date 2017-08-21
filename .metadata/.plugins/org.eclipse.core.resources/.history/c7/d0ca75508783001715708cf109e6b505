$.index.open();

var nombres = ["Enedina Arellano Félix", "Juan José Esparragoza Moreno", "Ismael El Mayo Zambada", "Rafael Caro Quintero"];
var capturados = ["Joaquín Loera Guzmán ", "Heriberto Lazcano Lazcano", "Arturo Beltrán Leyva", "Jorge Eduardo Costilla Sánchez"];
for(i=0;i<nombres.length;i++){
	var listaf = Alloy.createModel("Fugitivos", {
		nombre: nombres[i],
	});
	listaf.save();
	Alloy.Collections.Fugitivos.fetch();
}
for(j=0;j<capturados.length;j++){
	var listac = Alloy.createModel("Capturados", {
		nombre:capturados[j],
	});
	listac.save();
	Alloy.Collections.Capturados.fetch();
}