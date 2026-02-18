// // В каком порядке будут выведены логи?

/////////////timeout - macro
/////////////Promise - micro (приорететнее - выолнится быстрее, чем macro)

// // TASK 1
// //sync1
// console.log("A");
// //macrotask1
// setTimeout(() => {
//   console.log("B");
// });
// //macrotask2
// setTimeout(() => {
//   //sync2
//   const promise = new Promise((resolve) => {
//     //sync3
//     console.log("C");
//     //microtask1
//     resolve("D");
//     //sync4
//     console.log("E");
//   });
//   //microtask1
//   promise.then((value) => {
//     //sync6
//     console.log(value);
//     //sync7
//     setTimeout(() => {
//       console.log("F");
//     });
//   });
//   //sync5
//   console.log("G");
// });

// // TASK 2
// //macrotask1
// setTimeout(() => {
//   //sync3
//   console.log("G");
//   //microtask1
//   Promise.resolve().then(() => console.log("H"));
// }, 0);
// //sync1
// new Promise(function (resolve) {
//   //sync2
//   console.log("I");
//   //macrotask2
//   setTimeout(function () {
//     //sync4
//     console.log("J");
//     //microtask2
//     resolve("K");
//   }, 0);
// }).then((res) => {
//   //sync5
//   console.log("L");
// //macrotask3
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });
// // I G H J L K

// // TASK 3
// //microtask1
// Promise.resolve().then(() => console.log(0));
// //microtask2
// Promise.resolve()
//   .then(() => console.log(1))
//   .then(() => console.log(2));
// //microtask3
// Promise.resolve()
//   .then(() => console.log(3))
//   .then(() => console.log(4))
//   .then(() => console.log(5));
// // 0 1 3 2 4 5

// // TASK 4
// //macrotask1
// setTimeout(() => {
//   console.log("timeout");//sync8
// }, 0);
// //sync1
// const p = new Promise((resolve) => {
//   console.log("Promise creation"); //sync2
//   resolve(1); //microtask1
// });
// //sync3
// const p2 = new Promise(() => {
//   console.log(123);//sync4
// });
// //microtask1
// p.then(() => {
//   console.log("Promise resolving"); //sync7
// });

// console.log("End"); //sync5

// console.log("p2 =>>", p2); //sync6

// //Promise creation 123 End p2 =>> Promise{} Promise resolving timeout


// TASK 5

// //sync1
// console.log("script start");
// //macrotask1
// setTimeout(function () {
//   console.log("setTimeout");//sync5
// }, 0);
// //microtask1
// Promise.resolve()
//   .then(function () {
//     console.log("promise1"); //sync3
//   })
//   .then(function () {
//     console.log("promise2"); //sync4
//   });
// //sync2
// console.log("script end");

// script start, script end, promise1, promise2, setTimeout