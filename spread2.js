let userObj = {
  id: 1,
  name: "Usman",
};

let userProfileObj = {
  age: 21,
  occupation: "Student",
  skills: "Full Stack Web",
};

let userCompleteObj = { ...userObj, ...userProfileObj };

console.log(userCompleteObj);
