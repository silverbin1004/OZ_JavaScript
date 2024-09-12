// 1. 객체 리터럴을 사용하여 이름이 "홍길동", 나이가 25인 person 객체를 만들어보세요.
// const Person = {
//     이름 : "홍길동",
//     나이 : 25
// };

// 2. 아래 car 객체의 brand 속성에 접근하여 콘솔에 출력해보세요.
// const car = {
//     brand : "Toyota",
//     model : "Corolla"
// };

// console.log(car.brand);
// console.log(car.model);

// 3. person 객체가 sayHello 메소드를 가지고 있습니다. 이를 호출하여 콘솔에 "Hello, I am Alice."를 출력하세요.
// const person = {
//     name : "Alice",
//     sayHello : function(){
//         console.log("Hello, I am " + this.name + ".");
//     }
// };

// person.sayHello();

// 4. person 객체에 greet 메소드를 추가하여 "Hi, I'm [name]"을 출력하도록 만들어보세요.
// const person = {
//     name : "Bob",
//     greet : function(){
//         console.log("Hello, I am " + this.name + ".");
//     }
// };

// person.greet();

// 5. Person이라는 생성자 함수를 사용하여 이름과 나이를 속성으로 가진 객체를 만들고, 해당 객체로 이름이 "John", 나이가 30인 객체를 생성하세요.
// function Person(name,age) {
//     this.name = name,
//     this.age = age;
// };

// const person = new Person("John", 30);

// 6. 이름과 나이를 속성으로 가진 객체 배열에서 나이가 18 이상인 사람만 필터링하세요.
// const people = [
//     {name : "John", age : 17},
//     {name : "Jane", age : 20},
//     {name : "Paul", age : 15},
//     {name : "Mark", age : 25},
// ]

// const adults = people.filter(function(peoples){
//     return peoples.age >= 18;
// })
// console.log(adults);

// 7. "Apple", "Banana", "Orange"를 요소로 가진 배열을 만들어보세요.
// 8. 아래 배열의 두 번째 요소를 출력해보세요.
// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[1]);

// 9. numbers 배열에 숫자 5를 추가해보세요.(push)
// const numbers = [1, 2, 3, 4];

// numbers.push(5);

// console.log(numbers);

// 10. colors 배열에서 마지막 요소를 제거하세요.(pop)
// const colors = ["Red", "Green", "Blue"];

// colors.pop();

// console.log(colors);

// 11. days 배열의 첫 번째 요소를 제거하세요.(shift)
// const days = ["Monday", "Tuesday", "Wednesday"];

// days.shift();

// console.log(days);

// 12. names 배열의 맨 앞에 "Alice"를 추가하세요.(unshift)
// const names = ["Bob", "Charlie"];

// names.unshift("Alice");

// console.log(names);

// 13. numbers 배열의 각 요소를 forEach를 사용하여 출력하세요.
// const numbers = [1, 2, 3];

// numbers.forEach(function(num){
//     console.log(num);
// });

// 14. numbers 배열의 각 요소를 2배로 변환한 새로운 배열을 만드세요.(map)
// const numbers = [1, 2, 3, 4];

// const numbers2 = numbers.map(function(num){
//     return num * 2;
// });

// console.log(numbers2);

// 15. ages 배열에서 18세 이상인 숫자만 필터링하세요.
// const ages = [12, 18, 20, 14, 25];

// const adults = ages.filter(function(age){
//     return age >= 18;
// })

// console.log(adults);

// 16. prices 배열의 합계를 구하세요.(reduce)
// const prices = [10, 20, 30, 40];

// const add = prices.reduce(function(total,prices){
//     return total+prices;
// },0);

// console.log(add);

// 17. 아래 배열에 "Banana"가 포함되어 있는지 확인하세요.(includes)
//const fruits = ["Apple", "Orange", "Grapes"];

// console.log(fruits.includes("Banana"));

// 18. numbers 배열을 오름차순으로 정렬하세요.
// const numbers = [5, 2, 8, 1, 3];

// console.log(numbers.sort());

// numbers.sort(function(a,b){
//     return a - b;
// });

// 19. letters 배열을 뒤집어보세요.
// const letters = ["a", "b", "c", "d"];

// letters.reverse();

// console.log(letters);

// 20. animals 배열에서 첫 번째와 두 번째 요소를 잘라내어 새로운 배열을 만드세요.
// const animals = ["Cat", "Dog", "Elephant", "Lion"];


// console.log(animals.slice(2,4));

// 21. fruits 배열의 두 번째 위치에 "Strawberry"를 추가하세요.(splice)
// let fruits = ["Apple", "Banana", "Orange"];

// fruits.splice(1, 0, "Strawberry");

// console.log(fruits);
// console.log(fruits.splice(1,0,"Strawberry")); -> 안되는 이유는?

// 22. arr1과 arr2 배열을 합쳐 새로운 배열을 만드세요.(concat)
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const add = arr1.concat(arr2);

// console.log(add);

// 23. products 배열에서 가격이 100 이상인 첫 번째 상품을 찾으세요.(find)
// const products = [
//     {name: "Shirt", price : 50},
//     {name: "Shoes", price : 120},
//     {name: "Hat", price : 80},
// ];

// const find = products.find(function(pr){
//     return pr.price > 100;
// });

// console.log(find);

// 24. numbers 배열의 모든 요소가 짝수인지 확인하세요.(every)
// const numbers = [2, 4, 6, 8];

// const even = numbers.every(function(num){
//     return num % 2 === 0;
// });

// console.log(even);

// 25. ages 배열의 요소 중 하나라도 21세 이상인지 확인하세요.(some)
// const ages = [16, 20, 18, 19];

// const older = ages.some(function(num){
//     return num >= 21
// });

// console.log(older);

// 26. 아래 배열에 중복된 값이 있는지 확인하는 코드를 작성하세요.
// const numbers = [1, 2, 3, 4, 2, 5];

// const result = [...new Set(numbers.filter((item, index) => numbers.indexOf(item) !== index))];

// console.log(result);

// 27. 아래 배열을 나이(age)를 기준으로 오름차순 정렬하세요.
// const people = [
//     {name : "John", age : 30},
//     {name : "Jane", age : 25},
//     {name : "Mark", age : 35},
// ]

// const new_age = people.map(num=>num.age);

// const arr_age = new_age.sort(function(a,b){
//     return a-b;
// })

// console.log(arr_age);

//방법2
// const arr_age1 = new_age.sort(function(a1,b1){
//     return a1.age - b1.age;
// })

// console.log(arr_age1);

// 28. ages 배열에서 21세 이상의 요소의 인덱스를 찾으세요.(findIndex)
// const ages = [16, 18, 22, 20];

// const find_index = ages.findIndex(num=>num>=21);

// console.log(find_index);

// 29. words 배열을 쉼표로 구분된 문자열로 변환하세요(join)
// const words = ["Hello", "World", "JavaScript"];

// const line = words.join();

// console.log(line);

// //example 2
// const words2 = [1,2,3,4,5];

// const line2 = words2.join();

// console.log(line2);

// 30. 중첩된 배열을 평탄화하여 하나의 배열로 만드세요.(flat)
// const nestedArray = [[1,2],[3,4],[5,[6,7]]];

// console.log(nestedArray.flat(2));

