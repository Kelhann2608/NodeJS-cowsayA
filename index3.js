const myProfile = require('./information');
let cowsay = require('cowsay');

console.log(cowsay . say({
    text : `My name is ${myProfile.myName} and I'm from ${myProfile.campus}`
}));