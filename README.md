# My First Webpage

### By Art Weinstein

### A basic webpage making use of array mapping to create a new, alternate array based on user input. 

## Technologies Used

* HTML
* CSS
* Javascript

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

  * Test: The program will implement a .join(", ") at the end of the finalArray to add the requested punctuation and make the output clean. 
    1. Code: return finalArray.join(", ");
    2. Number = 3
    3. Expected Output: 0, 1, 2 , Won't you be my neighbor?
## Description
This program initially gave me a lot of trouble. I was trying to link helper functions to my mapped arrays but just couldn't do it. Instead, I resorted to mapping the inputted array, and altering the new away within the main function. The program counts up to an inputted number, and alters numbers containing 3, 2 and 1. The program prioritizes numbers containing 3 and returns "Will you be my neighbor?" The next on the priority list are numbers containing 2, which returns "boop!" 1 is last on the priority list, and returns numbers containing 1 with "beep!" Styling may be implemented later, but for the time being the program functions as expected based on user input. I went overtime on this project and learned a lot. 

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