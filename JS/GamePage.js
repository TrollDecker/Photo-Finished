
// Defines a variable for the player's score.
var PlayerScore = 0;


// Sends the player to the very first room.
function InitialisePage()
{
  document.getElementById('FeedbackArea').innerHTML = Room[2][1];            // Takes the description for Room 0, the Living Room, and inserts it into the Feedback Area block.
  RedrawMap();                                                               // Rewrites the divs that make up the map into the map area, based on current progress.
  RedrawSuspectArea(2);                                                      // Rewrites the player's current score to the suspect area, based on current progress.
}



// If the Map has been clicked on, this checks to see if the room has been visited before and thus be fast
// travelled to. If not, then clicking does nothing.
// "RoomNum" is the desired room. See Rooms.js for room numbers and other data.
function CheckMap(RoomNum)
{
  if(Number(Room[RoomNum][2]) == 1)                                          // Number() is just to make sure that this variable can be read as a number rather than text.
  {
    GoToRoom(RoomNum);
  }
}




// This function sends you to the room designated by RoomNum upon clicking a room link.
function GoToRoom(RoomNum)
{
  // RoomComplete is checked against the clue count of the room and used to bring up a string to alert
  // the player that the room is finished. If there are no uninvestigated clues left this variable will
  // be set to 1.
  var RoomComplete = 0;

  // Strings associated with a room's status
  var RoomStatus = new Array (1)
  RoomStatus[0] = ""
  RoomStatus[1] = "<p class = 'Inform'>Bear has investigated everything here. There is nothing more to see.</p>"

  if (Room[RoomNum][3] == 0)
  {
    RoomComplete = 1;
  }

  document.getElementById('FeedbackArea').innerHTML = Room[RoomNum][1]               // Takes the description for the new room and replaces the last room's description in the Feedback Area block.
                                                    + RoomStatus[RoomComplete];
  Room[RoomNum][2] = 1;                                                              // Sets the room's visited flag to 1, denoting that it has been visited and can be fast travelled to.
  RedrawMap();
  RedrawSuspectArea(RoomNum);
}



// This function sends you to the clue designated by ClueNum upon clicking a clue link.
// "ClueNum" is the desired clue. See Clues.js for clue numbers and other related data.
function GoToClue(ClueNum)
{
  //Create a variable to hold the link that will return you to the original room. This is purely for tidiness.
  var StepAwayLink = "<p class = 'RoomLink' onClick = 'GoToRoom(" + Clue[ClueNum][1] + ")'>Back away.</p>";
 
  if (Clue[ClueNum][9] == 0)                                                 // Has this clue been looked at before? Is this variable set to 1?
  {
    if(Clue[ClueNum][3] != "")                                               // Is there a Question here?
    {
      // Replaces existing text in Feedback Area with Clue description, followed by the question and
      // the three possible answers to it in an unordered list.
      document.getElementById('FeedbackArea').innerHTML = Clue[ClueNum][2]
                                                        + Clue[ClueNum][3]
                                                        + "<ul><li class = 'AnswerLink' onClick = 'GoToAnswer(" + ClueNum + ",1)'>" + Clue[ClueNum][4]
                                                        + "</li><li class = 'AnswerLink' onClick = 'GoToAnswer(" + ClueNum + ",2)'>" + Clue[ClueNum][5]
                                                        + "</li><li class = 'AnswerLink' onClick = 'GoToAnswer(" + ClueNum + ",3)'>" + Clue[ClueNum][6]
                                                        + "</li></ul>" + StepAwayLink;
    }
    else                                                                     //If no question exists...
    {
      // ...just show the clue. Flag the clue as investigated as well.
      document.getElementById('FeedbackArea').innerHTML = Clue[ClueNum][2] + StepAwayLink;
      FlagClue(ClueNum,Clue[ClueNum][1]);
    }
  }
  else                                                                       //If clue has been investigated already...
  {
    document.getElementById('FeedbackArea').innerHTML = "<p class = 'Inform'>You've already looked at that. There's nothing more to see.</p>" + StepAwayLink;
  }
  RedrawSuspectArea(Clue[ClueNum][1]);                                       // Updates the player's score onscreen.
}



// This function responds according to which answer you chose. There will always be one right and one
// wrong answer and this function will serve to inform you of whether you answered correctly and reward you
// by adding to your total score. Regardless, though, it will always offer an explanation of why the correct
// answer is so.
function GoToAnswer(ClueNum,Response)
{
  //Create a variable to hold the link that will return you to the original room. This is purely for tidiness.
  var StepAwayLink = "<p class = 'RoomLink' onClick = 'GoToRoom(" + Clue[ClueNum][1] + ")'>Okay.</p>";
  if(Response == Clue[ClueNum][7])                                           // Is the answer given the same as the correct answer?
  {
    document.getElementById('FeedbackArea').innerHTML = "<p class = 'CorrectAnswer'>Correct!</p>" + Clue[ClueNum][8] + StepAwayLink;  // If the answer is correct...
    PlayerScore = PlayerScore + 10;                                                                           // ...increase the player's score by 10 points.
  }
  else
  {
    document.getElementById('FeedbackArea').innerHTML = "<p class = 'WrongAnswer'>Wrong.</p>" + Clue[ClueNum][8] + StepAwayLink;    // If the player has given the wrong answer...
  }
  FlagClue(ClueNum,Clue[ClueNum][1]);
  RedrawSuspectArea(Clue[ClueNum][1]);                                                                        // Updates the player's score onscreen.
}



