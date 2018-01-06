$(document).ready(function() {

  $('.carousel.carousel-slider').carousel({fullWidth: true});

});


var topics = ["tigers", "sugar gliders", "otters", "chinchilla", "dragons"];





function createButtons(){
  $(".buttons").empty();
  for(var i = 0; i < topics.length; ++i){
    $(".buttons").append("<button data-name='"  + topics[i] + "'>" + topics[i] + "</buttons>");

  }
};

function createNewButton(){
  var newButtonText= $("button-to-add").val();
  topics.push("new bu");
  createNewButton();
}

createButtons();
createButtons();

$(".buttons").on("click", "button", function(){
var buttonText = $(this).attr("data-name");
console.log(buttonText);


var queryURL= "http://api.giphy.com/v1/gifs/search?q=" + buttonText + "&limit=10&api_key=dc6zaTOxFJmzC";
// console.log(queryURL);


$.ajax({
  url: queryURL,
  method: "GET"
}).done(function(response) {
  // console.log(response);
  // console.log(Ratings);
  // document.write(response.Ratings[1].Source);
for (var i = 0; i <response.data.length; i++){
var newImg = $("<img class='giphy' />");
var rating = response.data[i].rating;
var p = $('<h6>').text("Ratings: " + rating);

newImg.attr("data-state", "still")
  .attr("data-still", response.data[i].images.fixed_height_small_still.url)
  .attr("data-anim", response.data[i].images.fixed_height_small.url)
  .attr("src", response.data[i].images.fixed_height_small_still.url)
// then, the last thing we do is we append the newImg to the coolGifs container
$(".coolGifs").append(newImg).append(p);


}

});

});

$(".coolGifs").on("click", ".giphy", function() {
	// clear the coolGifs container first!!!
	var gifState = $(this).attr("data-state");
	var animUrl = $(this).attr("data-anim");
	var stillUrl = $(this).attr("data-still");

	if (gifState == "still") {
		$(this).attr("src", animUrl); // this sets the src attribute to the animated url
		// set 'data-state' to be equal to 'anim'
	} else {
		// set src to be equal to value to data-still
		// set 'data-state' to be equal to still
	}

});

// Add a click event for the submit button in the 'add animal' section
// This click event should call the 'createNewButton' function

// this is calling it initially --- you'll be calling it again
// each time a new button is created
createButtons();
