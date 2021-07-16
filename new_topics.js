//MODULES
	//Node Modules
		//Node Exports
		//Node Imports
	//ES6 Modules
		//ES6 Exports
		//ES6 Imports
			//Dynamic Imports
				let modulePath = "module.js";
				import(modulePath).then((module) => { let moduleClass = new module.default() });