// Game.js v.08
  var health = 100;

  function init() {
    updateDisplay(locations_0.description);
    disableButton();
    healthBox();
  }

  var items = new Array();
  items[0] = itemVine;
  items[3] = itemTorch;
  items[4] = itemMap;
  items[5] = itemWhip;
  items[9] = itemChalace;
  
  var inventory = new Array();
  
  function takeItem() {
    inventory.push(items[currLoc].name);
    updateDisplay("You took the " + items[currLoc].name) + ".";
    items[currLoc].isTaken = true;
 }
 
 function displayInventory() {
    var inventMsg = "Inventory:" + inventory;
    updateDisplay(inventMsg);
 }

  
 
  
 