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

// Async/await gives developers a better way to use promises.(this async keyword will always return promise)
const asyncFunction=async()=>{return "hie, nice to meet you"}
console.log(asyncFunction())//output: Promise { 'hie, nice to meet you' }
asyncFunction().then((result)=>console.log("async result-->",result))//output: async result--> hie, nice to meet you

// Now use of await keyword with async function

// Problem statement(reason: why we are using await keyword)
// Example: return product of two values
const productOfTwo=(a,b)=>{
    const promise=new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove(a*b) 
        },1000)
    })
   return promise
}

// calling of it
productOfTwo(2, 4).then(result => {
    return productOfTwo(result, 2).then(finalResult => console.log('final_result', finalResult)).catch(error => console.log(error));
  }).catch(error => console.log(error));

//   In the above code, we're first getting the product of 2 and 4. Then we're using that result to multiply it by 2 again, and then finally printing the product.

//   If you execute the above code, you will see the final result as 16 which is 2 4 = 8 and 8 2 = 16.

// The above code of .then and .catch looks pretty complicated and difficult to understand at one glance.

// So using async/await we can simplify the above code to this:

const useOfAwait=async()=>{
    const result=await productOfTwo(2,4)
    const finalResult=await productOfTwo(result,2)
    console.log("final result of await",finalResult)
}
useOfAwait()

// There is a very important thing you need to remember: The above async/await code will work exactly the same as when we use .then – so the next await line (line 2) will not be executed until the previous await call (line 1) is successful.