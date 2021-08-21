# My First Webpage

### By Art Weinstein

### A basic webpage created as a first student project at Epicodus.

## Technologies Used

* HTML
* CSS

## Specs
  * Test: The program will check if a digit contains a 3 and return "Won't you be my neighbor?":
    1. Code:   if (string.includes("3")){
      return "Won't you be my neighbor?";
    2. Number = 30
    3. Expected Output: Won't you be my neighbor?.
    
  * Test: The program will check if a digit contains a 1 and return "beep!":
    1. Code:if (string.includes("1")) {
      return "Boop!";
    2. Number = 10
    3. Expected Output: beep!.

  * Test: The program will check if a digit contains a 2 and return "boop!":
    1. Code: Code:if (string.includes("2")) {
    2. Number = 20
    3. Expected Output: boop!.


  * Test: The program will prioritize coverting the number three, then two, then one subsequently. 
    1. Code:  if (string.includes("3")){
      return "Won't you be my neighbor?";
    } else if (string.includes("2")) {
      return "Boop!";
    } else if (string.includes("1")) {
      return "Beep!";
    } else {
      return string;
    }
    2. Number = 123
    3. Expected Output: Won't you be my neighbor?.

    * Test: The program will loop sequential numbers up until the user's input
    1. Code:   for (i=0; i<=numArray; i++){
    finalArray.push(i);
  }
    2. Number = 5
    3. Expected Output: [0, 1, 2, 3, 4, 5]
  
  * Test: The program will map the initial array of numbers to a new string array.
  1. Code: let stringArray = initialArray.map(function(number){
    return number.toString();
  });
  2. number: 5
  3. Expected output ["0", "1", "2", "3", "4", "5"]

  * Test: The program will replace numbers with words in the string through mapping to a final array.
    1. Code: let finalArray = stringArray.map(function(string){}
    2. Number = 3
    3. Expected Output: 0, 1, 2 , Won't you be my neighbor?.

  * Test: The program will implement the code into a "numberPriority function
    1. Code: function numberPriority(number)
    2. Number = 3
    3. Expected Output: 0, 1, 2 , Won't you be my neighbor?


## Description


## Setup/Installation Requirements

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository.
2. Open the new directory.
3. Open index.html in a browser.

## Known Bugs

* No bugs known at the moment.

## License

* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Art Weinstein

## Contact Information

[Email](artur.weintsein@gmail.com)