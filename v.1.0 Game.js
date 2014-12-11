// Game.js v.08
  var health = 100;
  
  // body on load function displays starting location description
  function init() {
    updateDisplay(locations_0);
    healthBox();
    mapVisibility();
    disableButton();
  }
  
  // Items listen in a single array
  var items = new Array();
  items[0] = itemVine;
  items[3] = itemTorch;
  items[4] = itemMap;
  items[5] = itemWhip;
  items[9] = itemChalace;
  
  // Global array for player's inventory
  var inventory = new Array();
  
  // Pushes items when user takes ("TAKE") 
  function takeItem() {
    if (items[currLoc].isTaken === false) {
      inventory.push(items[currLoc].name);
      updateDisplay("You took the " + items[currLoc].name) + ".";
      items[currLoc].isTaken = true;
  }
    else {
      updateDisplay("This location has no items to pick up");
    }
    mapVisibility();
   }
  
 

  // Uses inventory global array to display inventory on userCommand
  function displayInventory() {
    var inventMsg = "Inventory:" + inventory;
    updateDisplay(inventMsg);
 }
 
  // Enables second map upon picking it up
  function mapVisibility() {
    if (itemMap.isTaken === true) {
      document.getElementById("map2").style.visibility = "visible";
      document.getElementById("map1").style.visibility = "hidden";
  } else  {  
      document.getElementById("map2").style.visibility = "hidden";
  }
 }
 
  // Displays player's health in its own box
  function healthBox(number) {
   var healthCounter = document.getElementById("txtHealth");
   healthCounter.value = health;
 }
  // Utility function that passes text to the designated text area     
  function updateDisplay(message) { 
   var target = document.getElementById("txtAnswer");
   target.value = message+"\n\n"+target.value;
 }
  
  // Browser lets you know how much of a little bitch you are if you choose to quit!
  function btn_Quit() {
    var loser = false;
    health = 0;
    healthBox();
    updateDisplay("You quit you little bitch! Refresh the page to give it another go");
    while(!loser) {
     alert("Whimp");
  }
 }
  
  function itemCheck(nextLoc) {
    if (nextLoc === 1) {
        if (itemVine.isTaken) {
          updateDisplay(locations[nextLoc]);
          currLoc = nextLoc;
        } else {
            updateDisplay("You shouldn't leave without taking the vine");
       }
      }
      else if (nextLoc === 4) {
        if (itemTorch.isTaken) {
          updateDisplay(locations[nextLoc]);
          currLoc = nextLoc;
        } else {
            updateDisplay("You cant see anything, pick up the torch" + 
                          " before you move on.");
       }
      }
      else if (nextLoc === 5) {
        if (itemMap.isTaken) {
          updateDisplay(locations[nextLoc]);
          currLoc = nextLoc;
        } else {
            updateDisplay("How will you find your way around without the map?" +
                          "Take it before leaving");
      }
    } else if (nextLoc === 7) {
        if (itemWhip.isTaken) {
          updateDisplay(locations[nextLoc]);
          currLoc = nextLoc;
    } else { 
        updateDisplay("You're surely dead if you advance without your whip");
   }
  }
  
      else { 
        updateDisplay(locations[nextLoc]);
        currLoc = nextLoc;
 }
}


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
 