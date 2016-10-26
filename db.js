"use strict"; 

class DB {
	constructor(name, engine) {
		this.name = name || null;
		engine ? 
			this.engine(engine) :
			this.engine = null;
		this.engine = engine || null;
		this.collection = {};
	}
	engine(engine) {
		switch(engine) {
			case "mysql":
			case "MYSQL":
			case "MySQL":
				this.engine = "mysql";
				break;

			case "mongodb":
			case "MONGODB":
			case "MongoDB":
				this.engine = "mysql";
				break;
		}
	}
	mapping(name, obj) {
		if (typeof name != 'string') throw '"name" argument is not string'; 
		if (typeof obj != 'object') throw '"object" argument is not object'; 
		this.collection[name] = obj;
	}
	create(name, object) {
		
	}
	read() {

	}
	update() {

	}
	delete() {

	}

}

var pet = new DB("pet");
pet.mapping("data", {
	name: "String",
	sell: "Date"
})