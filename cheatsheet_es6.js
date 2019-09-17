// Javascript ES6 Cheatsheet By John Cotterell johnmdcotterell@gmail.com www.cotterzz.com  github.com/cotterzz/

class ClassName {

	constructor(value) {
		this.value = value;
		console.log(`You passed ${this.value} to this Class constructor`);
  }

	methodName(anotherValue){
		console.log(`You passed ${anotherValue} to this method`);
	}
}

class ChildClassName extends ClassName{
	constructor(value) {
		super( value );
	}

	methodName(anotherValue) {
		super.methodName(anotherValue);
  }
}

