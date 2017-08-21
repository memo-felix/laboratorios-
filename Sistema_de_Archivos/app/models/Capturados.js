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
		    "capturado": "1"
		    
        },
		adapter: {
			type: "sql",
			collection_name: "Capturados",
			idAttribute: "idCapturados"
		}
		},
};