// This function checks the visited status of all rooms and redraws the map accordingly. Unvisited rooms are
// dark green and do not react to clicks, though hovering over them will still show their names in a tooltip.
// Light green rooms have been visited and enable fast travel to them wihtout having to pass through others.
function RedrawMap()
{
  var MapCode = "";                                                        // This variable is for the generated HTML that draws the room.
  var RoomStatus = "";                                                     // Serves as the latter half of the required CSS class name for each room.
  
  for (var a = 0; a < 7; a++)                                              // Cycles through each and every room.
  {
    if (Number(Room[a][2]) == 1)                                           // Has this room been visited?
    {
      RoomStatus = "Visited";
    }
    else
    {
      RoomStatus = "Unvisited";
    }
    
    // Generates a div based on:
    MapCode = MapCode
            + "<div class = 'MapRoom" + RoomStatus                         // Visited Status (RoomStatus)
            + "' title = '" + Room[a][0]                                   // Room name (Room[a][0])
            + "' style = 'position: absolute; left:" + (Room[a][4] + 1)    // Position from left of page in pixels (Room[a][4], plus 1 pixel to compensate for the border)
            + "; bottom:" + (Room[a][5] + 1)                               // Position from bottom of page in pixels (Room[a][5], plus 1 pixel to compensate for the border)
            + "; width:" + (Room[a][6] - 2)                                // Width in pixels (Room[a][6], less 2 pixels to compensate for the border)
            + "; height:" + (Room[a][7] - 2)                               // Height in pixels (Room[a][7], less 2 pixels to compensate for the border)
            + ";' onClick = 'CheckMap(" + a + ")'></div>";                 // This executes the CheckMap() function if the div is clicked.
  }
  document.getElementById('MapArea').innerHTML = MapCode;                  // Inserts the completed HTML into the Map Area.
}


function FlagClue(ClueNum,RoomNum)
{
  Clue[ClueNum][9] = 1;                                                    // Flag clue as investigated.
  Room[RoomNum][3] = Number(Room[RoomNum][3]) - 1;                         // Reduce clue count.
}



function RedrawSuspectArea(RoomNum)
{
  var DisabledState = " disabled";                                        // This will be inserted into all inputs when the inner HTML is assembled.
  var GameComplete = 0;                                                   // 1 if all clues have been investigated, 0 if not.
  var ClueCount = 0;                                                      // Total clues remaining.


  // Strings associated with game completion (all clues investigated)
  var ClueStatus = new Array (1)
  ClueStatus[0] = "<p>Clues in room:" + Room[RoomNum][3] + "</p>"
  ClueStatus[1] = "<p class = 'Inform'>You've found all you can.<br/>Time to point the finger.</p>"

  // Total all remaining clues in every room. If there are no clues left, nullify DisabledState so that
  // the property is not added to any inputs, thus enabling them, and set GameComplete to 0. 
  for(a = 0; a < Room.length; a++)
  {
    ClueCount = ClueCount + Room[a][3];
  }

  if(ClueCount == 0)
  {
    DisabledState = "";
    GameComplete = 1;	
  }

  // Refresh the suspect area to update the player's score, number of clues in each room remaining (or
  // the notification that it's time to select a suspect in its place) and the form for accusing each suspect.
  document.getElementById('SuspectArea').innerHTML = "<p>Score: " + PlayerScore + "</p>"
                                                   + ClueStatus[GameComplete]
                                                   + "<form name = 'frmSuspect'>"
                                                   + "<p><input type = 'checkbox' name = 'chkSuspect1' value = 0" + DisabledState + ">Hephaesta</input></p>"
                                                   + "<p><input type = 'checkbox' name = 'chkSuspect2' value = 0" + DisabledState + ">Poseida</input></p>"
                                                   + "<p><input type = 'button' name = 'btnAccuse' value = 'Accuse!'" + DisabledState + " onClick = 'MakeAccusation()'></input></p>"
                                                   + "</form>";
}


// Makes the necessary accusation. To allow either one or both suspects to be selected, the chkSuspect1's checked value
// remains at 1 if checked, but chkSuspect2 will be doubled when both checked values are added together. As a result,
// ChosenSuspect will become 1 if only the first suspect is selected, 2 if only the second one is, but 3 if both. The variable
// remains at 0 if nobody has been selected.
// The resulting ending number and player's score will then be passed to the ending page.
function MakeAccusation()
{
  var ChosenSuspect = (document.frmSuspect.chkSuspect1.checked) + (document.frmSuspect.chkSuspect2.checked * 2);
  window.location = "EndPage.html?" + ChosenSuspect + "_" + PlayerScore;
}