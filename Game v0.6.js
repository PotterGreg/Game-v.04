        var currLoc = 0;
        var Score = 0;
        var hasVisitedRoom0 = false;
        var hasVisitedRoom1 = false;
        var hasVisitedRoom2 = false;
        var hasVisitedRoom3 = false;
        var hasVisitedRoom4 = false;
        var hasVisitedRoom5 = false;
        var hasVisitedRoom6 = false;
        var hasVisitedRoom7 = false;
        var hasVisitedRoom8 = false;
        var hasVisitedRoom9 = false;
        var torch = false;
        var vine = false;
        var whip = false;
        var chalace = false;

        function init() { 
            look();
        }
        
        function btnGo_click() {
          var userCommand = document.getElementById("userInput").value;
          if (userCommand === "N" || userCommand === "n") { 
            btnNorth_click();
        } else if (userCommand === "S" || userCommand === "s") {
            btnSouth_click();
        } else if (userCommand === "E" || userCommand === "e") {
            btnEast_click();
        } else if (userCommand === "W" || userCommand === "w") {
            btnWest_click();
        } else if (userCommand === "Help" || userCommand === "help") { 
            updateDisplay("The valid directionals are N,S,E,W or n,s,e,w! The valid commands are Take, take, Inventory, or inventory");
        } else if (userCommand === "Take" || userCommand === "take") {
            //Call takeitem function; 
        } else if (userCommand === "Inventory" || userCommand ==="inventory") {
            //Call inventory function;
        } else {
            updateDisplay("That is an invalid input, press help for the list of valid directionals and commands");
       }
      }
        
        function btnNorth_click() {
          if (currLoc === 0) { 
             currLoc = 1;
             look();
          } else { 
              if (currLoc === 3) { 
                  currLoc=0;
                  look();  
            }   else { 
                  navigationError();
           }
          }
         }
        
        function btnSouth_click() { 
          if (currLoc === 1) { 
             currLoc = 0;
             look();
             } else { 
                if (currLoc===0) { 
                    currLoc = 3;
                    look();
            }    else {
                  navigationError();
              }
            }
          }
    
        function btnEast_click() {
          if (currLoc === 5) { 
              currLoc = 4;
              look();
            } else {
              if (currLoc === 4) { 
                  currLoc = 0;
                  look();
            } else {
                if  (currLoc === 0) { 
                     currLoc = 2;
                     look();
              } else {
             navigationError();
     }
   }
  }
 }
    
        function btnWest_click() { 
          if (currLoc === 2) { 
             currLoc=0;
             look();
          } else { 
              if (currLoc === 0) { 
                  currLoc = 4;
                  look();
            } else {
                if (currLoc === 4) {
                    currLoc = 5;
                    look();
           }   else {
                navigationError();
         }
        }
       }
      }
        
       function look() {
        var message = ""
        switch(currLoc) { 
          case 0: message = "0. You are standing in a dark cave and you see many torches dimly lit. You hear slithering, you do not like  this. \n";
                  break;
          case 1: message = "1. \n You enter the cave to the north. You instantly feel a rush of cold air but upon investigation you realize it is just an empty room. \n";
                  break;
          case 2: message = "2. \n You follow snakes through the small corridor and find yourself in a dead-end.\n";
                  break;
          case 3: message = "3. \n You pull a lever on the wall and a rock formation unveils a room south of where you started. There is a giant boulder ahead of you. \n";
                  break;
          case 4: message = "4. You enter the room as dirt falls on you from the ceiling. After clearing the debris you find your whip lying on the ground.";
                  break;
          case 5: message = "5. As you travel deeper into the cave you begin to hear a rush of water";
                  break;
          default: message = "You cannot go that way!"
          } 
          playerScore();
          scoreBox();          
          message = message+ "\n";
          updateDisplay(message);
          disableButton();
        }
          
        function navigationError() {
          updateDisplay("You cannot go that way!")
       }
       
        function playerScore() {
          if  ( (! hasVisitedRoom0) && (currLoc === 0 ) ) {
              Score += 5;
              hasVisitedRoom0 = true;
          } else if ( (! hasVisitedRoom1) && (currLoc === 1) ) {
              Score += 5;
              hasVisitedRoom1 = true;
          } else if ( (! hasVisitedRoom2) && (currLoc === 2) ) {
              Score += 5;
              hasVisitedRoom2 = true;
          } else if ( (! hasVisitedRoom3) && (currLoc === 3) ) {
              Score += 5;
              hasVisitedRoom3 = true;
          } else if ( (! hasVisitedRoom4) && (currLoc === 4) ) {
              Score += 5;
              hasVisitedRoom4 = true;
          } else if ( (! hasVisitedRoom5) && (currLoc === 5) ) {
              Score += 5;
              hasVisitedRoom5 = true;
        }
       }
       
        function disableButton() {
           disableButtonNorth();
           disableButtonSouth();
           disableButtonEast();
           disableButtonWest();
       }
          
        function disableButtonNorth() {
          if ( (currLoc === 1 || currLoc === 2 || currLoc === 4 || currLoc === 5) ) { 
            document.getElementById("northBtn").disabled = true;
      }   else { document.getElementById("northBtn").disabled = false;
     }
    }
       
        function disableButtonSouth() {
          if ( (currLoc === 2 || currLoc === 3 || currLoc === 4 || currLoc === 5) ) {
            document.getElementById("southBtn").disabled = true;
       }  else { 
            document.getElementById("southBtn").disabled = false;
      }
    }
        function disableButtonEast() {
          if ( (currLoc === 1 || currLoc === 2 || currLoc === 3) ) {
            document.getElementById("eastBtn").disabled = true;
        } else { 
            document.getElementById("eastBtn").disabled = false;
        }
       }
        
        function disableButtonWest() {
          if ( (currLoc === 1 || currLoc === 3 || currLoc === 5) ) {
            document.getElementById("westBtn").disabled = true;
        } else {
            document.getElementById("westBtn").disabled = false;
       }
      }
        
        function scoreBox() {
           var scoreCounter = document.getElementById("txtScore");
           scoreCounter.value = Score;
       }
       
        function updateDisplay(message) { 
          var target = document.getElementById("txtAnswer");
          target.value += message+"\n";
       }