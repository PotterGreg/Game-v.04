// Game.js v.08
var health = 100;

  function init() {
    updateDisplay(locations_0);
  }

  var items = new Array();
  items[0] = itemVine;
  items[3] = itemTorch;
  items[4] = itemMap;
  items[5] = itemWhip;
  items[9] = itemChalace;
  
  var inventory = new Array();
  
  function displayInventory() {
    var invMsg = "Inventory:" + inventory;
    updateDisplay(invMsg);
 }
