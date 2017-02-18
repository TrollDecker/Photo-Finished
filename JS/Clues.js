// Create a 2-dimensional array of 27 indices (including 0) with an additional 10 indices within each one (likewise) to represent each room
// Data types:
// 0: Clue Name
// 1: Location of the clue (room number to return to)
// 2: Description of the clue
// 3: Question
// 4: Answer A
// 5: Answer B
// 6: Answer C
// 7: Correct Answer (A, B or C)
// 8: Explanation for why the correct answer was so (even if you got it wrong, it will show this anyway)
// 9: Investigated flag (switches to 1 once investigated, regardless of whether you answered correctly)

var Clue = new Array(26);
for (var i = 0; i < 27; i++)
  {
    Clue[i] = new Array(9);
  }

// Living Room
// Sofa
Clue[0][0] = "Sofa";
Clue[0][1] = 0;
Clue[0][2] = "<p>Bear examines the sofa closely, running her hand along every gap and under the seat itself. She finds nothing but dust.</p>";
Clue[0][3] = "";
Clue[0][4] = "";
Clue[0][5] = "";
Clue[0][6] = "";
Clue[0][7] = 0;
Clue[0][8] = "";
Clue[0][9] = 0;

// Chair
Clue[1][0] = "Chair";
Clue[1][1] = 0;
Clue[1][2] = "<p>Bear examines the chair closely, running her hand along every gap and under the seat itself. She finds nothing but dust.</p>";
Clue[1][3] = "";
Clue[1][4] = "";
Clue[1][5] = "";
Clue[1][6] = "";
Clue[1][7] = 0;
Clue[1][8] = "";
Clue[1][9] = 0;

// Bookshelf
Clue[2][0] = "Bookshelf";
Clue[2][1] = 0;
Clue[2][2] = "<p>Bear examines the bookshelf to the best of her abilities, but the masses of paperback educational books, stacked together in haphazard fashion lead her to decide against moving a single one. Chances are, the whole thing will collapse like a poorly-assembled Jenga tower.</p>"
           + "<p>She backs away from the bookshelf.</p>";
Clue[2][3] = "";
Clue[2][4] = "";
Clue[2][5] = "";
Clue[2][6] = "";
Clue[2][7] = 0;
Clue[2][8] = "";
Clue[2][9] = 0;

// Television
Clue[3][0] = "Television";
Clue[3][1] = 0;
Clue[3][2] = "<p>Bear examines the television, finding nothing out of the ordinary on the surface. She then turns her attention to the underside of the table holding it, where she soon notices what little light manages to get there reflecting of something in the shadow. She brings herself back to her feet and carefully pushes the TV to one side, revealing two small metallic cylinders on the floor.</p>"
           + "<p>Bear reaches down to carefully pick up one of the cylinders with the claws of her gauntlet and examines it closely. It is open and vacant at one end, while the other is closed. At the closed end of the object is a silvery circle embedded in the middle, and a noticeable dent can be seen in it.<p>"
Clue[3][3] = "<p>What is it?</p>";
Clue[3][4] = "Discarded jewellery";
Clue[3][5] = "The spent casing of a bullet";
Clue[3][6] = "A piece of the TV stand, broken off without anyone’s notice";
Clue[3][7] = 2;
Clue[3][8] = "<p>Bear is quick to realise that she is holding in her hand the spent casing of a bullet. The actual weapon that fired it cannot be far, she hazards. If the culprit was in such a hurry to hide these, though, then the actual weapon used to fire them cannot be far away.</p>";
Clue[3][9] = 0;

// Kitchen
// Sink
Clue[4][0] = "Sink";
Clue[4][1] = 1;
Clue[4][2] = "<p>Bear looks with disdain around the sink and within the cupboards beneath it. All she can find is the realisation that any amount of elbow grease will be wasted on this thing.</p>";
Clue[4][3] = "";
Clue[4][4] = "";
Clue[4][5] = "";
Clue[4][6] = "";
Clue[4][7] = 0;
Clue[4][8] = "";
Clue[4][9] = 0;

// Fridge
Clue[5][0] = "Fridge";
Clue[5][1] = 1;
Clue[5][2] = "<p>Bear checks the fridge. Much to her surprise, it is not as empty as she was led to believe. However, the contents are few: a few bottles of supermarket-brand cola, an out-of-date bottle of milk, some leftover noodles and not much else.</p>"
           + "<p>She closes the door and moves on.</p>";
