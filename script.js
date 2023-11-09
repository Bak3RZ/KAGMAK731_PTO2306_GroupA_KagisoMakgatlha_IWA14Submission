//Challenge 01

firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = (parameter) => { 
  console.log(parameter) 
  console.log(parameter)
}

// The function logTwice takes a parameter, which is a string. This string is passed to console.log two times. As a result, the string is logged in the console twice.

const logHobby = () => { // renamed hobby to logHobby
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

logHobby()
// "hobby" has a specific meaning that doesn't fit with the context of a variable used for logging. The name "logHobby" more accurately represents the purpose of the variable.
