// Business Logic

function checkOne(number){
  if(number.includes(1)){
    return "beep!";
  } else {
    return false;
  }
}


function checkTwo(number){
  if(number.includes(2)){
    return "boop!";
  } else {
    return false;
  }
}



function checkThree(number){
  if(number.includes(3)){
    return "Won't you be my neighbor?";
  } else {
    return false;
  }
}


function numberPriority(number){
  let numArray = number;
  let finalArray = [];
  for (i=0; i<=numArray; i++){
    finalArray.push(i);
  }
  
  if (number.includes("3")){
    finalArray.forEach(function(three){
      three = checkThree
    });
  } else if (number.includes("2")) {
    const two = checkTwo(numArray);
  } else if (number.includes("1")) {
    const one = checkOne(numArray);
    finalArray.push(one);
  } else {
    finalArray.push(numArray);
  }
  // let stringArray = finalArray.map(function(number){
  //   return number.toString();
  // });
  return finalArray;
}


function numberPriority(number){
  let initialArray = [];
  let numArray = number;
  for (i=0; i<=numArray; i++){
    initialArray.push(i);
  }
  let 
  let mapArray = initialArray.map(function(number){
    if (checkThree === true){
    return string = "Won't you be my neighbor?";
    } else if (checkTwo === true) {
      return string = "Boop!";
    } else if (checkOne === true) {
      return string = "Beep!";
    } else {
      return number
    }
  });
  let convertedArray = mapArray.join(", ")
  return convertedArray;
  }
