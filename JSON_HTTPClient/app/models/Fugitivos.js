exports.definition = {
	config: {
		columns: {
		    "nombre": "string",
		    "capturado": "int",
		    "url": "string",
		    "capturadoLat": "real",
		    "capturadoLong": "real"
		},
		"defaults" : {
		    "capturado": "0"
		    
        },
		adapter: {
			type: "sql",
			collection_name: "Fugitivos",
			idAttribute: "idFugitivos"
		}
	},
	
};