/* Sum All Algorithm */
// the first argument 0, is the id of the algorithm being tested
groupTests(0, 
	[
		test("sum([1,4] should return 10", 
			sum([1, 4]), 10),
		test("sum([4,1] should return 10", 
			sum([4, 1]), 10),
		test("sum([5, 10] should return 45", 
			sum([5, 10]), 45),
		test("sum([10, 5] should return 45", 
			sum([10, 5]), 45)
		]
)

// function sum produces the sum of all the values in the range of the two array values provided 
function sum(arr) {
	// sum of the values
	var sum = 0;
	// Starts the for loop using the lowest value from the array, increementing
	// the value and adding it to the sum until the maximum value from the array is
	// reached
	// Math.min finds the lowest value from the array
	// Math.max finds the highest value from the array
	for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
		sum += i;
	}
	return sum;
}

/* Diff Two Arrays Algorithm */
groupTests(1, 
	[
		test("diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']) should return ['pink wool']", 
			diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['pink wool'])
	]
)

function diffArray() {
	return []
}

/* Recursion */
groupTests(2,
	[
		test("sumAll([3]) should return 3", sumAll([3]), 3),
		test("sumAll([1, 2, 3]) should return 6", sumAll([1, 2, 3]), 6),
		test("sumAll([1, 2, 3, 4]) should return 10", sumAll([1, 2, 3, 4]), 10),
		test("sumAll([1, 2, 3, 4, 5]) should return 21", sumAll([1, 2, 3, 4, 5]), 15)
	])

function sumAll(arr) {
	if (arr.length == 1) {
		return arr[0];
	}
	return arr[0] + sumAll(arr.slice(1));
}

