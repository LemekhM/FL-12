let a = prompt('Imput tringle side length a');
let b = prompt('Imput tringle side length b');
let c = prompt('Imput tringle side length c');

a = Number(a);
if(isFinite(a) !== parseInt(a, 10) && a !== Number(a, 10)) {
    console.log('Invalid input data')
}

b = Number(b);
if(isFinite(b) !== Number(b, 10) && b !== Number(b, 10)) {
    console.log('Invalid input data')
}
c = Number(c);
if(isFinite(c) !== Number(c, 10) && c !== Number(c, 10)) {
    console.log('Invalid input data')
}


if (a === 0 || b === 0 || c === 0 ) {
    alert('A tringle must have 3 side with a positive definite length');
    console.log('Triangle doesn’t exist')
} else if (a !== Number(a, 10) || b !== Number(b, 10) || c !== Number(c, 10)){
    console.log('Triangle doesn’t exist')
} else if (a === b && a === c) {
    console.log('Equilateral triangle')
} else if (a === b || a === c || b === c ) {
    console.log('Isosceles triangle')    
} else {
    console.log('Scalene triangle')
}