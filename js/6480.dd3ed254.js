"use strict";(self["webpackChunktome_planner"]=self["webpackChunktome_planner"]||[]).push([[6480],{36480:function(e){e.exports=JSON.parse('[{"__ATOMIC":true,"category":"golem","description":"Golem arcane capacity.","is_spell":true,"name":"arcane","no_silence":true,"points":1,"source":"@vanilla@","talents":[{"cooldown":3,"cost":"10 mana","id":"T_GOLEM_BEAM","image":"golem_beam.png","info_text":"<p>Your golem fires a beam from his eyes, doing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">241, 328, 395, 453, 503</acronym> fire damage, <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">241, 328, 395, 453, 503</acronym> cold damage or <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">241, 328, 395, 453, 503</acronym> lightning damage.</p><p>The beam will always be the maximun range it can be and will not harm friendly creatures.</p><p>The damage will increase with your golem\'s Spellpower.</p>","is_spell":true,"mana":10,"mode":"activated","multi_require":true,"name":"Eye Beam","no_silence":true,"points":5,"range":"7.0","require":["Level 0, Mag 12","Level 1, Mag 14","Level 2, Mag 16","Level 3, Mag 18","Level 4, Mag 20"],"requires_target":true,"short_name":"GOLEM_BEAM","source_code":["1.7.4/data/talents/spells/golem.lua",262],"type":["golem/arcane",1],"use_speed":"Spell"},{"cooldown":70,"cost":"30 mana","id":"T_GOLEM_REFLECTIVE_SKIN","image":"golem_reflective_skin.png","info_text":"<p>Your golem\'s skin shimmers with eldritch energies.</p><p>Any damage it takes is partly reflected (<acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">47%, 52%, 56%, 58%, 61%</acronym>) to the attacker.</p><p>The golem still takes full damage.</p><p>Damage returned will increase with your golem\'s Spellpower.</p>","is_spell":true,"mode":"sustained","multi_require":true,"name":"Reflective Skin","no_silence":true,"points":5,"range":"10.0","require":["Level 4, Mag 20","Level 5, Mag 22","Level 6, Mag 24","Level 7, Mag 26","Level 8, Mag 28"],"requires_target":true,"short_name":"GOLEM_REFLECTIVE_SKIN","source_code":["data/talents/spells/golem.lua",311],"sustain_mana":30,"type":["golem/arcane",2],"use_speed":"Spell"},{"cooldown":15,"cost":"20 mana","id":"T_GOLEM_ARCANE_PULL","image":"golem_arcane_pull.png","info_text":"<p>Your golem pulls all foes within radius <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">3, 4, 5, 5, 6</acronym> toward itself while dealing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">87, 118, 143, 163, 182</acronym> arcane damage.</p>","is_spell":true,"mana":20,"mode":"activated","multi_require":true,"name":"Arcane Pull","no_silence":true,"points":5,"range":"0.0","require":["Level 8, Mag 28","Level 9, Mag 30","Level 10, Mag 32","Level 11, Mag 34","Level 12, Mag 36"],"requires_target":true,"short_name":"GOLEM_ARCANE_PULL","source_code":["data/talents/spells/golem.lua",345],"type":["golem/arcane",3],"use_speed":"Spell"},{"cooldown":15,"cost":"60 mana","id":"T_GOLEM_MOLTEN_SKIN","image":"golem_molten_skin.png","info_text":"<p>Turns the golem\'s skin into molten rock. The heat generated sets ablaze everything inside a radius of 3, doing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">87, 118, 143, 163, 182</acronym> fire damage in 3 turns for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">6, 8, 9, 11, 13</acronym> turns.</p><p>Burning is cumulative; the longer they stay within range, they higher the fire damage they take.</p><p>In addition the golem gains <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>spellpower 100\\">72%, 87%, 99%, 109%, 118%</acronym> fire resistance.</p><p>Molten Skin damage will not affect friendly creatures.</p><p>The damage and resistance will increase with your Spellpower.</p>","is_spell":true,"mana":60,"mode":"activated","multi_require":true,"name":"Molten Skin","no_silence":true,"points":5,"radius":3,"range":"0.0","require":["Level 12, Mag 36","Level 13, Mag 38","Level 14, Mag 40","Level 15, Mag 42","Level 16, Mag 44"],"short_name":"GOLEM_MOLTEN_SKIN","source_code":["data/talents/spells/golem.lua",389],"type":["golem/arcane",4],"use_speed":"Spell"}],"type":"golem/arcane"},{"__ATOMIC":true,"category":"golem","description":"Drolem basic capacity.","name":"drolem","points":1,"source":"@vanilla@","talents":[{"cooldown":8,"cost":"25 mana","id":"T_DROLEM_POISON_BREATH","image":"poison_breath.png","info_text":"<p>Breathe poison on your foes, doing <acronym class=\\"variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60,<br>Magic 100\\">170, 222, 260, 293, 320</acronym> damage over a few turns.</p><p>The damage will increase with your Magic.</p>","mana":25,"message":"@Source@ breathes poison!","mode":"activated","multi_require":true,"name":"Poison Breath","points":5,"radius":5,"range":"0.0","require":["Level 10, Mag 22","Level 11, Mag 24","Level 12, Mag 26","Level 13, Mag 28","Level 14, Mag 30"],"requires_target":true,"short_name":"DROLEM_POISON_BREATH","source_code":["1.7.4/data/talents/spells/golem.lua",483],"type":["golem/drolem",1],"use_speed":"Standard"}],"type":"golem/drolem"},{"__ATOMIC":true,"category":"golem","description":"Golem melee capacity.","name":"fighting","points":1,"source":"@vanilla@","talents":[{"cooldown":10,"cost":"5 stamina","id":"T_GOLEM_KNOCKBACK","image":"golem_knockback.png","info_text":"<p>Your golem rushes to the target, dealing <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">125%, 144%, 158%, 170%, 181%</acronym> damage and knocking it back.</p><p>Knockback chance will increase with talent level.</p><p>While rushing the golem becomes ethereal, passing harmlessly through creatures on the path to its target.</p>","is_melee":true,"mode":"activated","multi_require":true,"name":"Knockback","points":5,"range":"8.0","require":["Level 0, Str 12","Level 1, Str 14","Level 2, Str 16","Level 3, Str 18","Level 4, Str 20"],"requires_target":true,"short_name":"GOLEM_KNOCKBACK","source_code":["1.7.4/data/talents/spells/golem.lua",24],"stamina":5,"type":["golem/fighting",1],"use_speed":"Weapon"},{"cooldown":"<acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">18, 15, 13, 12, 11</acronym>","cost":"5 stamina","id":"T_GOLEM_TAUNT","image":"golem_taunt.png","info_text":"<p>The golem taunts targets in a radius of <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">0, 1, 2, 2, 3,</acronym> forcing them to attack it.</p>","mode":"activated","multi_require":true,"name":"Taunt","points":5,"range":"10.0","require":["Level 4, Str 20","Level 5, Str 22","Level 6, Str 24","Level 7, Str 26","Level 8, Str 28"],"requires_target":true,"short_name":"GOLEM_TAUNT","source_code":["1.7.4/data/talents/spells/golem.lua",87],"stamina":5,"type":["golem/fighting",2],"use_speed":"Standard"},{"cooldown":10,"cost":"5 stamina","id":"T_GOLEM_CRUSH","image":"golem_crush.png","info_text":"<p>Your golem rushes to the target, crushing it into the ground for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">3, 5, 6, 7, 8</acronym> turns and doing <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">125%, 144%, 158%, 170%, 181%</acronym> damage.</p><p>Pinning chance will increase with talent level.</p><p>While rushing the golem becomes ethereal, passing harmlessly through creatures on the path to its target.</p>","is_melee":true,"mode":"activated","multi_require":true,"name":"Crush","points":5,"range":"8.0","require":["Level 8, Str 28","Level 9, Str 30","Level 10, Str 32","Level 11, Str 34","Level 12, Str 36"],"requires_target":true,"short_name":"GOLEM_CRUSH","source_code":["data/talents/spells/golem.lua",126],"stamina":5,"type":["golem/fighting",3],"use_speed":"Weapon"},{"cooldown":15,"cost":"5 stamina","id":"T_GOLEM_POUND","image":"golem_pound.png","info_text":"<p>Your golem rushes to the target and creates a shockwave with radius 2, dazing all foes for <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">3, 5, 6, 7, 8</acronym> turns and doing <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">79%, 96%, 108%, 119%, 128%</acronym> damage.</p><p>Daze chance increases with talent level.</p><p>While rushing the golem becomes ethereal, passing harmlessly through creatures on the path to its target.</p>","mode":"activated","multi_require":true,"name":"Pound","points":5,"radius":2,"range":"8.0","require":["Level 12, Str 36","Level 13, Str 38","Level 14, Str 40","Level 15, Str 42","Level 16, Str 44"],"requires_target":true,"short_name":"GOLEM_POUND","source_code":["data/talents/spells/golem.lua",189],"stamina":5,"type":["golem/fighting",4],"use_speed":"Standard"}],"type":"golem/fighting"},{"__ATOMIC":true,"category":"golem","description":"Glass Golem basic capacity.","name":"glass","points":1,"source":"cults","talents":[{"cooldown":9,"cost":"12 mana","id":"T_GLASS_SPLINTERS","image":"glass_splinters.png","info_text":"<p>Smash your target with a splintering glass attack doing <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">143%, 174%, 197%, 217%, 234%</acronym> arcane weapon damage.</p><p>If this attack hits the target will have glass splinters for 6 turns.</p><p>Each turn the target will bleed for 8% of the attack damage. The splinters are very painful and if the target moves it will instantly take <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5,<br>talent mastery 1.60\\">11%, 21%, 29%, 35%, 41%</acronym> of the attack damage.</p><p>At level 5 the target suffers so much it has 15% chances to fail using talents.</p>","is_melee":true,"mana":12,"mode":"activated","multi_require":true,"name":"Glass Splinters","points":5,"range":"melee/personal","require":["Level 10, Mag 22","Level 11, Mag 24","Level 12, Mag 26","Level 13, Mag 28","Level 14, Mag 30"],"requires_target":true,"short_name":"GLASS_SPLINTERS","source_code":["data-cults/talents/misc/misc.lua",265],"type":["golem/glass",1],"use_speed":"Weapon"}],"type":"golem/glass"},{"__ATOMIC":true,"category":"golem","description":"Golem basic capacity.","name":"golem","points":1,"source":"@vanilla@","talents":[{"id":"T_GOLEM_DESTRUCT","image":"golem_destruct.png","info_text":"<p>The golem self-destructs, destroying itself and generating a blast of fire in a radius of 4, doing <acronym class=\\"stat-variable\\" title=\\"Values for<br>character level 1, 10, 25, 40, 50\\">60, 150, 300, 450, 550</acronym> fire damage.</p><p>This spell is only usable when the golem\'s master is dead.</p>","mode":"activated","name":"Self-destruction","no_unlearn_last":true,"points":1,"radius":4,"range":"0.0","short_name":"GOLEM_DESTRUCT","source_code":["data/talents/spells/golem.lua",432],"type":["golem/golem",1],"use_speed":"Standard"},{"id":"T_GOLEM_ARMOUR","image":"golem_armour.png","info_text":"<p>The golem automatically reconfigures heavy mail and massive armours designed for living creatures to protect its own vital areas.</p><p><acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">Decreases, Decreases, Increases, Increases, Increases</acronym> armour value by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">-2, -1, 0, 1, 2,</acronym> armour hardiness by <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">-10%, -5%, 0%, 5%, 10%,</acronym> and provides <acronym class=\\"talent-variable\\" title=\\"Values for<br>talent levels 1-5\\">-3%, -1%, 0%, 1%, 3%</acronym> critical hit reduction when wearing heavy mail or massive armour.</p>","mode":"passive","name":"Armour Configuration","no_unlearn_last":true,"points":6,"short_name":"GOLEM_ARMOUR","source_code":["1.7.4/data/talents/spells/golem.lua",463],"type":["golem/golem",1]}],"type":"golem/golem"}]')}}]);