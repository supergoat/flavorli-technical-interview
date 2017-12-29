// Tests contains all the tests the user creates
var all_tests = [];

// test_group is used to temporarily store tests belonging to the same group (i.e same algorithm)
var test_group;
// Creates a new group of tests ands adds it to the all_tests array
function groupTests(algorithm_id, tests) {
	test_group = {
		"id": algorithm_id,
		"algorithm_tests": tests
	}
	all_tests.push(test_group)
}

/** 
 * Create a new test
 * @param: {string } description - The test description
 * @param: {string | object | array } actual_answer - The actual answer received when running the function being tested
 * @param: {string | object | array } expected_answer - The answer expected when running the function being tested
 */
function test(description, actual_answer, expected_answer) {
	// create the test object
	var test = {}
	// add the test description
	test.description = description;
	// Check if the test passes and set the passed property to true if it did and false otherwise
	test.passed = checkIfPassing(expected_answer, actual_answer);
	if (!test.passed) {
		test.expected = expected_answer;
		test.actual = actual_answer;
	}
	// Returns the test
	return test;
}

// Checks if the test is passing
// returns true (passing test) if the expected answer and actual answer are equal
function checkIfPassing(expected, actual) {
	// depending on the expected, different methods
	// of comparison between the expected and actual
	// should be used
	if (expected instanceof Array) { // if array
		return compareArrays(expected, actual)
	} else if (expected instanceof Object) { // if object
		return compareObjects(expected, actual); // not implemented yet
	} else { // else
		return expected === actual;
	}
}

// compares two objects
function compareObjects() {
	// implement
	return false;
}

// compares two arrays, returns true if they are the same
// or false if they are not
function compareArrays(array1, array2) {
	return (array1.length == array2.length) && array1.every(function(element, index) {
    	return element === array2[index]; 
	});
}