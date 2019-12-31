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

makeNumber()