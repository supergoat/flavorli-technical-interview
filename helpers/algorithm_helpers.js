/** 
	Files Contains a number of helper functions used to print algorithm related data
	to the screen
*/


/**
 * Creates a new list item to represent the algorithm information 
 * @param {object } algorithm - Contains the algorithm information 
 *
 */
function createAlgorithmListItem(algorithm) {
	// Create an <li> node
	var algorithm_node = document.createElement("LI");
	// Add text to node, including an href which links to the detailed view of the algorithm (algorithm.html)
	algorithm_node.innerHTML = 
		"<a href='./algorithm.html?algorithm_id=" + algorithm.id + "'><p><b>Title:</b> " 
		+ algorithm.title + "<br><b>Description:</b> "
		+ algorithm.description + "</p></a>";
		
	return algorithm_node;
}

/**
 * Creates a new list item to represent the current step of the algorithm instructions 
 * @param { string } instruction - Represents the current step in the instructions
*/
function createAlgorithmInstructionItem(instruction) {
	// Create an <li> node
	var algorithm_instructions_node = document.createElement("LI");
	// Add text to node
	algorithm_instructions_node.innerHTML =  instruction;
	return algorithm_instructions_node;
}

/**
 * Creates a new list item to represent the algorithm test 
 * @param { object } test  - Contains the test algorithm information
 */
function createAlgorithmTestItem(test) {
	// Create an <li> node
	var test_node = document.createElement("LI");
	// Create node text
	var test_node_text = test.description;
	// add the text to test_node list item
	test_node.innerHTML = test_node_text + "<br>";
	// if test didn't pass, print the expected and actual value
	if (!test.passed) {
		test_node.innerHTML += "=> expected " + test.expected + " but found " + test.actual;
	}

	return test_node;
}