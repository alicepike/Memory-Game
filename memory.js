var timer_id = 0;
var time = 0;
var letters_small = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
var squares;
var letters;
var small = 10;
var columns = 5;
var rows;
var last_id = '';
var letters_matched = 0;

$(function(){



});

function randomizeArray(array)
{
  var i = array.length;
  if ( i == 0 ) return false;
  while ( --i )
  {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = array[i];
     var tempj = array[j];
     array[i] = tempj;
     array[j] = tempi;
  }

  return array;
}

// when start button clicked
$("#small").on("click", function(){
  // randomly assign letters
  randomizeArray(letters_small);
  // disable button when clicked
  $("#small").attr("disabled", "disabled");
  var game = $("#game");
  game.append("<div class='row' />");
  letters_small.forEach(function(letter){
    $(".row").append("<div class='column'>" + "<span>" + letter + "</span>" + "</div>");
  });
  $(".column > span").css("display", "none");

    // on first click display span
    var previousBox = 0;
    $(".column").on("click", function(event){
    $(event.target).find("span").css("display", "block");

   
        // start timer
        var startCountdown = function() {

        //start ticking every second, and on tick:
        var $clock = $("<span class='clock'>00:00</span>")
        $("#header").append($clock);
          //update the display
          var secondsEllapsed = 0;

        };

        var whenWon = function() {
          //on winning
          var unmatchedBoxes = 10;

          if(unmatchedBoxes === 0) {
            //stop the clock
            clearInterval(ticker);
          }
            
        };

       // on second click IF
      // spans match, add won class

      if(previousBox >== 1) {
        $("span").addClass("won");
      }
      // ELSE hide previous span
      else {
        $("span").css("display", "none");
      }
  
  });
 
});


 
  
  // when hovering over boxes, change background color to gray
  // done in css

