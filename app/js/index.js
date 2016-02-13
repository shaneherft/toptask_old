// var electronCookies = require('electron-cookies');

console.log("index.js")
console.log(Trello);

Trello.authorize({
    type: "redirect",
    name: "Toptask",
    scope: {
        read: true,
        write: false
    },
    expiration: "never",
    success: function() { console.log("Successful authentication"); },
    error: function() { console.log("Failed authentication"); }
});