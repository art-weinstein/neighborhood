// Business Logic

function checkOne(number){
  if(number.includes(1)){
    return "beep!";
  } else {
    return number;
  }
}


function checkTwo(number){
  if(number.includes(2)){
    return "boop!";
  } else {
    return number;
  }
}



function checkThree(number){
  if(number.includes(3)){
    return "Won't you be my neighbor?";
  } else {
    return number;
  }
}


function numberPriority(number){
  let numArray = number;
  let finalArray = [];
  let count = number.split(" ");
      if (numArray.includes("3")){
        const three = checkThree(numArray);
        finalArray.push(three);
      } else if (numArray.includes("2")) {
        const two = checkTwo(numArray);
        finalArray.push(two);
      } else if (numArray.includes(1)) {
        const one = checkOne(numArray);
        finalArray.push(one);
      } else {
        finalArray.push(numArray);
      }
      return finalArray;
  }