Clue[5][3] = "";
Clue[5][4] = "";
Clue[5][5] = "";
Clue[5][6] = "";
Clue[5][7] = 0;
Clue[5][8] = "";
Clue[5][9] = 0;

// Rubbish Bin
Clue[6][0] = "Rubbish Bin";
Clue[6][1] = 1;
Clue[6][2] = "<p>Bear lifts the lid of the bin up carefully using her gauntlet. It seems empty. Erring on the side of caution, she kicks the bin lightly, listens, and repeats a few more times. Nothing.</p>"
           + "<p>She closes the lid and pulls a pack of antiseptic wipes and a plastic bag from her left coat pocket. She uses one to wipe her gauntlet, slips it into the bag, which then goes into an opposite pocket. She will throw that bag into the first available bin when she leaves.</p>";
Clue[6][3] = "";
Clue[6][4] = "";
Clue[6][5] = "";
Clue[6][6] = "";
Clue[6][7] = 0;
Clue[6][8] = "";
Clue[6][9] = 0;

// Study
// Darren Perceptor
Clue[7][0] = "Darren Perceptor";
Clue[7][1] = 2;
Clue[7][2] = "<p>Bear crouches down to the lifeless body of Darren Perceptor. She immediately decides there’s not much to gain from him at this point. A coroner’s line of expertise is required here, and Bear is no coroner. She doesn’t dare interfere with the body in any way whatsoever.</p>"
           + "<p>She leaves him as is, though it pains her to do so.</p>";
Clue[7][3] = "";
Clue[7][4] = "";
Clue[7][5] = "";
Clue[7][6] = "";
Clue[7][7] = 0;
Clue[7][8] = "";
Clue[7][9] = 0;

// Monitor
Clue[8][0] = "Monitor";
Clue[8][1] = 2;
Clue[8][2] = "<p>Bear inspects the monitor. The display is beyond repair, due in no small part to the hole driven right into the screen by the fatal bullet. The light from the window reveals that the bullet is still lodged firmly inside, perhaps due to being stopped by a metal plate. Possibly the bracket attaching it to the stand, she guesses. Bear wonders why it’s still there, but figures it’s lodged in too well.<p>"
           + "<p>She does, however, note the path of the bullet, seems to have been slightly downward. Beyond that, there is not much else to glean from the broken display.</p>"
           + "<p>She steps away and turns her attention elsewhere.</p>";
Clue[8][3] = "";
Clue[8][4] = "";
Clue[8][5] = "";
Clue[8][6] = "";
Clue[8][7] = 0;
Clue[8][8] = "";
Clue[8][9] = 0;

// Window
Clue[9][0] = "Window";
Clue[9][1] = 2;
Clue[9][2] = "<p>Bear steps over to the window to inspect the damage to it. The hole and the labyrinth of cracks formed between it and the window’s edge is consistent with a bullet passing through it, but despite this she feels something is off.</p>"
           + "<p>The house is at one of the highest points in the village, and there is very little outside that could be considered higher or even level with the window, not even a tree, giving this room a view of the coast barely obstructed by the rest of the village.</p>";
Clue[9][3] = "<p>Something is definitely wrong with this picture, but what? (HINT: You may want to have a look at other clues in this room before deciding on an answer)</p>";
Clue[9][4] = "Nothing at all! Bear is just being paranoid";
Clue[9][5] = "Any shot from outside would have most certainly missed";
Clue[9][6] = "Any shot from outside would have to have been on an ascending trajectory";
Clue[9][7] = 3;
Clue[9][8] = "<p>The monitor - and, of course, Darren - was struck by a bullet on the descent. Heading toward the ground. There are no real vantage points directly outside the window that could grant that kind of shot at all. That didn't rule out the possibility of hitting Darren with an outside shot, however, any vantage point could only offer an ascending trajectory of such a shot.</p>";
Clue[9][9] = 0;

// Glass on the floor
Clue[10][0] = "Glass on the floor";
Clue[10][1] = 2;
Clue[10][2] = "<p>Bear crouches to inspect the fragments glass on the hardwood floor below the window. She notices that the very few and very tiny fragments are close to the wall.</p>";
Clue[10][3] = "<p>This doesn't make sense. Why is that?</p>";
Clue[10][4] = "Anything passing through the window from the outside would have left more shards. And possibly larger";
Clue[10][5] = "There shouldn't be any glass there at all";
Clue[10][6] = "It makes perfect sense, actually";
Clue[10][7] = 1;
Clue[10][8] = "<p>Bear glances up at the hole in the window and back at the fragments on the floor. Any object passing through a pane of glass - even a small bullet - should throw quite a few fragments into the general direction of the object's path, in this case, into the room. There should be far more pieces of broken glass here than the few tiny crystals at Bear's feet. Bear suspects that the hole was created from the inside.</p>";
Clue[10][9] = 0;

