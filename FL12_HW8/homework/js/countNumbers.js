function makeNumber() {
    let obj = arguments[0];
    let arr = obj.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ( Number(arr[i]) === Number(Number(arr[i]))) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('')
}


function countNumbers(a) {
    let obj = makeNumber(a);
    let arr = obj.split('');
    const result ={};

    arr.forEach(number => {
        result[number] !== undefined ? result[number] ++ : result[number] = 1
    });
    return result
}

countNumbers()