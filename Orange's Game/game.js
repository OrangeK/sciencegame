var startgame = function(){
 confirm("GO!");
 confirm("When inputting a prompt answer, please put the capitalized word. Also, actually read ALL of the text before continuing. There is no saving, so if the story stops, you have to start over to keep going. There are multiple ways to finish the story, so keep trying different paths.");
 var split = prompt("You enter the dungeon. You have been searching for the location of the dungeon for many years now, and have finally found it. In your hand you carry a single torch. On your belt, there is a pickaxe and a shovel, along with a rather lengthy coil of rope. You know there is a treasure hidden within the dungeon. You can either take a LOOK around, start DIGging, or try to DISARM some of the traps that could be hidden around.").toLowerCase();
 switch(split){
  case 'look':
   confirm("You cast your torchlight on the area that surrounds you, and take a look around. You see some paintings on the walls that depict the gruesome deaths of explorers at the hands of what looks like a giant duck. You doubt that that is what actually killed all those people. Ducks aren’t killers. You also notice that some of the floor tiles appear to have little lines running down the middle");
   var option1 = prompt("With this knowledge in mind, you can try to NAVIGATE down to where the treasure should be, or EXPLORE and try to find out more about this dungeon.").toLowerCase();
  break;
  case 'dig':
   confirm("You begin to dig. After digging through a few layers, you drop down into a dimly lit corridor, and your shovel dents on the hard stone floor. It is now useless, but you don't throw it away just in case.")
   var option2 = prompt("You decide that you should probably try to find a different way to get to the treasure. After some examination, you spot some faded dark red marks on the wall. You can either FOLLOW the markings, or FIND your own way to the treasure.").toLowerCase();
  break;
  case 'disarm':
   confirm("You sense that there are probably some hidden spike traps in the floor. You look around for something to throw across the floor. You settle on some bones you found in a pile near the entrance. The fact that there was a pile of bones anywhere disturbs you slightly, but you move on.");
   var option3 = prompt("You throw a bone across the floor. As it passes over a tile about six feet away from you, a small hole opens up and the bone falls in. You walk over and look in. You see a hole about ten feet deep, with large metal spikes at the bottom. You repeat this process until all visible spike traps on the floor are revealed. You start to wonder if there are any more traps to be found. By some close examination, you find some small holes in the wall at about head height. These are probably more traps. You can poke the hole with your PICKAXE, or your FINGER.").toLowerCase();
   switch(option3){
    case 'pickaxe':
     confirm("");
  break;
  default:
   confirm("I'm sorry, but your input could not be understood. please try again.");
 };
}