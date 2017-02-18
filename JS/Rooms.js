// Create a 2-dimensional array of 7 indices (including 0) with 8 additional indices in each (likewise) to represent each room
// Data types:
// 0: Room Name
// 1: Description of the room
// 2: Visited flag (may need to be converted from text into a number)
// 3: Clue count (decreases with each investigated clue, once at zero, you will be told that you've found everything)
// 4: X position on map (from left)
// 5: Y position on map (from bottom)
// 6: Width on map
// 7: Height on map

var Room = new Array(6);
for (var i = 0; i < 7; i++)
  {
    Room[i] = new Array(7);
  }

// Living Room
Room[0][0] = "Living Room";
Room[0][1] = "<p>Bear stands in the living room of the house. She feels a little off-balance. The carpet beneath her feet has seen better days - and unfortunately not a vacuum cleaner, it seems - but it still remains noticeably soft against her sneakers. She shrugs, chalks it up to spending much of her time on tarmac and the hardwood flooring of her gym, and carries on.</p>"
           + "<p>For an home housing three and in spite of the living room's size, it is remarkably sparse, save for the obligatory dark red <span class = 'ClueLink' onClick = 'GoToClue(0)'>three-seater sofa</span> in the centre of the room, joined by a matching <span class = 'ClueLink' onClick = 'GoToClue(1)'>chair</span> to its left. Both face a large <span class = 'ClueLink' onClick = 'GoToClue(3)'>flat-screen television</span> at the south end of the room. Near the front door to the north resides a simple oak-effect <span class = 'ClueLink' onClick = 'GoToClue(2)'>bookshelf</span>, overburdened by more textbooks than it can handle.</p>"
           + "<p>To the east is the <span class = 'RoomLink' onClick = 'GoToRoom(1)'>kitchen</span>, as well as the dining room, which has been converted into a <span class = 'RoomLink' onClick = 'GoToRoom(2)'>study</span>. That room was where the murder took place. The doors on the west side of the room lead to the <span class = 'RoomLink' onClick = 'GoToRoom(3)'>bathroom</span> and <span class = 'RoomLink' onClick = 'GoToRoom(4)'>Darren's bedroom</span>.</p>";
Room[0][2] = 0;
Room[0][3] = 4;
Room[0][4] = 200;
Room[0][5] = 100;
Room[0][6] = 100;
Room[0][7] = 100;

// Kitchen
Room[1][0] = "Kitchen";
Room[1][1] = "<p>Bear enters the kitchen, and it becomes apparent that either none of the roommates could cook or could be bothered to, upon seeing the stack of takeaway cartons stacked high around the place. She finds it difficult to decide whether the <span class = 'ClueLink' onClick = 'GoToClue(4)'>sink</span> is in need of more than a little elbow grease or just a replacement, and wonders if the obligatory <span class = 'ClueLink' onClick = 'GoToClue(5)'>fridge</span> is actually stocked. Surprisingly, there is a <span class = 'ClueLink' onClick = 'GoToClue(6)'>rubbish bin</span>, wedged in a space between that fridge and an adjacent cupboard beneath the sink.</p>"
           + "<p>An arch to the south leads straight to the <span class = 'RoomLink' onClick = 'GoToRoom(2)'>study</span>, due in part to it being a dining room when the place was originally constructed. The unique layout of the apartment places <span class = 'RoomLink' onClick = 'GoToRoom(5)'>Hephaesta's bedroom</span> directly to the east of the kitchen. The <span class = 'RoomLink' onClick = 'GoToRoom(0)'>living room</span> is to the west.</p>";
Room[1][2] = 0;
Room[1][3] = 3;
Room[1][4] = 300;
Room[1][5] = 150;
Room[1][6] = 100;
Room[1][7] = 50;

// Study
Room[2][0] = "Study";
Room[2][1] = "<p>Bear steps into the dining room. From the looks of it, the room has been essentially converted into a study, as in place of a dining table there is, instead, a computer desk with a full tower PC alongside it.</p>"
           + "<p>For the most part, the <span class = 'ClueLink' onClick = 'GoToClue(9)'>broken window</span>, where the shot that had apparently taken the victim had passed through, provides the only real light into the study. Bear checks the light switch, but to no avail. The bulb is as dead as the victim himself, whose <span class = 'ClueLink' onClick = 'GoToClue(7)'>body</span> lies at the feet of the desk. She notes the <span class = 'ClueLink' onClick = 'GoToClue(8)'>destroyed monitor</span> across from the window and finds something a little odd about the <span class = 'ClueLink' onClick = 'GoToClue(11)'>computer</span> under the desk. Also beneath the desk lies an empty waste paper basket. In front of the window lie a few minuscule <span class = 'ClueLink' onClick = 'GoToClue(10)'>pieces of glass<span>.</p>"
           + "<p>The <span class = 'RoomLink' onClick = 'GoToRoom(1)'>kitchen</span> lies to the north, and the apartment's layout places <span class = 'RoomLink' onClick = 'GoToRoom(6)'>Poseida's bedroom</span> through the door to the east. The <span class = 'RoomLink' onClick = 'GoToRoom(0)'>living room</span> lies west.</p>";
