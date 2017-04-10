

function xx() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 


function aa() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello123123s ' + name); 
	}; 
}; 
module.exports = aa;
module.exports = xx;

//只能存在一个后面exports会覆盖前面的
// 作为模块的js