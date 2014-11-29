        var currLoc = 0;
        var hasVisitedRoom1 = false;
        var hasVisitedRoom3 = false;
        var hasVisitedRoom5 = false;
        var hasVisitedRoom7 = false;
        var hasVisitedRoom8 = false;

        function btnGo_click() {
          var userCommand = document.getElementById("userInput").value;
          userCommand = userCommand.toUpperCase();
          if (userCommand === "N") { 
            btnNorth_click();
        } else if (userCommand === "S") {
            btnSouth_click();
        } else if (userCommand === "E") {
            btnEast_click();
        } else if (userCommand === "W") {
            btnWest_click();
        } else if (userCommand === "HELP") { 
            updateDisplay("The valid directionals are n, s, e, w, and the valid commands are TAKE, take, INVENTORY, or inventory. If you would like to quit press the quit button"); 
        } else if (userCommand === "INVENTORY") {
            displayInventory(); 
        } else if (userCommand === "TAKE") {
            takeItem();
        } else {
            updateDisplay("That is an invalid input, press help for the list of valid directionals and commands");
       }
      }
     
          var locations = new Array( locations_0,
                                      locations_1,
                                      locations_2,
                                      locations_3,
                                      locations_4,
                                      locations_5,
                                      locations_6,
                                      locations_7,
                                      locations_8,
                                      locations_9 );
      
        
        function btnNorth_click() {
          switch(currLoc) {
          case 0:
            currLoc = 1;
            disableButton();
            checkHealth();
            hasVisitedRoom1 = true;
            locations[1].description;
            break;
          case 1:
            currLoc = 2;
            disableButton();
            checkHealth();
            locations[2].description;
            break;
          case 2:
            currLoc = 3;
            hasVisitedRoom3 = true;
            disableButton();
            locations[3].description;
            break;
          case 4:
            currLoc = 3;
            hasVisitedRoom3 = true;
            disableButton();
            locations[3].description;
            break;
          case 5:
            currLoc = 4;
            hasVisitedRoom4 = true;
            disableButton();
            locations[4].description;
            break;
          case 7:
            currLoc = 6;
            disableButton();
            checkHealth();
            locations[6].description;
            break;
          case 8:
            currLoc = 7;
            hasVisitedRoom7 = true;
            disableButton();
            checkHealth();
            locations[7].description;
            break;
           }
            healthBox();
          }
        
        function btnSouth_click() { 
          switch(currLoc) {
            case 1:
              currLoc = 0;
              disableButton();
              locations[0].description;
              break;
            case 2:
              currLoc = 1;
              hasVisitedRoom1 = true;
              disableButton();
              locations[1].description;
              break;
            case 3:
              currLoc = 4;
              hasVisitedRoom4 = true;
              disableButton();
              locations[4].description;
              break;
            case 4:
              currLoc = 5
              hasVisitedRoom5 = true;
              disableButton();
              locations[5].description;
              break;
            case 6:
              currLoc = 7
              disableButton();
              checkHealth();
              hasVisitedRoom7 = true;
              locations[7].description;
              break;
            case 7:
              currLoc = 8;
              disableButton();
              checkHealth();
              hasVisitedRoom8 = true;
              locations[8].description;
              break;
           }
            healthBox();
          }
    
        function btnEast_click() {
          switch(currLoc) {
            case 6:
              currLoc = 4;
              hasVisitedRoom4 = true;
              disableButton();
              locations[4].description;
              break;
            case 5:
              currLoc = 7;
              disableButton();
              checkHealth();
              hasVisitedRoom7 = true;
              locations[7].description;
              break;
            case 8:
              currLoc = 9;
              disableButton();
              checkHealth();
              hasVisitedRoom8 = true;
              locations[9].description;
              break;
     }
      healthBox();
    }
    
        function btnWest_click() { 
          switch(currLoc) {
            case 4:
              currLoc = 6;
              disableButton();
              locations[6].description;
              break;
            case 5:
              currLoc = 7;
              disableButton();
              checkHealth();
              hasVisitedRoom7 = true;
              locations[7].description;
              break;
            case 9:
              currLoc = 8;
              disableButton();
              checkHealth();
              hasVisitedRoom8 = true;
              locations[8].description;
              break;
             
      }
        healthBox();
     }
        
        function navigationError() {
          updateDisplay("You cannot go that way!");
       }
      
        function checkHealth() {
          if  ( (! hasVisitedRoom1) && (currLoc === 1 ) ) {
              health -= 10;
          } else if ( (! hasVisitedRoom7) && (currLoc === 7) ) {
              health -= 35;
          } else if ( (! hasVisitedRoom8) && (currLoc === 8) ) {
              health -= 45;
        }
       }
       
        function disableButton() {
           disableButtonNorth();
           disableButtonSouth();
           disableButtonEast();
           disableButtonWest();
       }
          
        function disableButtonNorth() {
          if ( (currLoc === 3 || currLoc === 6 || currLoc === 9) ) { 
            document.getElementById("northBtn").disabled = true;
      }   else { document.getElementById("northBtn").disabled = false;
     }
    }
       
        function disableButtonSouth() {
          if ( (currLoc === 0 || currLoc === 5 || currLoc === 8 || currLoc === 9) ) {
            document.getElementById("southBtn").disabled = true;
       }  else { 
            document.getElementById("southBtn").disabled = false;
      }
    }
        function disableButtonEast() {
          if ( (currLoc === 0 || currLoc === 1 || currLoc === 2 || currLoc === 3 || currLoc === 4 || currLoc === 5 || currLoc === 9) ) {
            document.getElementById("eastBtn").disabled = true;
        } else { 
            document.getElementById("eastBtn").disabled = false;
        }
       }
        
        function disableButtonWest() {
          if ( (currLoc === 0 || currLoc === 1 || currLoc === 2 || currLoc === 3 || currLoc === 6 || currLoc === 7 || currLoc === 8) ) {
            document.getElementById("westBtn").disabled = true;
        } else {
            document.getElementById("westBtn").disabled = false;
       }
      }
        
        function mapVisibility() {
          if (!itemMap.isTaken) {
            document.getElementById("map2").style.visibility = "hidden";
       }  else  {  
            document.getElementById("map2").style.visibility = "visible";
            document.getElementById("map1").style.visibility = "hidden";
      }
     }
        
        function healthBox(number) {
           var healthCounter = document.getElementById("txtHealth");
           healthCounter.value = health;
       }
       
        function updateDisplay(message) { 
          var target = document.getElementById("txtAnswer");
          target.value = message+"\n\n"+target.value;
       }
        
        
        function btn_Quit() {
          var loser = false;
          health = 0;
          healthBox();
          while(!loser) 
          alert("Whimp");
       }