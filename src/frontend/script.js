
// THE COMMENTED LINES ARE FOR TESTING THE WEBSITE WITHOUT A SERVER.

// const data = [
//     {
//       name: "Flashcard 1",
//       description: "Description for Flashcard 1",
//       category: "Category 1"
//     },
//     {
//       name: "Flashcard 2",
//       description: "Description for Flashcard 2",
//       category: "Category 2"
//     },
//     {
//       name: "Flashcard 3",
//       description: "Description for Flashcard 3",
//       category: "Category 1"
//     },
//   ];
// $(document).ready(function() {
//     generateDataButton(data);
// });

$(document).ready(function() {
        $.ajax({
            url: "http://192.168.1.137:8080/api/flashcards",
            method: "GET",
            dataType: "JSON",
            success: function(data) {
                generateDataButton(data);
            },
            error: function() {
                $("#show-flashcards").text("error fetching the data");
            }
        });
});


function generateDataButton(data){
    const showDataButton = $("<button>");
    showDataButton.text("Show");
    showDataButton.on("click", function() {
        showData(data);
      });
    if ($("#show-data-btn").find("button").length === 0) {
        $("#show-data-btn").append(showDataButton);
    }
}

function showData(data){

    const hideDataButton = $("<button>");
    hideDataButton.text("Hide");
    hideDataButton.on("click", function(){
        $("#show-flashcards").empty();
        $("#hide-data-btn").empty();
    });
    if ($("#hide-data-btn").find("button").length === 0) {
        $("#hide-data-btn").append(hideDataButton);
    }
    $("#show-flashcards").empty();
    for (let flashcard of data){
        const flashcardDiv =  $("<div>");
        flashcardDiv.addClass("flashcard-element");
        flashcardDiv.append($("<p>").text("name: " + flashcard.name));
        flashcardDiv.append($("<p>").text("description: " + flashcard.description));
        flashcardDiv.append($("<p>").text("category: " + flashcard.category));
        $("#show-flashcards").append(flashcardDiv);
    }
}

function hideData(){
    $("#show-flashcards").empty();
}