var startgame = function(){
 confirm("GO!");
 confirm("When inputting a prompt answer, please put the capitalized word.");
 var option1 = prompt("You enter the dungeon. You have been searching for the location of the dungeon for many years now, and have finally found it. In your hand you carry a single torch. On your belt, there is a pickaxe and a shovel, along with a rather lengthy coil of rope. You know there is a treasure hidden within the dungeon. You can either take a LOOK around, start DIGging, or try to DISARM some of the traps that could be hidden around.").toLowerCase();
 switch(option1){
  case 'look':
   confirm("You take a look around. You see some paintings on the walls that depict the gruesome deaths of explorers at the hands of what looks like a giant duck. You doubt that that is what actually killed all those people. Ducks aren’t killers. You also notice that some of the floor tiles appear to have little lines running down the middle. They might be traps.")
   var option1-1 = prompt("With this knowledge in mind, you can try to NAVIGATE down to where the treasure should be, or EXPLORE and try to find out more about this dungeon.");
 break;
 case 'dig':
  confirm("You decide that you should start digging toward where the treasure should be. After dropping down a couple of levels, your shovel dents on the floor, and you realize that you should probably start trying to locate the treasure. You see some lines drawn crudely on the wall in what appears to be blood.
   var option1-2 = prompt("You can either FOLLOW the markings, or FIND your own path.");
}