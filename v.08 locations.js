 
   // Location prototype
   function Location(_id, _name, _description, _hasItem) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.hasItem = _hasItem;
    this.toString = function() {
      var returnVal = "";
      returnVal = this.description + "";
      return returnVal;
    }
   }
   // Item prototype
   function Item(_id, _name, _description, _isTaken) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.isTaken = _isTaken;
  }
    // Locations 0-9 following "blueprint" or Location() prototype
    var locations_0 = new Location(); 
      locations_0.id = 0;
      locations_0.name = "Jungle Floor";
      locations_0.description = "You wake up on a jungle floor. You feel a sharp pain on your neck and upon inspection find " +
                                "a dart lodged in the left   side.You come to the conclusion that you were were poisoned and " + 
                                "knocked unconscious. You struggle to get to your feet but manage and realize your whip is " + 
                                "nowhere in sight. Find your whip and then find the person who did this to you. You find a " +
                                "vine to your side, it may be useful for later."
      locations_0.hasItem = true;
    
    var locations_1 = new Location();
      locations_1.id = 1;
      locations_1.name = "River";
      locations_1.description = "You're on the hunt for revenge. You advance northward and push past the dense shrubs. " +
                                "You are pricked by thorns and lose ten health but find yourself at a raging river " +
                                "delta. In the distance you can see a pack of indigenous people swimming furiously " +
                                "against the current towards a cave situated against the mountain. You should follow " +
                                "them Northward."
    
      locations_1.hasItem = false;

    var locations_2 = new Location();
      locations_2.id = 2;
      locations_2.name = "Cave";
      locations_2.description = "The swim is challenging. In search for your whip and answers, you follow the tribe " +
                                "discretely into the cave. You wait it out and watch the tribe descend into the " +
                                "dungeon. You should use your vine to follow them."
      locations_2.hasItem = false;
  
    var locations_3 = new Location();
      locations_3.id = 3;
      locations_3.name = "Dungeon Entrance";
      locations_3.description = "You make up your mind and begin to cautiously descend down into the dungeon. You " +
                                "take the vine back before you proceed. It is very dark, you need to find a source " +
                                "of light before traveling any further into the dungeon. You see a burning torch " +
                                "across the room. Take the torch before proceeding, you don't know what could be " +
                                "lingering around such an unknown environment. If only you had a map!"
      locations_3.hasItem = true;
  
    var locations_4 = new Location();
      locations_4.id = 4;
      locations_4.name = "Illuminted Room";
      locations_4.description = "You enter the room to the south and this time you have a light source that illuminates " +
                                "the room. After further inspection, you find a map in the corner of the room. You " +
                                "should take this. You notice a room to the west and the south, choose wisely Indy."
      locations_4.hasItem = true;
    
    var locations_5 = new Location();
      locations_5.id = 5;
      locations_5.name = "Snake Room";
      locations_5.description = "You enter the room to the south and hear people talking a foreign language to the west. " +
                                "To avoid being spotted, you begin to search the room for anything that could be of help. " +
                                "as you scan the area you find your whip but it lies behind a resting cobra. You hate " +
                                "snakes but your whip is more important. You need it before you proceed through the rest " +
                                "of the dungeon."
      locations_5.hasItem = true;
      
    var locations_6 = new Location();
      locations_6.id = 6;
      locations_6.name = "Preparation Room";
      locations_6.description = "You enter the room to the west and hear people talking a foreign language to the south. " +
                                "To avoid being spotted, you better begin to search the room for anything that could be " +
                                "of help. As you scan the area, you find nothing that can help you. Without a weapon, " +
                                "you will surely be killed if you travel to the south."
      locations_6.hasItem = false;
    
    var locations_7 = new Location();
      locations_7.id = 7;
      locations_7.name = "Foreign Enemies";
      locations_7.description = "With whip and torch in hand, you travel to the room to the west. You are spotted by three " +
                                "tribesman. But, because you have your whip, you are able to kill them all. You do, however, " +
                                "take 35 points of damage. To the south you see a bright light and a loud bang. You still have " +
                                "unanswered questions, quit now or continue south and find out what is in there."
      locations_7.hasItem = false;
      
      
    var locations_8 = new Location();
      locations_8.id = 8;
      locations_8.name = "Final Boss";
      locations_8.description = "You travel south and find out that the bright light and noise is coming from a witchdoctor " +
                                "channeling a magical spell. As you stand there in fear, the witchdoctor begins to turn " +
                                "around and chant a mystical tongue in your direction. You can feel yourself getting weaker " +
                                "and weaker. Your health drops by 45 before you lash your whip and interupt his channel. The " +
                                "witchdoctor has died. You feel a sense of relief and realize there is one more room to your east."
      locations_8.hasItem = false;
      
    var locations_9 = new Location();
      locations_9.id = 9;
      locations_9.name = "Chalace Room";
      locations_9.description = "You are brave and travel east even though your health is extremely low. You find a stone table " +
                                "with an ancient looking chalance on the table. Behind the table is a fountain that sparkles " +
                                "like the cold night sky. You should drink from the fountain using the chalace."
      locations_9.hasItem = true;
      
    // Items following the Items "blueprint"" 
    var itemVine = new Item();
      itemVine.id = 0;
      itemVine.name = "Vine";
      itemVine.description = "There is a vine on the ground";
      itemVine.isTaken = false;
      
    var itemTorch = new Item();
      itemTorch.id = 3;
      itemTorch.name = "Torch";
      itemTorch.description = "There is a torch in the corner";
      itemTorch.isTaken = false;
    
    var itemMap = new Item();
      itemMap.id = 4;
      itemMap.name = "Map";
      itemMap.description = "There's a map on the floor";
      itemMap.isTaken = false;
      
    var itemWhip = new Item();
      itemWhip.id = 5;
      itemWhip.name = "Whip";
      itemWhip.description = "Your whip is behind the cobra";
      itemWhip.isTaken = false;
      
    var itemChalace = new Item();
      itemChalace.id = 9;
      itemChalace.name = "Chalace";
      itemChalace.description = "There's a shiny chalace on the table";
      itemChalace.isTaken = false;