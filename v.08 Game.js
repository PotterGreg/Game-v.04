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
    if (locations[currLoc].hasItem === false) {
     updateDisplay("This location has no items to pick up");
  } else {
    inventory.push(items[currLoc].name);
    updateDisplay("You took the " + items[currLoc].name) + ".";
    items[currLoc].isTaken = true;
    mapVisibility();
  }
 }
  
  // Disallows navigation based on status of users inventory
  function itemCheck(nextLoc) {
      if (nextLoc === 1) {
       if (itemVine.isTaken) {
        updateDisplay(locations[nextLoc]);
        currLoc = nextLoc;
    } else {
       updateDisplay("You shouldn't leave without taking " +
                     "the vine.");
    }
   }
      else if (nextLoc === 4) {
       if (itemTorch.isTaken) {
        updateDisplay(locations[nextLoc]);
        currLoc = nextLoc;
    } else {
       updateDisplay("Proceeding without the torch" +
                     "is a terrible idea");
    }
   }
      else if (nextLoc === 5) {
       if (itemMap.isTaken) {
        updateDisplay(locations[nextLoc]);
        currLoc = nextLoc;
    } else {
       updateDisplay("You'll never find your way around " +
                     "without the map!");
    } 
   }
      else if (nextLoc === 7) {
       if (itemWhip.isTaken) {
        updateDisplay(locations[nextLoc]);
        currLoc = nextLoc;
    } else {
        updateDisplay("Get your whip first..... it " +
                      "was one of your objectives..");
    }
   }
      else {  
       updateDisplay(locations[nextLoc]);
       currLoc = nextLoc;
    }
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
    checkHealth();
    while(!loser) 
    alert("Whimp");
 }
 
  
