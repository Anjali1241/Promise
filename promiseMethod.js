// Methods
// 1. Promise.all
// 2. Promise.race
// 3. Promise.allSettled
// 4. Promise.any

// Promise.all:
    // -This method is used to execute multiple asynchronous tasks simultaneously without having to wait for another task to finish.
    // -Take parameter as array of promises

// example:
const promise1=new Promise((resolve)=>resolve("promise one"))
const promise2=new Promise((resolve)=>resolve("promise two"))
const promise3=new Promise((resolve)=>resolve("promise three"))

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log('resolved', result); // resolved ["promise1 success", "promise2 success", "promise3 success"]
  })
  .catch((error) => {
    console.log('rejected', error);
  });