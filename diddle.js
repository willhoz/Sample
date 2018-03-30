console.log('Hello World');

let int; 

function EvenNumbers(int){
	let count = 0;
	while (count < int){
		console.log(count + ' ' + 2*count);
		count++;
	}
}

EvenNumbers(10);
