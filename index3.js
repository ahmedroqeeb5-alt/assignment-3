let firstName = "Ahmed";
let lastName = "Roqeeb";
let country = "Nigeria";
let city = "Ilorin";
let age = 250;
let isMarried = false;
let year = 2026;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

//Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') === 10);
//Write three JavaScript statement which provide truthy value.
console.log(Boolean(10));
console.log(Boolean("Hello"));
console.log(Boolean(true));
//Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(false));
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length != 'jargon'.length);
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//Use the Date object to do the following activities
let now = new Date()

console.log(now)
console.log(now.getFullYear())
console.log(now.getTime())
console.log(now.getDay() + 1)
console.log(now.getHours())
console.log(now.getMonth() + 1)

let yy = now.getFullYear()
let mm = now.getMonth() + 1
let day = now.getDay() + 1
let hrs = now.getHours()
let mins = now.getMinutes()
let secs = now.getSeconds()
let date = now.getDate()

console.log(`${date}/${mm}/${yy}:${hrs}:${mins}:${secs}`)

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base:");
let height = prompt("Enter height:");
console.log("The area of the triangle is " + 100);

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimet
let a = prompt("Enter side a")
let b = prompt("Enter side b")
let c = prompt("Enter side c")
console.log("The perimeter of the triangle is"  + 12)
//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = Number(prompt("Enter length:"));
let width = Number(prompt("Enter width:"));

let area = length * width;
let perimeter = 2 * (length + width);

console.log("The area of the rectangle is " + area);
console.log("The perimeter of the rectangle is " + perimeter);
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = Number(prompt("Enter radius:"));
let pi = 3.14;

let area2 = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log("The area of the circle is " + area);
console.log("The circumference of the circle is " + circumference);
