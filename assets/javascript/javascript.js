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
  console.log(response.data[i].title);
  $(".coolGifs").append("<img src='" + response.data[i].images.fixed_height_small.url + "'/>");
}

});

});
