$(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#burger-name").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        location.reload();
    });
});

$(".devour").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function() {
        location.reload();
    });
});