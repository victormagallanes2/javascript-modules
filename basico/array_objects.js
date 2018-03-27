var diccionario = {"verdura1": "zanaoria",
	       "verdura2": "remolacha",
	       "verdura3": "tomate"

	       }


// agrerar items

diccionario["verdura4"] = "apio"

diccionario["verdura5"] = [1, 2, 3]
// # modificar

diccionario["verdura3"] = "papa"

// # eliminar

delete diccionario["verdura3"]

// console.log(diccionario)
// # lee

for (let x in diccionario) {
	// console.log(x)
}

for (let x in diccionario) {
	// console.log(diccionario[x])
}


for (let x in diccionario) {
    console.log(x, diccionario[x])
}

var data = require('./json_anidado.json');

// for (y in data["hits"]["hits"]) {
// 	console.log(y)
// }

// import json

// with open('json_anidado.json', 'r') as file:
//     data = json.load(file)
    
//     s = [x.get('_source') for x in data["hits"]["hits"]]
//     print s
