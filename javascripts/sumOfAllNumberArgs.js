function sumOfArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const sumOfArgsArrow = (...rest) => {
  return rest.reduce((total, curr) => {
    return (total += curr);
  }, 0);
};

console.log(sumOfArgsArrow(1, 2, 3, 4, 5));
