function checkOne(number){
while(number > 0) {
  if(number.includes(1)){
    return "beep!";
  } else {
    return number;
  }
}
}