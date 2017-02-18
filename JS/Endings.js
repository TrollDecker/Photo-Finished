// This code defines each of the game's endings. One will be the "Good" ending, reflecting a correct choice made
// when all clues have been investigated. The three "Bad" endings will depend on which wrong choice you will make.

var Ending = new Array(3)

// Ending 0 (No suspects accused)
Ending[0] = "<p class = 'Story'>Bear returns to her friend’s house with little more than a shrug, signifying that she’s come up empty, and leaves the matter to the police when they finally arrive.</p>"
          + "<p class = 'Story'>A few days later, the news breaks that both sisters have gone on the run, wanted on charges for Darren Perceptor’s murder, based on overwhelming evidence against them, and word travels of what is perceived to be a massive blunder on Bear’s part. Her reputation seriously damaged, she finds that many of the villagers are reluctant to even look at her, much less visit her gym. In time, the loss of business forces her to close up, and after ultimately drawing the conclusion that there is nothing in Littleden for her any more, she leaves as soon as possible.</p>"
          + "<p>BETTER LUCK NEXT TIME.</p>"
          + "<p>THANK YOU FOR PLAYING</p>";

// Ending 1 (Hephaesta only)
Ending[1] = "<p class = 'Story'>Bear returns to her friend’s house through the front door and storms up behind Hephaesta before she can even notice her approach. The red-haired sister lets out a yelp when the amateur detective plants her hands forcibly down her shoulders and struggles to free herself, but to no avail.</p>"
          + "<p class = 'Story'>'I suggest you sit still until the police finally get here.' Bear commands. 'Don’t make me force you unless you want to face the judge with a couple of black eyes.'</p>"
          + "<p class = 'Story'>Hephaesta reluctantly sits back down. The shock is evident on her sister’s face. Both sisters bore fair complexions, but Poseida has essentially become a ghost in the face of the accusations levelled at Hephaesta.</p>"
          + "<p class = 'Story'>Eventually, the coppers finally arrive and give the sister the free ride in a police car she deserves. It is to Bear’s relief that Hephaesta goes quietly. As much as she’s capable of putting up a fight, Bear preferred to avoid one unless it was absolutely necessary.</p>"
          + "<p class = 'Story'>Several months pass. Hephaesta has been tried and convicted and Poseida has since left Littleden. Bear takes a moment from working out to check her emails and notices an odd one that her mail service’s spam filters seem to have allowed to slip through the net. She is about to flag it when she notices the address belongs to a company with a familiar name: Poseidan Ltd. Curious, she risks opening it to find a press release for a revolutionary photoblogging service and, to her horror, that it’s in the similarly-named sister’s name.</p>"
          + "<p class = 'Story'>For a time, Bear kept to herself, and the other villagers opted to leave her to it, not wishing to suffer the same fate as her PC, which was found shattered across the road from the gym.</p>"
          + "<p>BETTER LUCK NEXT TIME</p>"
          + "<p>THANK YOU FOR PLAYING</p>";

// Ending 2 (Poseida only)
Ending[2] = "<p class = 'Story'>Bear returns to her friend’s house, through the kitchen, and makes a bee line for Poseida. The blue-haired sister is quick to realise she’s in trouble and scrambles to get away, but it is too late. Bear grabs the girl by the collar and pins her to the wall.</p>"
          + "<p class = 'Story'>'You're not going anywhere until the police arrive. Then it’s straight to a cell. Do no pass go, do not collect two hundred quid, do NOT even think of trying to fight me.'</p>"
          + "<p class = 'Story'>Poseida turns to her sister, silently begging for help, but Hephaesta is having none of it. She was on her own now. When the police finally arrived, Poseida resisted violently. In the end, Bear had to literally carry her like a battering ram to get into the car.</p>"
          + "<p class = 'Story'>Several months pass. Poseida has been tried and convicted and Poseida has since left Littleden. Bear takes a moment from working out to check her emails and notices an odd one that her mail service’s spam filters seem to have allowed to slip through the net. She is about to flag it when she notices the address belongs to a company with a familiar name: Hephaestic Ltd. Curious, she risks opening it to find a press release for a revolutionary photoblogging service and, to her horror, that it’s in the similarly-named sister's name.</p>"
          + "<p class = 'Story'>For a time, Bear kept to herself, and the other villagers opted to leave her to it, not wishing to suffer the same fate as her PC, which was found shattered across the road from the gym.</p>"
          + "<p>BETTER LUCK NEXT TIME</p>"
          + "<p>THANK YOU FOR PLAYING</p>";

// Ending 3 (Both suspects accused)
Ending[3] = "<p class = 'Story'>Bear storms into her friend’s house and heads straight for Hephaesta. She plants her hands forcibly onto the sister’s shoulders and ignores her squeals as she turns her attention to the other sibling. 'I think it's time I had a word with the two of you.'</p>"
          + "<p class = 'Story'>Poseida’s eyes widen and before Bear can tell her to stay put, shedarts out of her seat, making a break for the kitchen. Unfortunately for Poseida, her attempted escape put her in the path of a frying pan. Her feet flew upward, the inertia keeping the rest of her hanging in the air for a split second before she crashed back down to the floor. In the fall, something else drops to the floor. It is the murder weapon used on Darren Perceptor, a small pistol with a silencer attached. Poseida was out cold, which suited Bear just fine. Bear hauls Hephaesta to her feet when a brick-like object landed on the sofa. Closer inspection revealed it to be a hard drive.</p>"
          + "<p class = 'Story'>Weeks later, Bear returns from a much-needed trip back to her home city. As expected, her absence was ignored by the paperboy, which forces her to enter the gym via the rear entrance, since the front door is blocked by enough free papers to start her own newsagent shop. Mildly irritated, she collects the pile of papers, dumps them on the coffee table and flicks through them quickly.</p>"
          + "<p class = 'Story'>She finds within the pages of the latest edition, the headline: FATES FROWN UPON SIBLING KILLERS. Further reading of the article reveals that Poseida was convicted of the murder itself, just as she had expected, while Hephaesta was found guilty of perverting the course of justice and theft. It was revealed in court that Poseida had indeed snapped and Hephaesta planned on stealing Darren's project and claiming it as her own work. Both received lengthy sentences.</p>"
          + "<p class = 'Story'>Satisfied, Bear tosses the paper back onto the pile and sits back on her sofa. She is just about to doze off when she is abruptly dragged back into the waking world by frantic knocking on the front door.</p>"
          + "<p class = 'Story'>'Bear!' someone squeals from behind it 'I'm glad you're back! I need your help, man. Woman. WHATEVER. Please, you have to help me. My girl's gone and the coppers’re writing it off as if she’s left me or something!'</p>"
          + "<p class = 'Story'>Bear quietly smirks to herself, feeling a little relief that she's still in demand after taking some time out. The smirk soon fades as quickly as it formed, and she calls out 'Door's open.'</p>"
          + "<p>CONGRATULATIONS. Bear has prevented another crime from going unpunished.</p>"
          + "<p>THANK YOU FOR PLAYING!</p>";
             
function GetEnding()
{
  var IncomingData = window.location.search.substring(1);
  var Len = IncomingData.length;
  var SeparatorPosition = IncomingData.search("_");
  var EndingNumber = IncomingData.substring(0,SeparatorPosition);
  var Score = IncomingData.substring(SeparatorPosition + 1,Len);
  
  ContentPane.innerHTML = Ending[EndingNumber];
  ScoreCounter.innerHTML = Score;
}