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
      string = "Won't you be my neighbor?"
      return string;
    } else if (string.includes("2")) {
      string = "Boop!"
      return string;
    } else if (string.includes("1")) {
      string = "Beep!"
      return string;
    } else {
      return string;
    }
  });
  return finalArray.join(", ");
}

// UI logic
$(document).ready(function(){
  $("form#neighborhood").submit(function (event){
    event.preventDefault();
    const input = $("#number").val();
    let string = numberPriority(input);
    $(".output").text(string);
    $(".output").show();
  });
});