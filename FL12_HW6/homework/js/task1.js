let a = prompt('Imput value a');
let b = prompt('Imput value b');
let c = prompt('Imput value c');

a = Number(a);
if(isFinite(a) !== parseInt(a, 10) && a !== parseInt(a, 10)) {
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

if (a === 0 || b === 0 || c === 0) {
    console.log('Invalid input data')
} else {
    const D = Math.pow(b, 2) - 4*a*c
    console.log('D = '+D)
    if (D > 0) {
        const x1 = -b + Math.sqrt(D) / 2*a;
        const x2 = -b - Math.sqrt(D) / 2*a;
        console.log('x1 = '+x1);
        console.log('x2 = '+x2)
    } else if (D === 0) {
        const x = -b / 2*a;
        console.log('x = '+x)
    } else if (D < 0) {
        console.log('no solution')
    } 
}

