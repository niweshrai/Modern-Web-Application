class Person {
	_firstName: string = "";
   	get firstName() { return this._firstName; }
   	set firstName(value: string) { this._firstName = value.toUpperCase(); }
}

var p = new Person();
p.firstName = "Jennifer";
console.log(p.firstName);