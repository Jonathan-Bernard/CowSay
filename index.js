const userInfo = require('./information');
var cowsay = require("cowsay");

const { name, campus } = userInfo;

console.log(cowsay.say({
    text: `${name} ${campus}`,
    e: "oO",
    T: "U"
}));