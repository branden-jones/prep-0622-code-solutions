var person = {
  firstName: 'Branden',
  lastName: 'Jones',
  hobby: 'Fixing up my house!'
};
console.log(person);

var fullName = person['firstName'] + ' ' + 'Wayne' + ' ' + person['lastName'];
console.log(fullName);

person.job = 'Bum on the Street';
console.log(person.job);

person.previousJob = 'Drug Addict for Life';
console.log(person.previousJob);

console.log(person);
