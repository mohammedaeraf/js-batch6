function printPattern(n, ch) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + ch + " ";
    }
    console.log(str);
  }
}
printPattern(12, "$");
