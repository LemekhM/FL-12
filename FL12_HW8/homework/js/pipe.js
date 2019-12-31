function pipe(){
	let sum=arguments[0];
	for (let i = 1; i <= arguments.length-1; i++) {
		sum=addOne(sum);
	}
	console.log(sum);
}
function addOne(x){
	x=x+1;
	return x;
}

pipe()