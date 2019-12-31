function isLeapYear(x){
	let today = new Date(x);
	let year = today.getFullYear();

	function isLeap(year) {
                return year % 4 === 0;
            }
            if(isNaN(year)){
                console.log("Invalid Date");
            } else {
            if (isLeap(year)){
                console.log(year + " is a leap year");
            } else {
                console.log(year + " is not a leap year");
            }
        }
}

isLeapYear()