  function Room0_jungleFloor() {
    updateDisplay("You wake up on a jungle floor. You feel a sharp pain on your neck and upon inspection find a dart lodged in the left side. You come to the conclusion that you were were poisoned and knocked unconscious. You struggle to get to your feet but manage and realize your whip is nowhere in sight. Find your whip and then find the person who did this to you");
}

  function room1_river() {
    updateDisplay("You're on the hunt for revenge. You advance northward and push past the dense shrubs. You are pricked by thorns and lose five health but find yourself at a raging river delta. In the distance you can see a pack of indigenous people swimming furiously against the current towards a cave situated against the mountain. You should follow them Northward.");
 }
 
  //vine object
  function room2_cave() {
    updateDisplay("The swim is challenging and you lose 10 health. In search for your whip and answers, you follow the tribe discretely into the cave. You wait it out and watch the tribe descend into the dungeon. Without a rope, you do not know what to do. After they have left, you search the room for an alternative. With no luck, you opt to use a vine that was growing on the wall. You put it in your backpack while you mentally prepare yourself for the risky descent.");  
 }
  // if take torch lose 5 health
  function room3_dungeonRoom1() {
    updateDisplay("You make up your mind and begin to cautiously descend down into the dungeon. It is very dark, you need to find a source of light before traveling any further into the dungeon. You see a burning torch across the room. Take the torch before proceeding, you don't know what could be lingering around such an unknown environment."); 
 }
 
  function room4_dungeonRoom2() {
    updateDisplay("You enter the room to the south and this time you have a light source that illuminates the room. However, it is simply an empty room. You notice a room to the west and the south, choose wisely Indy.");
 } 
  
  //if currLoc = 6 and hasVisitedRoom6 = false if you go south health = 0 and gameover
  function room6_dungeonRoom3() {
    updateDisplay("You enter the room to the west and hear people talking a foreign language to the south. To avoid being spotted, you begin to search the room for anything that could be of help. As you scan the area, you find nothing that can help you. Without a weapon, you will surely be killed if you travel to the south.");
 }
  
  //whip object if you take it take 5 points of damage. 
  function room5_dungeonRoom4() {
    updateDisplay("You enter the room to the south and hear people talking a foreign language to the west. To avoid being spotted, you begin to search the room for anything that could be of help. As you scan the area you find your whip but it lies behind a resting cobra. You hate snakes but your whip is more important. You need it before you proceed through the rest of the dungeon.");
 }
 
  function room7_dungeonRoom5() {
    updateDisplay("With whip and torch in hand, you travel to the room to the west. You are spotted by three tribesman. But, because you have your whip, you are able to kill them all. You do, however, take 10 points of damage. Ahead you see a bright light and a loud bang. You still have unanswered questions, quit now or continue south and find out what is in there.");
 }
  //later on in the course I will add a loop that continues to diminish your health until you kill the witchdoctor.
  //If they dont travel to the east the game is over
  function room8_dungeonRoom6() {
    updateDisplay("You travel south and find out that the bright light and noise is coming from a witchdoctor channeling a magical spell. As you stand there in fear, the witchdoctor begins to turn around and chant a mystical tongue in your direction. You can feel yourself getting weaker and weaker. Your health drops by ten before you lash your whip and interupt his channel. The witchdoctor has died. You feel a sense of relief and realize there is one more room to your east.");
 }
 
  // if you take the chalace and drink, you gain 1000 health and updateDisplay "Victory!"
  function room9_dungeonRoom7() {
    updateDisplay("You are brave and travel east even though your health is extremely low. You find a stone table with an ancient looking chalance on the table. Behind the table is a fountain that sparkles like the cold night sky.");
 }
 
 
 
 
 
 
 
