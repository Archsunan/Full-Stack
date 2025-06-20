
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log("Third fruit:", fruits[2]);
fruits.push("Pineapple");
console.log("After push:", fruits);
fruits.shift();
console.log("After shift:", fruits);
console.log("Length of array:", fruits.length);
console.log("Fruits list:");
for (let fruit of fruits) {
    console.log(fruit);
}
fruits.reverse();
console.log("Reversed array:", fruits);
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum of numbers:", sum);