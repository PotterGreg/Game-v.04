        // Global vars
        var currLoc = 0;
        var nextLoc = 0;
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
        
        // Navigation via matrix array
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
         
        // Directional functions 
        function btnNorth_click() {
        nextLocation(NORTH);
        disableButton();
       }  
        
        function btnSouth_click() {
        nextLocation(SOUTH);
        disableButton();
       }  
        
        function btnWest_click() {
        nextLocation(WEST);
        disableButton();
       }  
        
        function btnEast_click() {
        nextLocation(EAST);
        disableButton();
       }
       
        // Function changes location + score
        function nextLocation(dir) {
        var nextLoc = nav[currLoc][dir];
        if (nextLoc >= 0) {
          itemCheck(nextLoc); 
      }    
        if (currLoc === 1) {
          if (! locations[1].hasVisited) { 
          health -= 15;
          healthBox();
          locations[1].hasVisited = true;
     }
    }
        else if (currLoc === 7) {
          if (! locations[7].hasVisited) {
          health -= 35;
          healthBox();
          locations[7].hasVisited = true; 
    }
   }
        else if (currLoc === 8) {
         if (! locations[8].hasVisited) {
          health -= 45;
          healthBox();
          locations[8].hasVisited = true;
   }
  }   
 }        
  
 
