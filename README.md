# Lab 10: It's A Date!
## Due: Tuesday, June 13th, 09:00
##### Covalence
###### Full Stack: Summer 2017

## Info

* Using JavaScript to calculate time and dates is pretty simple with its [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). The thing is, it doesn't format the date. For example:
```
Date.now() // returns something like 1436375033726
var d = new Date();
d.getMonth() // returns an integer 0-11
d.getHours() // returns an integer 0-23
```
* This is a decent format if doing computations; but if intended for display, it should be readable by an average person. This project will format the return values of the Date object.
* Mocha is a testing library. We will talk more about unit testing later.
* This project will run a Mocha tester against your code.
* The tester runs by loading index.html in your browser. You will know how many tests pass, and how many fail.
* As you update your code, save the happenTemplate.js file and refresh your index.html file in the browser to run the test again.

## Objectives
* You will be building a date formatting library
* The basic structure has been scaffolded out for you
* You only need to implement the functions
	* Note they have been collapsed to single lines to save space
	* When you start implementing, feel free to add lines between the curly braces
    * Every function will return a string
* You will only be writing code in happenTemplate.js
	* Do not make any changes to index.html
	* Do not make any changes to happen.tests.js
	* Do not make any changes to anything in the lib folder