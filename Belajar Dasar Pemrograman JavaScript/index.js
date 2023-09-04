/*import coffeeStock from './state.js';
 
const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}
 
displayStock(coffeeStock); */

/*/
class ValidationError extends Error {
  constructor(message) {
    super(message);
      this.name = "ValidationError";
  }
}

const json = '{ "name": "Yoda", "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }

  if(!user.age) {
    throw new ValidationError("'age' is required.");
  }
 
  console.log(user.name); // Yoda
  console.log(user.age);  // 20
} catch (error) {
  if (error instanceof SyntaxError) {
  console.log(`JSON Error: ${error.message}`);
} else if (error instanceof ValidationError) {
  console.log('Invalid data : ${error.message}');
}else if (error instanceof ReferenceError){
  console.log(error.message);
} 
else {
  console.log(error.stack);
}
}
*/


// Submission
/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
/*
class ValidationError extends Error {
  constructor(message) {
    super(message);
      this.name = "ValidationError";
  }
}

// TODO 2
function validateNumberInput(a, b, c){
  if(typeof a != 'number'){
    throw new ValidationError("Argumen pertama harus number");
  } else if(typeof b != 'number'){
    throw new ValidationError("Argumen kedua harus number");
  }else if(typeof c != 'number'){
    throw new ValidationError("Argumen ketiga harus number");
  }
}


const detectTriangle = (a, b, c) => {
  // TODO 3
  try{
    validateNumberInput(a, b , c);
  }catch{
    return error.message;
  }

  


  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
};*/

//Call back
/*
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];

    if (isOffline){
      callback(new Error('cannot retrieve users due offline'), null);
      return
    }
 
    callback(null, users);
  }, 3000);
}
 
function usersCallback(error, users) {
  if(error){
    console.log('process failed:', error.message);
    return
  }

  console.log('process success:', users);
  
}
 
getUsers(false, usersCallback);
getUsers(true, usersCallback);*/

//Callback Hell
/*
function getUserWeather(userId) {
  try {
    const user = getUser(userId);
    const weather = getWeather(user.location);
    return { ...user, ...weather };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
 
const userWeather = getUserWeather(1);
console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 } */

//Promise
/*
function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {

    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message)); */


  // Callback -> Promise
/*
  const { promisify } = require('util');
 
  function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
       if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }
   
  // create a Promise version of getUsers
  const getUsersPromise = promisify(getUsers);

  */

  /*
const{promisify} = require('util')

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId === 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}


module.exports = { getProvinces: getProvinces };
const getUsersPromise = promisify(getProvinces);

getUsersPromise(false)
  .then(countryId => console.log(countryId))
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(countryId => console.log(countryId))
  .catch(err => console.log(err.message));*/

  // Promise berantai

  function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'));
        }
  
        resolve(amount);
      }, 1000);
    });
  }
  
  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
  
        resolve('ticket-1');
      }, 1000);
    });
  }
  
  function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'));
        }
  
        resolve('enjoy the movie');
      }, 1000);
    });
  }
  
  function watchMovie() {
    withDrawMoney(10)
      .then((money) => {
        return buyCinemaTicket(money);
      })
      .then((ticket) => {
        return goInsideCinema(ticket);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  
  watchMovie();