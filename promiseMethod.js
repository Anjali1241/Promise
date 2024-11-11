// Methods
// 1. Promise.all
// 2. Promise.race
// 3. Promise.allSettled
// 4. Promise.any

// Promise.all:
    // -This method is used to execute multiple asynchronous tasks simultaneously without having to wait for another task to finish.
    // -Take parameter as array of promises
// Note
// promise2 is rejected so the catch handler will be executed, and in the case of Promise.all:
// 1. If one of the promises is rejected, the error will contain the error message of the failed promise (as in our case above)
// 2. If multiple promises are rejected, the error will be the error message of the first failed promise.
// Note: Even though the intermediate promise gets rejected, all next promises will not be stopped from executing. They will all be executed – but only the first rejected promise value will be available in the error parameter of the catch block.
// example:
const promise1=new Promise((resolve)=>resolve("promise one"))
const promise2=new Promise((resolve,reject)=>reject("promise two reject"))
const promise3=new Promise((resolve)=>resolve("promise three"))

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log('resolved', result); // resolved ["promise1 success", "promise2 success", "promise3 success"]
  })
  .catch((error) => {
    console.log('rejected', error);
  });


  // Promise.race method
  // -This method is used to execute multiple asynchronous tasks simultaneously and returns the first promise that is resolved
// Note:
// Promise.race method, it will wait until the first promise gets resolved or rejected and then:
// 1. If the first promise in the promise chain gets resolved, the .then handler will be executed and the result will be the result of the first resolved promise.
// 2. If the first promise in the promise chain gets rejected, the .catch handler will be executed and the result will be the result of the first failed promise.
// 3. If multiple promises are rejected, the .catch handler will be executed and the result will be the result of the first failed promise.
  Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('resolved', result); // resolved promise one
  })
  .catch((error) => {
    console.log('rejected', error);
  });

  // Promise.allSettled Method
  //  Promise.allSettled we can get the result of all the promises, even if they failed.
  //  It returns an array of objects, each of which contains a status and a value.

  // Example:
  Promise.allSettled([promise1, promise2, promise3])
  .then((result) => {
    console.log('resolved', result); // resolved promise one
  })
  .catch((error) => {
    console.log('rejected', error);
  });