// Computer
Clue[11][0] = "Computer";
Clue[11][1] = 2;
Clue[11][2] = "<p>Bear crouches down to get a good look at the computer. A high-end gaming PC, she notes, a self-build, possibly. One of the side panels has been removed, but this may not be out of the ordinary. The victim may have been tinkering with it just moments before his untimely death.</p>"
            + "<p>She inspects the system a little closer and finds that the hard drive is missing. A quick look around reveals no sign of such a component either.</p>"
            + "<p>Bear gets up and backs away.</p>";
Clue[11][3] = "";
Clue[11][4] = "";
Clue[11][5] = "";
Clue[11][6] = "";
Clue[11][7] = 0;
Clue[11][8] = "";
Clue[11][9] = 0;

// Bathroom
// Bathtub
Clue[12][0] = "Bathtub";
Clue[12][1] = 3;
Clue[12][2] = "<p>Bear inspects the bathtub, catching the a lingering scent of cream cleaner as she approaches. She notes that the bathtub is squeaky clean and showing barely any trace of recent use.</p>";
Clue[12][3] = "";
Clue[12][4] = "";
Clue[12][5] = "";
Clue[12][6] = "";
Clue[12][7] = 0;
Clue[12][8] = "";
Clue[12][9] = 0;

// Toilet
Clue[13][0] = "Toilet";
Clue[13][1] = 3;
Clue[13][2] = "<p>Bear glances at the toilet. It’s been cleaned recently, by whom she can’t say.</p>"
            + "<p>She decides that there’s not much to glean from it and steps away.</p>";
Clue[13][3] = "";
Clue[13][4] = "";
Clue[13][5] = "";
Clue[13][6] = "";
Clue[13][7] = 0;
Clue[13][8] = "";
Clue[13][9] = 0;

// Sink
Clue[14][0] = "Sink";
Clue[14][1] = 3;
Clue[14][2] = "<p>Bear inspects the sink and finds that it has been cleaned recently. Beside the single-handled chrome tap lies two soap dishes with a fresh bar in each. One has the initial 'P' carved into it while the other bears an 'H'. Above them, a partially-used soap-on-a-rope hangs from a poorly-installed adhesive hook that’s on the verge of falling off. She assumes that this soap belonged to Darren.</p>"
            + "<p>Bear finds nothing of note and backs away.</p>";
Clue[14][3] = "";
Clue[14][4] = "";
Clue[14][5] = "";
Clue[14][6] = "";
Clue[14][7] = 0;
Clue[14][8] = "";
Clue[14][9] = 0;

// Humidity
Clue[15][0] = "Humidity";
Clue[15][1] = 3;
Clue[15][2] = "<p>Bear notices the lack of humidity in the bathroom. The air is as clear as day and there are no signs of condensation on the window.</p>";
Clue[15][3] = "<p>Why does that sound strange?</p>";
Clue[15][4] = "It doesn't";
Clue[15][5] = "Didn't Hephaesta say she was in the shower when the murder took place?";
Clue[15][6] = "Shouldn't Hephaesta have opened that window?";
Clue[15][7] = 2;
Clue[15][8] = "<p>Hephaesta claimed that she was in the shower at the time of Darren's murder and only knew of the incident from her sister's screaming. The exact same screaming that drew Bear to the house. There hasn't been enough time for any resulting steam and condensation to clear. Not for a couple of hours anyway.</p>";
Clue[15][9] = 0;

// Darren's Room
// Bedside Table
Clue[16][0] = "Bedside Table";
Clue[16][1] = 4;
Clue[16][2] = "<p>Bear checks out the bedside table. A single tall tumbler - used - sticks out like a sore thumb against the otherwise immaculate condition the bedroom has been left in. However, she realises that this may still fit with the culprit’s account of the victim often dozing off at the study desk. It may have been left there after the last attempt to clean the room, perhaps.</p>"
            + "<p>She opens the door on the table and peeks in. Among the piles of CDs and books lies a single USB flash drive. She picks it up carefully with her gauntlet and pops it into her tablet. None of the files make sense to her, but she recognises the file extensions from a prior case. It’s program code for something, or at least part of that something. For what, she can’t say.</p>"
            + "<p>She removes the stick and places it back into the beside table, then closes the door.</p>";
