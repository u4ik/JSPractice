
/**
 * Function that runs the fibonacci sequence.
 * @param {*} n - The current value of the fibonacci sequence.
 * @param {*} lookup - Lookup storage for memoization.
 * @returns 
 */
 function fib(n, lookup = {}) {
	if (lookup[n]) {
		return lookup[n]
	}
	let result;
	if (n < 2) {
		result = n
	}
	else {
		result = fib(n - 1, lookup) + fib(n - 2, lookup)
	}
	lookup[n] = result
	return result
}

for (let i = 0; i < 100; i++) {
	console.log(fib(i))
}