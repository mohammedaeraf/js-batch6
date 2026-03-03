// to assign a grade based on the percentage score
let percent = 25;
let grade = "";

if (percent >= 80) {
  grade = "A";
} else if (percent >= 60) {
  grade = "B";
} else if (percent >= 40) {
  grade = "C";
} else {
  grade = "D";
}
console.log("Your percentage score is: " + percent + "%");
console.log("You grade is: " + grade);

switch (grade) {
  case "A": // if the grade is A
    console.log("Excellent! You have scored above 80%");
    break;
  case "B": // if the grade is B
    console.log("Good! You have scored between 60% and 79%");
    break;
  case "C":
    console.log("Fair! You have scored between 40% and 59%");
    break;
  case "D":
    console.log("Poor! You have scored below 40%");
    break;
  default:
    console.log("Invalid grade");
}
