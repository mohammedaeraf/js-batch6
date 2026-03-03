// to assign a grade based on the percentage score
let percent = 29;
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
console.log(grade);