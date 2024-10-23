// console.log("This is advanced section...")

// Q. 1 - Event Delegation

// Q. 2

// function* numberGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = numberGenerator();

// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// Q. 3

// export const sum = (a,b) =>console.log(a+b);
// export const mul = (a,b) =>console.log(a*b);
// export const div = (a,b) =>console.log(a/b);
// export const sub = (a,b) =>console.log(a-b);

// Q . 4

// const bankAc = {
//     balance:1000
// }

// const handler ={
//     get(account, property){
//         console.log(`Getting ${property}`);

//         return account[property]
//     },
//     set(account, property, value){
//         if(property==='balance' && value <0){
//             console.log(`Can not set balance to a negative value`)
//             return false;
//         }

//         console.log(`Setting ${property} to ${value}`)

//         account[property] = value;
//         return true;
//     }
// }

// const proxyAc = new Proxy(bankAc,handler)

// console.log(proxyAc.balance)

// proxyAc.balance = 1200;

// console.log(proxyAc.balance);

// Q. 5

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// const result = multiply(5)(10)(5)

// console.log(result)

// Q. 6 -> shallow copy
// const original = {name:'Alice',
//     address : {city:'London'}
// }
// console.log(original.address.city);

// const shallowClone = {...original};

// shallowClone.address.city = 'New york'

// console.log(original.address.city)

// deep copy
// const original = {name:'Alice',
//     address : {city:'London'}
// }
// // console.log(original.address.city);

// const deepClone = JSON.parse(JSON.stringify(original));

// deepClone.address.city = 'New york'

// console.log(original.address.city)

// Q. 7
// function memoize(fn) {
//   const cache = {};
//   return function (arg) {
//     if (cache[arg]) {
//       return cache[arg];
//     }

//   const result = fn(arg);
//   cache[arg] = result;
//   return result;
// }
// }

// const factorial = memoize((n) => {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// });

// console.log(factorial(5));
// console.log(factorial(5));

// Q .8

// const weakMap = new WeakMap();

// let user = {name:'Suman'};

// weakMap.set(user,'Web Dev Mastery');

// console.log(weakMap.get(user))

// user = null;

// console.log(weakMap.get(user));

// const weakSet = new WeakSet();

// let obj1 = {id:1}
// let obj2 = {id:2}
// let obj3 = {id:2}

// weakSet.add(obj1)
// weakSet.add(obj2)

// console.log(weakSet.has(obj3))

// obj1 = null;

// Q. 9
// function declaration

// greet()
// function greet(){
//     console.log("Hello")
// }

// const greet = function(){
//     console.log("Hello")
// }
// greet();

// Q. 10

// const salary = Symbol('sl');

// const user = {
//     name:'Suman',
//     age:500,
//     email:'suman@gmail.com',
//     [salary] : 984734838
// }

// // console.log(user[salary])
// // console.log(Object.keys(user))

// for(let key in user){
//     console.log(key)
// }

// Q. 11
// function greet(greeting,city,country){
//     console.log(`${greeting} , ${this.name}, ${this.age}, ${city}, ${country}`)
// }

// const user = {name:'Suman',age:500}

// // greet.call(user,'Hello')
// // greet.apply(user,['Hello','London','uk'])
// const greetAlice = greet.bind(user)

// greetAlice("Hello", "London", "England");

// Q. 12

// async function* asyncGenerator(){
//     const data = ['Suman','Aman','WDM'];
//     for(const name of data){
//         await new Promise(resolve=>setTimeout(resolve,1000));
//         yield name;
//     }
// }

// (async ()=>{
//     for await(const name of asyncGenerator()){
//         console.log(name)
//     }
// })()

// Q.13
// const original = { name: "suman" };

// const frozenObject = Object.freeze(original);

// if (!Object.isFrozen(original)) {
//   frozenObject.name = "wdm";

// }

// console.log(frozenObject.name);

// Q.14

// function printArray(arr){
//     for(let i=0; i<arr.length; i++){
//        if(Array.isArray(arr[i])){
//         printArray(arr[i])
//        }else{
//         console.log(arr[i])
//        }
//     }
// }

// const arr = [1,[2,[3,4],5],6]
// printArray(arr)

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[1][0])
// console.log(arr[1][1])
// 1,2,3,4,5,6

// Q.15
// function reverseWord(str){
// return str.split(" ").reverse().join(" ");
// }

// const str = "Hello world from JavaScript";

// console.log(reverseWord(str))

// Q. 16
// function isValidParentheses(str){
//     let stack = []; // [,
//     let pairs = {
//         ")":"(",
//         "}":"{",
//         "]":"[",    
//     }

//     for(let char of str){
//         if(["(","{","["].includes(char)){
//             stack.push(char);
//         }else if(stack.pop() !== pairs[char]){
//             return false;
//         }
//     }

//     return stack.length === 0;
// }

// const str1 = "[{()}]";
// const str2 = "[{()}";
// console.log(isValidParentheses(str1))
// console.log(isValidParentheses(str2))

//  
//  [(]

// Q. 17
// function removeDuplicates(arr){
//     let result = [];

//     for(let i=0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result
// }

// const arr = [1,2,2,3,4,4,5]

// console.log(removeDuplicates(arr))

// Q.18
// function maxSubArraySum(arr){
//     let maxSum = arr[0];
//     let currSum = arr[0];

//     for(let i=1; i<arr.length; i++){
//         currSum = Math.max(arr[i],currSum+arr[i]);
//         maxSum = Math.max(maxSum,currSum);
//     }

//     return maxSum
// }

// const arr = [-2,1,-3,4,-1,2,1,-5,4]
// console.log(maxSubArraySum(arr))


// Q. 19 
// function fNRC(str){
//     const frequency = new Array(256).fill(0);

//     for(let i=0; i<str.length; i++){
//         frequency[str.charCodeAt(i)]++;
//     }

//     for(let i =0; i<str.length; i++){
//         if(frequency[str.charCodeAt(i)] === 1)
//         {
//             return str[i]
//         }
//     }
//     return null;
// }


// const str = "swiss"

// // console.log(str.charCodeAt(0))
// console.log(fNRC(str))

// Q. 20
function fMN(arr,n){
    let expectedSum = (n*(n+1))/2;

    let actualSum  = 0;
    for(let i=0; i<arr.length; i++){
        actualSum += arr[i]
    }

    return expectedSum - actualSum
}


const arr = [1,2,4,5,6] 
let n = 6;
console.log(fMN(arr,n))