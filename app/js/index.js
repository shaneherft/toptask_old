var onAuthorize = function() {
    updateLoggedIn();
    $('.icons').hide();
    $("#output").empty();

    Trello.members.get(("me"), function(member){
        $("#fullName").text(member.fullName);

        var $cards = $("<div>")
            .text("Loading card...")
            .appendTo("#output");

        var $labels = $("<div>")
            .appendTo("#label");

        Trello.get("cards/56c6636470f148c6cb763e97", function(card) {

            $cards.empty();
                $("<a>")
                // .attr({href: card.url, target: "trello"})
                .addClass("cards")
                .text(card.name)
                .appendTo($cards);

                $(".toggle").click(function(event) {
                event.preventDefault();
                $("div.overlay").fadeToggle("fast");
                });

                $(".toggle").mouseover(function() {
                $('.icons').show();
                });



                //Displays correct color label
                var cardLabel = card.labels[0].color;

                switch (cardLabel) {
                  case "green":
                    $("<div>")
                    .addClass("green")
                    .appendTo($labels);
                    break;
                  case value2:
                    //Statements executed when the result of expression matches value2
                  default:
                    console.log(cardLabel + " does not work :(");
                    break;
                }

        });


    });

};


var updateLoggedIn = function() {
    var isLoggedIn = Trello.authorized();
    $("#loggedout").toggle(!isLoggedIn);
    $("#loggedin").toggle(isLoggedIn);
};

var logout = function() {
    Trello.deauthorize();
    updateLoggedIn();
};

Trello.authorize({
    interactive:false,
    success: onAuthorize
});

$("#connectLink")
.click(function(){
    Trello.authorize({
        type: "popup",
        success: onAuthorize
    })
});

$("#disconnect").click(logout);