Room[2][2] = 1;  //Since it's the first room to be entered, this is already set to 1
Room[2][3] = 5;
Room[2][4] = 300;
Room[2][5] = 100;
Room[2][6] = 100;
Room[2][7] = 50;

// Bathroom
Room[3][0] = "Bathroom";
Room[3][1] = "<p>Bear checks the bathroom. She finds it strange that such a room in a recent construction would be built without an extractor fan. But who was she to question the architect behind this madness?</p>"
           + "<p>Fortunately, the layout remains sensible enough. A <span class = 'ClueLink' onClick = 'GoToClue(12)'>bathtub</span> takes up most of the entire southern wall with the <span class = 'ClueLink' onClick = 'GoToClue(13)'>toilet</span> and <span class = 'ClueLink' onClick = 'GoToClue(14)'>sink</span> directly opposite. Bear also notes the <span class = 'ClueLink' onClick = 'GoToClue(15)'>lack of humidity</span> in the room.</p>"
           + "<p>The only way of this room is east, back into the <span class = 'RoomLink' onClick = 'GoToRoom(0)'>living room</span>.</p>";
Room[3][2] = 0;
Room[3][3] = 4;
Room[3][4] = 150;
Room[3][5] = 150;
Room[3][6] = 50;
Room[3][7] = 50;

// Darren's Room
Room[4][0] = "Darren&#39;s Room";
Room[4][1] = "<p>Bear enters Darren's bedroom and finds herself surprised to find the place is immaculate compared to much of the house. A single used tumbler on the <span class = 'ClueLink' onClick = 'GoToClue(16)'>bedside table</span> tarnishes the cleanliness a little, but this is nothing compared to the disgraceful state of the living room carpet. Care and attention seems to have been given to the keeping the <span class = 'ClueLink' onClick = 'GoToClue(17)'>bed</span> along the south wall tidy and aside from a <span class = 'ClueLink' onClick = 'GoToClue(18)'>wardrobe</span> opposite, furniture is minimal.</p>"
           + "<p>The only exit is east, back to the <span class = 'RoomLink' onClick = 'GoToRoom(0)'>living room</span>.</p>";
Room[4][2] = 0;
Room[4][3] = 3;
Room[4][4] = 150;
Room[4][5] = 100;
Room[4][6] = 50;
Room[4][7] = 50;

// Hephaesta's Room
Room[5][0] = "Hephaesta&#39;s Room";
Room[5][1] = "<p>Bear enters Hephaesta's bedroom. Little effort has been made to ensure the room's tidiness aside from the <span class = 'ClueLink' onClick = 'GoToClue(19)'>bed</span> along the eastern wall being made. Random objects litter the floor, forcing the amateur detective to treat carefully. The <span class = 'ClueLink' onClick = 'GoToClue(20)'>bedside table</span> by the north wall has seen better days - days without so many scratch marks and dents - as has the <span class = 'ClueLink' onClick = 'GoToClue(22)'>dressing table</span> along the southern wall. A combination <span class = 'ClueLink' onClick = 'GoToClue(21)'>corner wardrobe</span> with integrated drawers sits beside the dressing table, in the south-west corner.</p>"
           + "<p>The only exit is west, back into the <span class = 'RoomLink' onClick = 'GoToRoom(1)'>kitchen</span>.</p>";
Room[5][2] = 0;
Room[5][3] = 4;
Room[5][4] = 400;
Room[5][5] = 150;
Room[5][6] = 50;
Room[5][7] = 50;

// Poseida's Room
Room[6][0] = "Poseida&#39;s Room";
Room[6][1] = "<p>Bear enters Poseida's bedroom. To call it a mess would have been an understatement. Old clothes and shoes lay scattered on the floor and the <span class = 'ClueLink' onClick = 'GoToClue(23)'>bed</span> along the eastern wall. She cringes at the state of the <span class = 'ClueLink' onClick = 'GoToClue(24)'>bedside table</span> at the south wall, littered with various papers and receipts that, with their close proximity to an electrical socket, pose a serious fire risk. A small <span class = 'ClueLink' onClick = 'GoToClue(26)'>dressing table</span> sits along the eastern wall, at the foot of the bed. Opposite, a <span class = 'ClueLink' onClick = 'GoToClue(25)'>corner wardrobe</span> with an integrated chest of drawers rests in the north-west corner.</p>"
           + "<p>The only exit is west, back into the <span class = 'RoomLink' onClick = 'GoToRoom(2)'>study</span>.</p>";
Room[6][2] = 0;
Room[6][3] = 4;
Room[6][4] = 400;
Room[6][5] = 100;
Room[6][6] = 50;
Room[6][7] = 50;
