// console.log("This is intermediate level")

// Q. 1

// console.log("This is task 1")
// console.log("This is task 2")
// console.log("This is task 3")

// ram - 10:30
// syam - 10:40
// ghansyaam - 10:30

// 10:50

// setInterval async await

// console.log("ram");

// setTimeout(() => {
//     console.log("syam")
// }, 2000);

// console.log("ghansyaam");

// Q. 2

// syaam - 50
// ram - 50 ( maanga syaam )
// 1.) de skta hai -> (resolve) -> fulfilled -> then
// 2.) nhi dega -> (reject) -> reject -> catch

// const fetchData = new Promise((resolve, reject) => {
//   let number = 10;

//   if (number === 10) {
//     resolve("This is a number");
//   } else {
//     reject("This is not a number");
//   }
// });

// fetchData.then((data)=>console.log(data)).catch((data)=>console.log(data))

// Q. 3

// const print = () => console.log("print function")

// function fetchData(a,callback){
//     console.log("this is main function",a)

//     callback();
// }

// fetchData(10,print)

// Q. 4

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, your name is ${this.name}`);
// }
// Person.prototype.greet2 = function() {
//     console.log(`Hello, your age is ${this.age}`);
// }

// const suman = new Person('Superman',20);

// suman.greet();
// suman.greet2();

// Q. 5 - Event loop -> theory

// Q. 6
// const number = [1,2,3,4,5,6];

// const result = number.map((num)=>num -2)

// console.log(result)
// console.log(number)
// const evenNum = number.filter((num)=>num>4);
// console.log(evenNum)

// const number = [1,2,3,4];
// const sum = number.reduce((ac,num)=>ac+num,0);
// // num = 1 , ac = 0 => num + ac => 1 
// // num = 2 , ac = 1 => 3
// // num = 3 , ac = 3 => 6
// // num = 4 , ac = 6 => 10
// console.log(sum)

// Q. 7 

// const fetchData = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve('Data Feched!');
//         }, 2000);
//     })
// }

// const getData = async () =>{
//   const data = await fetchData();
//   console.log(data)
// }

// getData();


// const fetchData = async () =>{
// const api = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await api.json();

// console.log(data)
// }
// fetchData();

// Q. 9
// function debounce(fun,delay){
//     let timeout
    
//     return function(...args){
//         clearTimeout(timeout);

//         timeout = setTimeout(()=>{
//             fun(...args);
//         },delay)
//     }
// }

// const search = debounce(()=>{
//     console.log("Searching....")
// },1000)

// console.log("Typing in search box...")
// search();

// Q. 10 

// const color = ['red','green','blue'];

// const [fColor, sColor] = color

// console.log(fColor);
// console.log(sColor);

const person = {
    name :'suman',
    age:500,
    email:'suman@gmail.com'
}

const {name,email,age} = person

console.log(name)
console.log(email)
console.log(age)