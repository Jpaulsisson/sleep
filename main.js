// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Example 2:
// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

//// helper function ////             //This is almost a verbatim function from MDN's async documentation
function resolveAfterX(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}
///////// first attempt /////////     //This isn't a true first attempt solve, I knew I needed setTimeout()
async function sleep(millis) {        //but it took me at least 10 tries to get the syntax correct
await resolveAfterX(millis);
}

/////// without helper ///////////
async function wait(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  }) 
}



////// I knew the solution immediately but learning the implementation was fun and hopefully useful /////