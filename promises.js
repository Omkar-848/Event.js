//JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier.
// Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states:


 // Pending: The task is in initial state.
 //  Fulfilled: The task completed successfully, and the result is available.
//  Rejected: The task failed, and an error is provided.

 
//      let promise new Promise((resolve, reject) => {
//     //Perform async operation
//     if (operationSuccessful) {
//     resolve("Task successful");
//     } else {
//     reject("Task failed");
//     }
//     });



// Promise.all(([
// Promise.resolve("Task 1 completed"),
// Promise.resolve("Task 2 completed"),
// Promise.reject("Task 3 failed")
// ])
// .then((results) => console.log(results))
// .catch((error)  => console.error(error));



 // function fetchData() {
 // return new Promise((resolve, reject) -> (
// setTimeout(() => {