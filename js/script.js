// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much it will cost for a certain order
 */
function displayNumbers () {

	//declare variables
	let numbers = ""

	//get user input
	let counter = parseInt(document.getElementById('userMin').value)
	let userNum = parseInt(document.getElementById('userMax').value)
	
	// use a while loop to display the numbers from Min up to the max number
	while (counter <= userNum) {
		// build the string of numbers with a line break each time
		numbers = numbers + counter + "<br>"
		// increment the counter
		counter = counter + 1
	}

	//Display results
	document.getElementById('display-results').innerHTML = numbers
}
	