"use strict";(self["webpackChunktome_planner"]=self["webpackChunktome_planner"]||[]).push([[2982],{32982:function(e){e.exports=JSON.parse('[{"__ATOMIC":true,"category":"undead","description":"Undead\'s innate abilities.","generic":true,"name":"base","points":1,"source":"@vanilla@","talents":[{"generic":true,"id":"T_UNDEAD_ID","image":"undead_id.png","info_text":"<p>You concentrate for a moment to recall some of your memories as a living being and look for knowledge to identify rare objects.</p>","mode":"passive","name":"Knowledge of the Past","no_unlearn_last":true,"points":1,"short_name":"UNDEAD_ID","source_code":["data/talents/undeads/undeads.lua",46],"type":["undead/base",1]}],"type":"undead/base"},{"__ATOMIC":true,"category":"undead","description":"Ghoul\'s innate abilities.","generic":true,"name":"ghoul","points":1,"source":"@vanilla@","talents":[{"generic":true,"id":"T_GHOUL","image":"ghoul.png","info_text":"<p>Improves your ghoulish body, increasing Strength and Constitution by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">3, 7, 11, 14, 17.</acronym></p><p>Your body also becomes incredibly resilient to damage; you can never take a blow that deals more than 50% of your maximum life.</p>","mode":"passive","multi_require":true,"name":"Ghoul","points":5,"require":["Level 0","Level 1","Level 2","Level 3","Level 4"],"short_name":"GHOUL","source_code":["data/talents/undeads/ghoul.lua",20],"type":["undead/ghoul",1]},{"cooldown":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">20, 15, 12, 11, 10</acronym>","direct_hit":true,"fixed_cooldown":true,"generic":true,"id":"T_GHOULISH_LEAP","image":"ghoulish_leap.png","info_text":"<p>Leap toward your target.</p><p>When you land your global speed is increased by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">20%, 24%, 26%, 28%, 30%</acronym> for 4 turns.</p>","mode":"activated","multi_require":true,"name":"Ghoulish Leap","points":5,"range":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">5.0, 6.0, 8.0, 9.0, 10.0</acronym>","require":["Level 4","Level 5","Level 6","Level 7","Level 8"],"requires_target":true,"short_name":"GHOULISH_LEAP","source_code":["data/talents/undeads/ghoul.lua",40],"type":["undead/ghoul",2],"use_speed":"Standard"},{"cooldown":20,"generic":true,"id":"T_RETCH","image":"retch.png","info_text":"<p>Vomit on the ground around you, healing any undead in the area and damaging anyone else.</p><p>Lasts 10 turns and deals <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10,<br>Constitution 100\\">33, 40, 45, 50, 53</acronym> blight damage or heals <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10,<br>Constitution 100\\">49, 60, 68, 75, 80</acronym> life.</p><p>Creatures standing in the retch also have <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">10%, 18%, 24%, 29%, 32%</acronym> chance to remove a physical effect each turn; undeads will be stripped from a detrimental effect while others will be stripped from a beneficial effect.</p><p>When you stand in your own retch your racial -20% global speed is cancelled.</p>","mode":"activated","multi_require":true,"name":"Retch","points":5,"radius":3,"range":"0.0","require":["Level 8","Level 9","Level 10","Level 11","Level 12"],"requires_target":true,"short_name":"RETCH","source_code":["data/talents/undeads/ghoul.lua",92],"type":["undead/ghoul",3],"use_speed":"Standard"},{"cooldown":10,"generic":true,"id":"T_GNAW","image":"gnaw.png","info_text":"<p>Gnaw your target for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">102%, 123%, 139%, 153%, 165%</acronym> damage.  If your attack hits, the target may be infected with Ghoul Rot for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">2, 4, 5, 6, 7</acronym> turns.</p><p>Each turn, Ghoul Rot inflicts <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10,<br>Constitution 100\\">27, 35, 41, 46, 50</acronym> blight damage.</p><p>Targets suffering from Ghoul Rot rise as friendly ghouls when slain.</p><p>Ghouls last for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">2, 4, 5, 6, 7</acronym> turns and can use Gnaw, Ghoulish Leap, Stun, and Rotting Disease.</p><p>The blight damage scales with your Constitution.</p>","is_melee":true,"mode":"activated","multi_require":true,"name":"Gnaw","points":5,"range":"melee/personal","require":["Level 12","Level 13","Level 14","Level 15","Level 16"],"requires_target":true,"short_name":"GNAW","source_code":["1.7.4/data/talents/undeads/ghoul.lua",140],"type":["undead/ghoul",4],"use_speed":"Weapon"}],"type":"undead/ghoul"},{"__ATOMIC":true,"category":"undead","description":"Keepsake shadows\'s innate abilities.","generic":true,"name":"keepsake shadow","points":1,"source":"@vanilla@","talents":[{"cooldown":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">7, 6, 5, 4, 3</acronym>","generic":true,"hide":true,"id":"T_KEEPSAKE_FADE","image":"keepsake_fade.png","info_text":"<p>You fade from sight, making you invulnerable until the beginning of your next turn.</p>","mode":"activated","name":"Fade","points":5,"range":"melee/personal","short_name":"KEEPSAKE_FADE","source_code":["1.7.4/data/talents/misc/npcs.lua",2142],"type":["undead/keepsake",1],"use_speed":"Standard"},{"generic":true,"hide":true,"id":"T_KEEPSAKE_PHASE_DOOR","image":"keepsake_phase_door.png","info_text":"<p>Teleports you randomly within range 10.</p>","is_teleport":true,"mode":"activated","name":"Phase Door","points":5,"range":"10.0","short_name":"KEEPSAKE_PHASE_DOOR","source_code":["data/talents/misc/npcs.lua",2160],"type":["undead/keepsake",1],"use_speed":"Standard"},{"generic":true,"hide":true,"id":"T_KEEPSAKE_BLINDSIDE","image":"keepsake_blindside.png","info_text":"<p>With blinding speed you suddenly appear next to a target up to 10 spaces away and attack for 1% damage.</p>","is_melee":true,"mode":"activated","name":"Blindside","points":5,"random_ego":"attack","range":"10.0","requires_target":true,"short_name":"KEEPSAKE_BLINDSIDE","source_code":["data/talents/misc/npcs.lua",2179],"type":["undead/keepsake",1],"use_speed":"Weapon"}],"type":"undead/keepsake"},{"__ATOMIC":true,"category":"undead","description":"Liches innate abilities.","generic":true,"name":"lich","points":1,"source":"@vanilla@","talents":[{"generic":true,"id":"T_NEVERENDING_UNLIFE","image":"lichform.png","info_text":"<p>A Lich\'s body is extremely hard to fully destroy. You only die with your life reaches <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">-12, -47, -68, -83, -93.</acronym></p><p>In addition even when destroyed your body regenerates to full life.</p><p>The first time this happens, your transformation into a Lich is completed, granting you all the powers of Lichdom.</p><p>Any further death will still regenerate you but you will need to consume the essence of a creature of unique/boss/elite boss or more rank within <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">33, 66, 88, 106, 120</acronym> turns to sustain yourself.</p><p>If you have not killed one when the duration expires or if you are killed again in this duration, you die permanently.</p><p>If this happens this power can never re-activate, even if you managed to resurrect by other means.</p>","mode":"passive","multi_require":true,"name":"Neverending Unlife","no_unlearn_last":true,"points":5,"require":["Level 25","Level 26","Level 27","Level 28","Level 29"],"short_name":"NEVERENDING_UNLIFE","source_code":["data/talents/undeads/lich.lua",20],"type":["undead/lich",1]},{"generic":true,"id":"T_FRIGHTENING_PRESENCE","image":"frightening_presence.png","info_text":"<p>Your mere presence is terrying to any foes that dare stand against you.</p><p>Every turn all foes in radius <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">3, 6, 8, 9, 10</acronym> must make a mental save against your spellpower/physical power (whichever is highest) or become frightened (bypassing fear immunity), reducing all their saves by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">12, 22, 30, 37, 43,</acronym> all damage by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">11%, 16%, 20%, 24%, 27%</acronym> and movement speed by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">9%, 17%, 22%, 26%, 28%.</acronym></p><p>If they successfully resist, they are immune for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">18, 15, 13, 11, 10</acronym> turns.</p>","mode":"passive","multi_require":true,"name":"Frightening Presence","points":5,"require":["Level 28","Level 29","Level 30","Level 31","Level 32"],"short_name":"FRIGHTENING_PRESENCE","source_code":["data/talents/undeads/lich.lua",73],"type":["undead/lich",2]},{"cooldown":10,"generic":true,"id":"T_DOOMED_FOR_ETERNITY","image":"doomed_for_eternity.png","info_text":"<p>While this ability is active, you will continually call up to <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">1, 1, 1, 2, 3</acronym> level <acronym class=\\"stat-variable\\" title=\\"Values for<br>character level 1, 10, 25, 40, 50\\">1, 10, 25, 40, 50</acronym> shadows to aid you in battle. Shadows are weak combatants that can: Use Arcane Reconstruction to heal themselves (level <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">1, 2, 3, 4, 5</acronym>), Blindside their opponents (level <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">1, 2, 3, 4, 5</acronym>), and Phase Door from place to place.</p><p>Shadows ignore <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">8%, 36%, 57%, 76%, 92%</acronym> of the damage dealt to them by their master.</p>","mode":"sustained","multi_require":true,"name":"Doomed For Eternity","no_energy":true,"points":5,"range":"melee/personal","require":["Level 30","Level 31","Level 32","Level 33","Level 34"],"short_name":"DOOMED_FOR_ETERNITY","source_code":["data/talents/undeads/lich.lua",312],"type":["undead/lich",3],"unlearn_on_clone":true,"use_speed":"Instant"},{"generic":true,"id":"T_COMMANDER_OF_THE_DEAD","image":"commander_of_the_dead.png","info_text":"<p>You are so full with power that it overflows out of you whenever you cast a spell.</p><p>Upon spell cast you have <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">8%, 14%, 19%, 23%, 26%</acronym> chances to boost the physical power, spellpower, mindpower and all saves of all friendly undeads in sight (including yourself) by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">11, 25, 36, 45, 53</acronym> for 4 turns.</p>","mode":"passive","multi_require":true,"name":"Commander of the Dead","points":5,"radius":10,"require":["Level 32","Level 33","Level 34","Level 35","Level 36"],"short_name":"COMMANDER_OF_THE_DEAD","source_code":["1.7.4/data/talents/undeads/lich.lua",491],"type":["undead/lich",4]}],"type":"undead/lich"},{"__ATOMIC":true,"category":"undead","description":"Talents of the various entities of the world.","hide":true,"name":"other","points":1,"source":"@vanilla@","talents":[{"cooldown":6,"direct_hit":true,"hide":true,"id":"T_THROW_BONES","image":"throw_bones.png","info_text":"<p>Throws a pack of bones at your target doing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10,<br>Strength 100\\">208, 285, 345, 395, 440</acronym> physical damage as bleeding within radius 2.</p><p>The damage will increase with the Strength stat</p>","mode":"activated","name":"Throw Bones","points":5,"radius":2,"range":"10.0","requires_target":true,"short_name":"THROW_BONES","source_code":["data/talents/misc/npcs.lua",1016],"type":["undead/other",1],"use_speed":"Standard"}],"type":"undead/other"},{"__ATOMIC":true,"category":"undead","description":"Skeleton\'s innate abilities.","generic":true,"name":"skeleton","points":1,"source":"@vanilla@","talents":[{"generic":true,"id":"T_SKELETON","image":"skeleton.png","info_text":"<p>Improves your skeletal condition, increasing Strength and Dexterity by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">3, 7, 11, 14, 17.</acronym></p>","mode":"passive","multi_require":true,"name":"Skeleton","points":5,"require":["Level 0","Level 1","Level 2","Level 3","Level 4"],"short_name":"SKELETON","source_code":["data/talents/undeads/skeleton.lua",20],"type":["undead/skeleton",1]},{"cooldown":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">26, 21, 18, 17, 15</acronym>","generic":true,"id":"T_BONE_ARMOUR","image":"bone_armour.png","info_text":"<p>Creates a shield of bones, absorbing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10,<br>Dexterity 100\\">487, 601, 687, 758, 820</acronym> damage. Lasts for 10 turns.</p><p>The total damage the shield can absorb increases with your Dexterity.</p>","mode":"activated","multi_require":true,"name":"Bone Armour","points":5,"range":"melee/personal","require":["Level 4","Level 5","Level 6","Level 7","Level 8"],"short_name":"BONE_ARMOUR","source_code":["1.7.4/data/talents/undeads/skeleton.lua",37],"type":["undead/skeleton",2],"use_speed":"Standard"},{"generic":true,"id":"T_RESILIENT_BONES","image":"resilient_bones.png","info_text":"<p>Your undead bones are very resilient, reducing the duration of all detrimental effects on you by up to <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">9%, 22%, 30%, 36%, 41%.</acronym></p>","mode":"passive","multi_require":true,"name":"Resilient Bones","points":5,"range":1,"require":["Level 8","Level 9","Level 10","Level 11","Level 12"],"short_name":"RESILIENT_BONES","source_code":["data/talents/undeads/skeleton.lua",61],"type":["undead/skeleton",3]},{"cooldown":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">30, 23, 19, 17, 15</acronym>","generic":true,"id":"T_SKELETON_REASSEMBLE","image":"skeleton_reassemble.png","info_text":"<p>Reposition some of your bones, healing yourself for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.10\\">125, 282, 400, 499, 585.</acronym></p><p>At level 5, you will gain the ability to completely re-assemble your body should it be destroyed (can only be used once).</p>","is_heal":true,"mode":"activated","multi_require":true,"name":"Re-assemble","no_unlearn_last":true,"points":5,"range":"melee/personal","require":["Level 12","Level 13","Level 14","Level 15","Level 16"],"short_name":"SKELETON_REASSEMBLE","source_code":["data/talents/undeads/skeleton.lua",76],"type":["undead/skeleton",4],"use_speed":"Standard"}],"type":"undead/skeleton"}]')}}]);