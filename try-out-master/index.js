//this is assigning trying to new promise
//normal function
const trying = new Promise(function(resolve, reject) {
  resolve(5);
});

//this is assigning trying to the whole of the tryin value,
//which is assigned to the new promise
const trying = (tryin = new Promise(function(resolve, reject) {
  resolve(5);
}));

//1. trying is assigned to tryin which is a function that has
//new promise inside

//2.

const trying = () => {
  return "shit";
};
const trying = () =>{
  return new Promise(function(resolve, reject)
    resolve(5);"};

function eat(food) {
  return "shit";
}

const eat = food => {
  return "shit";
};
const eat = food => "shit";
