// Business Logic
function numberPriority(number){
  let initialArray = [];
  let numArray = number;
  for (i=0; i<=numArray; i++){
    initialArray.push(i);
  }
  let stringArray = initialArray.map(function(number){
    return number.toString();
  });
  let finalArray = stringArray.map(function(string) {
    if (string.includes("3")){
      return "Won't you be my neighbor?";
    } else if (string.includes("2")) {
      return "Boop!";
    } else if (string.includes("1")) {
      return "Beep!";
    } else {
      return string;
    }
  });
  return finalArray;
}

// UI logic