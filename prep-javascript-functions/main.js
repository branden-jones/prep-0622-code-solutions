function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return 60 * (hours);
}
console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + (name) + '!';
}
console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return num1 * num2 / 5;
}
console.log(addAndMultiplyBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Branden', 'Jones'));

function cube(number) {
  return Math.pow(number, 2);
}
console.log(cube(371)); // this is Branden's Paladin Strength
