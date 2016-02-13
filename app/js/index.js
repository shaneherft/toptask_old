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