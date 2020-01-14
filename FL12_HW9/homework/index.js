// 1

function convert(...args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        let x = args[i];
        if (typeof x === 'number') {
            x = String(x)
        } else if (typeof x === 'string') {
            x = parseInt(x)
        }
        arr.push(x)
    }
    return arr
}

// 2

function executeforEach(arr, func) {
    const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(func(arr[i]));
	}
	return result;
}

// 3 

function mapArray(arr, func) {
    let arrCopy = arr.slice();
    for (let i = 0; i< arrCopy.length; i++) {
        if (typeof arrCopy[i] === 'string') {
            arrCopy[i] = parseInt(arrCopy[i])
        }
    }
	return executeforEach(arrCopy, func);
}

// 4 

function filterArray(arr, condition) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		if (condition(value)) {
			result.push(value);
		}
	}
	return result;
}

// 5 


function flipOver(str) {
    const arr = str.split('')
    let reversStr = '';
    for(let i = arr.length - 1; i >= 0; i-- ) {
        reversStr += arr[i];
    }
    return reversStr
}

// 6 

function makeListFromRange(args) {
    let min = args[0];
    let max = args[0];
    for (let i = 0; i < args.length; i++) {
        if (max < args[i]) {
            max = args[i]
        }
        if (min > args[i]) {
            min = args[i]
        }
    }

    let newArgs = []
    for (let i = min; i <= max; i++) {
        newArgs.push(i)
    }
    return newArgs
}

// 7


function getArrayOfKeys(arr, condition) {
    let arrCopy = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {

            if ( key === condition) {
                arrCopy[i] = arr[i][key];
            }
          } 
    }
    return arrCopy
}

// 8 

function substitute(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 30) {
            arr[i] = '*'
        }
    }
    return arr
}

// 9 

function getPastDay(date, substruction) {
    const dt = new Date(date);
    dt.setDate(dt.getDate() - substruction)
    return dt;
    }


// 10 

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    }