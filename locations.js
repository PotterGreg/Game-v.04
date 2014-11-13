  var torch = false;
  var vine = true;
  var whip = false;
  var chalace = false;
  var map = false;
  
  function mapVisibility() {
          if (map === false) {
            document.getElementById("map2").style.visibility = "hidden";
       }  else  {  
            document.getElementById("map2").style.visibility = "visible";
            document.getElementById("map1").style.visibility = "hidden";
      }
     }

  function takeItem() {
    takeMap();
    takeWhip();
    takeTorch();
    takeChalace();
 }
  
  function takeMap() {
    if (currLoc === 4 && map === false) {
      map = true;
      
      updateDisplay("You pick up the map and can now see the layout of the dungeon.");
  }
  mapVisibility();
 }
  
  function takeWhip() {
    if (currLoc === 5 && whip === false) {
      whip = true;
      updateDisplay("You take the whip, you're ready for whatever comes your way.");
  }
 }
  
  function takeTorch() {
    if (currLoc === 3 && torch === false) {
      torch = true;
      updateDisplay("You pick up the torch and you can see!");
  }
 }
  
  function takeChalace() {
    if (currLoc === 9 && chalace === false) {
      chalace = true;
      health = ("abc"*50);
      updateDisplay("You drink from the cup and have been granted immoratality.");
  }
  healthBox();
 }
  
  function inventory() {
    if (map === true) {
      updateDisplay("map");
  } if (vine === true) {
    updateDisplay("vine");
  } if (whip === true) {
      updateDisplay("whip");
  } if (torch === true) {
      updateDisplay("torch");
  } if (chalace === true) {
      updateDisplay("chalace");
  }
  updateDisplay("Inventory:");
 }
  function btn_inventory() {
    inventory();
 }
 
  function Room0_jungleFloor() {
    updateDisplay("You wake up on a jungle floor. You feel a sharp pain on your neck and upon inspection find a dart lodged in the left side. You come to the conclusion that you were were poisoned and knocked unconscious. You struggle to get to your feet but manage and realize your whip is nowhere in sight. Find your whip and then find the person who did this to you. The only thing in your posession is a vine, it may be useful later.");
}

  function room1_river() {
    updateDisplay("You're on the hunt for revenge. You advance northward and push past the dense shrubs. You are pricked by thorns and lose ten health but find yourself at a raging river delta. In the distance you can see a pack of indigenous people swimming furiously against the current towards a cave situated against the mountain. You should follow them Northward.");
 }

  //vine object
  function room2_cave() {
    updateDisplay("The swim is challenging. In search for your whip and answers, you follow the tribe discretely into the cave. You wait it out and watch the tribe descend into the dungeon. You should use your vine to follow them.");
 }
 
  //torch lose 10 health
  function room3_dungeonRoom1() {
    updateDisplay("You make up your mind and begin to cautiously descend down into the dungeon. You take the vine back before you proceed. It is very dark, you need to find a source of light before traveling any further into the dungeon. You see a burning torch across the room. Take the torch before proceeding, you don't know what could be lingering around such an unknown environment. If only you had a map!"); 
    
 }
 
  function room4_dungeonRoom2() {
    updateDisplay("You enter the room to the south and this time you have a light source that illuminates the room. After further inspection, you find a map in the corner of the room. You should take this. You notice a room to the west and the south, choose wisely Indy.");
 } 
  
  //if currLoc = 6 and hasVisitedRoom6 = false if you go south health = 0 and gameover
  function room6_dungeonRoom3() {
    updateDisplay("You enter the room to the west and hear people talking a foreign language to the south. To avoid being spotted, you better begin to search the room for anything that could be of help. As you scan the area, you find nothing that can help you. Without a weapon, you will surely be killed if you travel to the south.");
 }
  
  //whip 5 points of damage. 
  function room5_dungeonRoom4() {
    updateDisplay("You enter the room to the south and hear people talking a foreign language to the west. To avoid being spotted, you begin to search the room for anything that could be of help. As you scan the area you find your whip but it lies behind a resting cobra. You hate snakes but your whip is more important. You need it before you proceed through the rest of the dungeon.");
 }
 
  function room7_dungeonRoom5() {
    updateDisplay("With whip and torch in hand, you travel to the room to the west. You are spotted by three tribesman. But, because you have your whip, you are able to kill them all. You do, however, take 35 points of damage. Ahead you see a bright light and a loud bang. You still have unanswered questions, quit now or continue south and find out what is in there.");
 }
  //later on in the course I will add a loop that continues to diminish your health until you kill the witchdoctor.
  //If they dont travel to the east the game is over
  function room8_dungeonRoom6() {
    updateDisplay("You travel south and find out that the bright light and noise is coming from a witchdoctor channeling a magical spell. As you stand there in fear, the witchdoctor begins to turn around and chant a mystical tongue in your direction. You can feel yourself getting weaker and weaker. Your health drops by 45 before you lash your whip and interupt his channel. The witchdoctor has died. You feel a sense of relief and realize there is one more room to your east.");
 }
 
  // if you take the chalace and drink, you gain 1000 health and updateDisplay "Victory!"
  function room9_dungeonRoom7() {
    updateDisplay("You are brave and travel east even though your health is extremely low. You find a stone table with an ancient looking chalance on the table. Behind the table is a fountain that sparkles like the cold night sky. You should drink from the fountain using your chalace.");
 }