//1

let user  = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,
    studentStatus: "isActive"
};

console.log(user.studentStatus);

console.log("-----")

//2
let cars = ['alfa-romeo', 'maserati', 'lamborghini', 'ferrari', 'bugatti'];

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}
console.log("-----")

let i=0;
while (i<cars.length) {
    console.log(cars[i]);
    i++;
}
console.log("-----")
for(let x of cars) {
    console.log(x);
}
console.log("-----")
//3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let item of numbers){
    if (item>5) {
        console.log(item);
    }
}
console.log("-----")
//4

let user1 = {
    name: 'giorgi',
    age1: 20,
    studentStatus1: 'active'
}
if (user1.age1<18 && user1.studentStatus1==='active'){
    console.log("hello");
} else if (user1.name=== 'levani') {
    console.log("hello levani");
} else if (user1.studentStatus1 === 'active' || user1.age1<25) {
    console.log("hello world");
} else {
    console.log("error");
}

console.log("-----");
//5

let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
array.forEach(function (row){
    row.forEach(function (column){
        if (column>0)
            console.log(column)
    })
})

console.log('------');

//6

let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for (let item of array1) {
    if (item%2===0) {
        console.log(item);
    }
}
console.log('------')
for (let item of array1) {
    if (item%2!==0) {
        console.log(item);
    }
}
console.log('------');

//7

function positiveNums(...numbers) {
    let sumOfPositives = 0;
    for (let item of numbers) {
        if (item>0){
            sumOfPositives+=item;
        }
    }
    return sumOfPositives;
}
let resultSum = positiveNums(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(resultSum);

console.log('---------');

//8

let user3 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
}
function logInChecker() {
    if (user3.isloggedin===true) {
        return (user3.firstname + ' ' + user3.lastname);
    } else if (user3.isloggedin===false){
        return false;
    }
}
console.log(logInChecker());

console.log('------');

//9

let array4 = [25, 58, 56, 17, 456, 6, 94];
let findMaxNumber = (items) => {
    let highest =0;
    for (let i=0; i<items.length; i++){
        if (items[i]>highest) {
            highest =items[i];
        }
    }
    return highest;
}
console.log(findMaxNumber(array4));

//10

console.log('------');

let array2 = [1,2,4,10,34,5,7,87];
for (let item of array2){
    if (item>0 && item<10){
        console.log(item);
    }
}

console.log('------');

//11

let numbers1 =[1,2,3,4,5,6,7,8,9,10];
for (let item of numbers1){
    if (item===6){
        break;
    }
    console.log(item);
}