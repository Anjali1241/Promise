// What are Promises?
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises have three states: pending, fulfilled, and rejected.

// Types of Promises
// Pending: The initial state of a promise. It represents that the operation is still in progress and has not been completed yet.

// Fulfilled: The state of a promise when the operation has been completed successfully. The promise has a value, and it is available to be used.

// Rejected: The state of a promise when the operation has failed. The promise has a reason for the failure, and it can be handled using the catch method.

// Why we use Promise?
// Ans:to prevent from callback hell and allow asynchronous operations.

// Notes:
// 1. Promises are used to handle asynchronous operations in JavaScript.
// 2. Promises were added in ES6.
// 3. Can be use for API call
// 4. When we create a promise, it will be either resolved or rejected but not both at the same time. So we cannot add two resolve or reject function calls in the same promise.
// 5. we can pass only a single value to the resolve or reject function.
// 6. If you want to pass multiple values to a resolve function, pass it as an object.
// -------------------------Examples--------------------------------

// Reject promise
const newPromise=new Promise((resolve,reject)=>{
    let user=0
    user?resolve(user):reject("user not found")
})
newPromise.then((data)=>console.log(data)).catch(data=>console.log(data))

// Resolve promise
const resolvePromise=new Promise((resolve,reject)=>{
    let user=1
    user?resolve(user):reject("user not found")
})
resolvePromise.then((data)=>console.log(data)).catch(data=>console.log(data))


// Both combined
const combinedPromise=new Promise((resolve,reject)=>{
    const sum=4+5+"a";
    if(typeof sum=="number"){

        resolve("sum is in number")
    }else{
        reject("sry sum is not a number")
    }
})
combinedPromise.then((result)=>console.log(result)).catch((result)=>console.log(result))

// Delay Promise and return object because resolve and reject only return single value(i.e: we have to pass it in object format)
const delayPromise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const sum=4+5;
        if(typeof sum=="number"){
            resolve({
                a:4,
                b:5,
                sum
            })
        }else{
            reject("sry sum is not a number")
        }
    },2000)
})
delayPromise.then((result)=>console.log("Delay promise",result)).catch((result)=>console.log(result))