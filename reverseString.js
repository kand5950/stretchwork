const arg = process.argv.slice(2);


const reverse = arg => {
  const reverseArg = [];
  for (let i = 0; i < arg.length; i++) {
    reverseArg[i] = '';
    for (let j = (arg[i].length - 1); j >= 0; j--) {
      reverseArg[i] += arg[i][j];
    }
  }
  return reverseArg;
  
};

for (const reveresed of reverse(arg)) {
  console.log(reveresed);
}
