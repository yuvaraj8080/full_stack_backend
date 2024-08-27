const names: readonly string[] = ['Dylan'];

let outTuple: [number,string,boolean,string,];
outTuple = [5,"pooja",false,"Yuvi"];
console.log(outTuple);


// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);