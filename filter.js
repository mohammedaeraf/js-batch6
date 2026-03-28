let marks = [85, 90, 56, 23, 98, 42, 70];

let goodMarks = marks.filter((mark) => mark >= 70);
console.log(goodMarks);

// bad marks
let badMarks = marks.filter((mark) => mark < 50);
console.log(badMarks);
