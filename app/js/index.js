Trello.authorize({
    type: "redirect",
    name: "Toptask",
    scope: {
        read: true,
        write: false
    },
    expiration: "never",
    success: function() { onAuthorizeSuccessful(); console.log("Successful authentication"); },
    error: function() { console.log("Failed authentication"); }
});

// var cardShort;
//
//
// Trello.get('1/cards/3lSJRj2N');

console.log("Check code runs up to here");

function onAuthorizeSuccessful() {
    var token = Trello.token();
    today = new Date("December 25, 2015 12:00:00");
    console.log(token);

}