Clue[16][3] = "";
Clue[16][4] = "";
Clue[16][5] = "";
Clue[16][6] = "";
Clue[16][7] = 0;
Clue[16][8] = "";
Clue[16][9] = 0;

// Bed
Clue[17][0] = "Bed";
Clue[17][1] = 4;
Clue[17][2] = "<p>Bear looks at the bed. It has been made with a careful hand, with nary a single crease to be seen. This doesn’t appear out of the ordinary given the state of the room and the claim from the culprit that he often worked will into the night on projects and fell asleep at the desk.</p>"
            + "<p>She checks beneath, and find it surprisingly bereft of anything, with the exception of a single dismantled toy laptop. Pink, with the branding of a popular line of dolls. She decides there and then to think no more on that matter.</p>"
            + "<p>She brings herself to her feet again and steps away.</p>";
Clue[17][3] = "";
Clue[17][4] = "";
Clue[17][5] = "";
Clue[17][6] = "";
Clue[17][7] = 0;
Clue[17][8] = "";
Clue[17][9] = 0;

// Wardrobe
Clue[18][0] = "Wardrobe";
Clue[18][1] = 4;
Clue[18][2] = "<p>Bear checks the wardrobe. She checks inside and, barring more skinny-fit jeans than can last a month and several sneakers, finds nothing of note. Aside from a couple of family photographs in cheap supermarket picture frames, the top of the connected chest of drawers is otherwise clear.</p>"
            + "<p>She checks the drawers, finding nothing more than clothes, including several merchandise t-shirts for bands she couldn’t hope to pronounce without accidentally insulting someone.</p>"
            + "<p>She closes the drawers and the door and looks elsewhere.</p>";
Clue[18][3] = "";
Clue[18][4] = "";
Clue[18][5] = "";
Clue[18][6] = "";
Clue[18][7] = 0;
Clue[18][8] = "";
Clue[18][9] = 0;

// Poseida's Room
// Bed
Clue[19][0] = "Bed";
Clue[19][1] = 5;
Clue[19][2] = "<p>Bear inspects the bed and risks moving the discarded clothes on the mattress, finding nothing else but a horribly-creased sheet beneath. The quilt has hastily been bunched up at the lower end. She checks beneath it and, again, steps away empty-handed. Beneath the bed lies a few stacks of CDs, which Bear proceeds to pull out and quickly skim through. Once more this garners nothing.</p>"
            + "<p>She pushes the CDs back and carries on.</p>";
Clue[19][3] = "";
Clue[19][4] = "";
Clue[19][5] = "";
Clue[19][6] = "";
Clue[19][7] = 0;
Clue[19][8] = "";
Clue[19][9] = 0;

// Bedside Table
Clue[20][0] = "Bed";
Clue[20][1] = 5;
Clue[20][2] = "<p>Bear inspects the bedside table. She twists her face at the sight of coffee stains all over, many that seem to be weeks old. A bell-based analogue alarm clock aside, there is nothing of interest here. She checks inside the table and finds nothing but a small stack of women’s weeklies, one of which dates back to this time last year. She quickly flicks through them, but finds nothing.</p>"
            + "<p>She closes the door of the table and backs away.</p>";
Clue[20][3] = "";
Clue[20][4] = "";
Clue[20][5] = "";
Clue[20][6] = "";
Clue[20][7] = 0;
Clue[20][8] = "";
Clue[20][9] = 0;

// Wardrobe
Clue[21][0] = "Wardrobe";
Clue[21][1] = 5;
Clue[21][2] = "<p>Bear searches the wardrobe. All she finds is the usual. Clothes, shoes, a box for a motherboard, but not much else. The top of the integrated drawer is littered with action figures and models of robots from Japanese cartoons, but nothing else stands out.</p>"
            + "<p>She searches the drawers and finds nothing of interest, enough socks to last half a year aside.</p>"
            + "<p>She closes both the drawers and the wardrobe and turns her attention elsewhere.</p>";
Clue[21][3] = "";
Clue[21][4] = "";
Clue[21][5] = "";
Clue[21][6] = "";
Clue[21][7] = 0;
Clue[21][8] = "";
Clue[21][9] = 0;

// Dressing Table
Clue[22][0] = "Dressing Table";
Clue[22][1] = 5;
Clue[22][2] = "<p>Bear investigates the dressing table. Assorted jewellery litters the surface. She takes great care in inspecting the mess with her gauntlet, finding nothing until she finally, by pure chance, finds a single small screw among it all. This screw looks like the kind that would be found on a PC.</p>"
            + "<p>She puts the screw to one side as she continues. Opening and searching the drawer, however, reveals nothing.</p>";
