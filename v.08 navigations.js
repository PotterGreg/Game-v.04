        // Global vars
        var currLoc = 0;
        var nextLoc = 0;
        var hasVisitedRoom1 = false;
        var hasVisitedRoom3 = false;
        var hasVisitedRoom5 = false;
        var hasVisitedRoom7 = false;
        var hasVisitedRoom8 = false;
        var NORTH = 0;
        var SOUTH = 1;
        var EAST = 2;
        var WEST = 3;

        // userCommand Navigation, take, inventory, and help
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
        
        // Global Array for Location instances
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
        
        var nav = [ //  N     S    E    W
           /* 0 */  [   1,   -1,  -1,  -1],
           /* 1 */  [   2,    0,  -1,  -1],
           /* 2 */  [   3,    1,  -1,  -1],
           /* 3 */  [  -1,    4,  -1,  -1],
           /* 4 */  [   3,    5,  -1,   6],
           /* 5 */  [   4,   -1,  -1,   7],
           /* 6 */  [  -1,   -1,   4,  -1],
           /* 7 */  [  -1,    8,   5,  -1],
           /* 8 */  [   7,   -1,   9,  -1],
           /* 9 */  [  -1,   -1,  -1,   8]
                   ];
         
        function btnNorth_click() {
        itemCheck(nextLoc);
        nextLocation(NORTH);
        disableButton();
        updateDisplay(locations[currLoc].description);
        healthBox();
       }  
        
        function btnSouth_click() {
        itemCheck(nextLoc);
        nextLocation(SOUTH);
        disableButton();
        updateDisplay(locations[currLoc].description);
        healthBox();
       }  
        
        function btnWest_click() {
        itemCheck(nextLoc);
        nextLocation(WEST);
        disableButton();
        updateDisplay(locations[currLoc].description);
        healthBox();
       }  
        
        function btnEast_click() {
        itemCheck(nextLoc);
        nextLocation(EAST);
        disableButton();
        updateDisplay(locations[currLoc].description);
        healthBox();
       }
       
        function nextLocation(dir) {
        var nextLoc = nav[currLoc][dir];
        if (nextLoc >= 0) {
          currLoc = nextLoc;
     }
    }
      
            
        // Check health alters health after moving to certain rooms
        function checkHealth() {
          if  ( (! hasVisitedRoom1) && (currLoc === 1 ) ) {
              health -= 10;
          } else if ( (! hasVisitedRoom7) && (currLoc === 7) ) {
              health -= 35;
          } else if ( (! hasVisitedRoom8) && (currLoc === 8) ) {
              health -= 45;
        }
       }
       
       
       // Calls each disableButton function based on currLoc
        function disableButton() {
           disableButtonNorth();
           disableButtonSouth();
           disableButtonEast();
           disableButtonWest();
       }
          
        function disableButtonNorth() {
          if ( (currLoc === 3 || currLoc === 6 || currLoc === 9 || currLoc === 7) ) { 
            document.getElementById("northBtn").disabled = true;
      }   else { 
            document.getElementById("northBtn").disabled = false;
     }
    }
       
        function disableButtonSouth() {
          if ( (currLoc === 0 || currLoc === 5 || currLoc === 8 || currLoc === 9 || currLoc === 6) ) {
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
       