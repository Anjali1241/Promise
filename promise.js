// What are Promises?
// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises have three states: pending, fulfilled, and rejected.

// Types of Promises
// Pending: The initial state of a promise. It represents that the operation is still in progress and has not been completed yet.

// Fulfilled: The state of a promise when the operation has been completed successfully. The promise has a value, and it is available to be used.

// Rejected: The state of a promise when the operation has failed. The promise has a reason for the failure, and it can be handled using the catch method.

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