Clue[22][3] = "<p>That screw still bugs Bear, however, but why?</p>";
Clue[22][4] = "No legitimate reason";
Clue[22][5] = "The mere presence of a screw among jewellery is weird";
Clue[22][6] = "The possibility that it's one of the screws from Darren's PC";
Clue[22][7] = 3;
Clue[22][8] = "<p>The screw matches the kind commonly seen holding together the panels on most computers. Its presence here hints at the possibility that Poseida has been trying to obtain something from Darren's machine. However, this remains speculation. Acting on this evidence would be a massive gamble and Bear would do well to choose wisely.</p>";
Clue[22][9] = 0;

// Hephaesta's Room
// Bed
Clue[23][0] = "Bed";
Clue[23][1] = 6;
Clue[23][2] = "<p>Bear checks out the bed. Aside from a couple of discarded clothes at the lower end of the bed, it has been hastily made yet rarely used since.</p>";
Clue[23][3] = "";
Clue[23][4] = "";
Clue[23][5] = "";
Clue[23][6] = "";
Clue[23][7] = 0;
Clue[23][8] = "";
Clue[23][9] = 0;

// Bedside Table
Clue[24][0] = "Bedside Table";
Clue[24][1] = 6;
Clue[24][2] = "<p>Bear examines the bedside table. Inside the drawer, she finds a faux-leather notepad buried under several pieces of clutter. She picks up the book and carefully flicks through the pages. It turns out to be a diary, many of the pages descending into rants about a doctor whose name was mispelled often an in so many different ways that it was difficult to tell his or her real name.</p>"
            + "<p>Starting from a few weeks ago, Poseida details her increasing frustration with Darren Perceptor, initially exhibiting mild irritation at his turning the dining room into a study to expressing the desire for commit acts of violence against him for keeping her awake with his late night typing. Bear read on, only to find an increasing number of pages descending into wild single-word scribbles of hatred and malice.</p>"
            + "<p>Bear closes the book and slips it back where she found it.</p>";
Clue[24][3] = "<p>What does this immediately suggest?</p>";
Clue[24][4] = "The possibility that Poseida had a hand in Darren Perceptor's murder";
Clue[24][5] = "That she really needed to take a Nytol";
Clue[24][6] = "Nothing but baseless assumptions";
Clue[24][7] = 1;
Clue[24][8] = "<p>It's possible that Poseida may have grown so frustrated with Perceptor that it would push her to kill him or have him killed. Anything to get him out of the rest of her life. The trouble is, this is only speculation. A notebook is hardly conclusive evidence. She may not have had a hand in the murder at all. Bear might wish to tread carefully around this evidence. A wrongful accusation, a single finger pointed at the wrong person can do untold and unwanted harm to both the suspect and herself.</p>";
Clue[24][9] = 0;

// Wardrobe
Clue[25][0] = "Wardrobe";
Clue[25][1] = 6;
Clue[25][2] = "<p>Bear checks out the corner wardrobe. Aside from the usual clothes, and some unusual ones - Poseida was a bit of a cosplayer, she assumed when she found an outfit not unlike that from a space western that only lasted for one season and a movie - there is nothing that particularly stands out to her.</p>"
            + "<p>She closes the wardrobe and examines the drawers, again finding nothing of note there other than an ornate pistol that is quickly determined to be a simple prop gun with no moving parts.</p>";
Clue[25][3] = "";
Clue[25][4] = "";
Clue[25][5] = "";
Clue[25][6] = "";
Clue[25][7] = 0;
Clue[25][8] = "";
Clue[25][9] = 0;

// Dressing Table
Clue[26][0] = "Dressing Table";
Clue[26][1] = 6;
Clue[26][2] = "<p>Bear investigates the dressing table, finding nothing aside from sewing equipment and materials in the drawer. There also happen to be a few of those virtual pets that were popular in the late 1990s, some of which show clear signs of battery leakage.</p>"
            + "<p>Bear cringes at the acid-damaged toys and counts herself grateful that she only touched them with her gauntlet. She closes the drawer and runs an antiseptic wipe over the armoured glove.</p>";
Clue[26][3] = "";
Clue[26][4] = "";
Clue[26][5] = "";
Clue[26][6] = "";
Clue[26][7] = 0;
Clue[26][8] = "";
Clue[26][9] = 0;