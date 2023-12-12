let n = 5;

function factorial(n) {
	let x = 1;
	
	if(n === 0)
		return 1;
	for (let i = 2; i <= n; i++)b
		x = x * i;
	return x;
}

console.log(factorial(n));