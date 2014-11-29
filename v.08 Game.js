// Game.js v.08
  var health = 100;

  function init() {
    updateDisplay(locations_0.description);
    disableButton();
    healthBox();
    mapVisibility();
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
    mapVisibility();
 }
 
 function displayInventory() {
    var inventMsg = "Inventory:" + inventory;
    updateDisplay(inventMsg);
 }
 
  function mapVisibility() {
    if (itemMap.isTaken === true) {
      document.getElementById("map2").style.visibility = "visible";
      document.getElementById("map1").style.visibility = "hidden";
  } else  {  
      document.getElementById("map2").style.visibility = "hidden";
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
 
 
  
