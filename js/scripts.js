// Business Logic

function checkOne(number){
    while(number >= 0) {
    if(number.includes(1)){
      return "beep!";
    } else {
      return number;
    }
  }
}

function checkTwo(number){
  while(number >= 0) {
    if(number.includes(2)){
      return "boop!";
    } else {
      return number;
    }
  }
}


function checkThree(number){
  while(number >= 0) {
    if(number.includes(3)){
      return "Won't you be my neighbor?";
    } else {
      return number;
    }
  }
}

function numberPriority(number){
  number = [];
  for (let i = 0; i <= number[i]; i++){
    if (checkThree(number[i])){
      number.push(checkThree);
    }
  }
  return number;
}
