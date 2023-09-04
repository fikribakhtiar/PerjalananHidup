import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = 0;

//Tanpa Lodash
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
console.log(sum);

//Dengan Lodash
const sumLodash = _.sum(myArray);
console.log(sumLodash);



