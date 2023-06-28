//  Set Ability Modifiers according to Ability Score
function updateModifiers(){
    //  Convert Ability Scores to Modifiers
    var willScore =   document.getElementById("willScore").value;
  document.getElementById("willMod").value = Math.floor((willScore - 10)/2);
    var reactionsScore =   document.getElementById("reactionsScore").value;
  document.getElementById("reactionsMod").value = Math.floor((reactionsScore - 10)/2);
    var engineeringScore =   document.getElementById("engineeringScore").value;
  document.getElementById("engineeringMod").value = Math.floor((engineeringScore - 10)/2);
    var mentalityScore =   document.getElementById("mentalityScore").value;
  document.getElementById("mentalityMod").value = Math.floor((mentalityScore - 10)/2);
    var psycheScore =   document.getElementById("psycheScore").value;
  document.getElementById("psycheMod").value = Math.floor((psycheScore - 10)/2);
    var cunningScore =   document.getElementById("cunningScore").value;
  document.getElementById("cunningMod").value = Math.floor((cunningScore - 10)/2);
    
    //  Set Variables based on Ability Scores and Class Details
    window.willMod = parseInt(document.getElementById("willMod").value);
    window.reactionsMod = parseInt(document.getElementById("reactionsMod").value);
    window.engineeringMod = parseInt(document.getElementById("engineeringMod").value);
    window.mentalityMod = parseInt(document.getElementById("mentalityMod").value);
    window.psycheMod = parseInt(document.getElementById("psycheMod").value);
    window.cunningMod = parseInt(document.getElementById("cunningMod").value);
    
    //  Set Max HP and Initiative Values
    document.getElementById("maxHP").value = 10 + willMod;
    document.getElementById("initiative").value = reactionsMod;
    window.maxHP = parseInt(document.getElementById("maxHP").value);
    
    // Update Skills, Attacks, etc.
    setSkills();
    setNewtypePowers();
    setMaxMSStats();
  }
  
  //  Set Base MS Stats based on Selection
  function setMobileSuit(mobileSuit) {
   var ms = mobileSuit.value;
   if (ms == 'rgm79') {
       document.getElementById("baseArmor").value = 8;
       document.getElementById("baseEvasion").value = 8;
       document.getElementById("baseLoadout").value = 8;
       } else if (ms == 'ms05') {
       document.getElementById("baseArmor").value = 8;
       document.getElementById("baseEvasion").value = 7;
       document.getElementById("baseLoadout").value = 8; 
       } else if (ms == 'ms06') {
       document.getElementById("baseArmor").value = 9;
       document.getElementById("baseEvasion").value = 8;
       document.getElementById("baseLoadout").value = 8; 
       } else if (ms == 'rx78') {
       document.getElementById("baseArmor").value = 11;
       document.getElementById("baseEvasion").value = 10;
       document.getElementById("baseLoadout").value = 12; 
       } else {
         // Leave values unchanged
       }
    setMaxMSStats();
  }
  
  //  Calculate max Armor Points and Evasion based on MS and Modifiers
  function setMaxMSStats () {
    var baseE = parseInt(document.getElementById("baseEvasion").value);
    var baseA = parseInt(document.getElementById("baseArmor").value);
    var prof = document.getElementById("msProficiency").value;
    var playerLevel = parseInt(document.getElementById("level").value);  
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var halfProf = Math.floor(profBonus/2);
    var willBonus = parseInt(document.getElementById("willMod").value);
    var reactionsBonus = parseInt(document.getElementById("reactionsMod").value);
    var engineeringBonus = parseInt(document.getElementById("engineeringMod").value);
    var mentalityBonus = parseInt(document.getElementById("mentalityMod").value);
    var psycheBonus = parseInt(document.getElementById("psycheMod").value);
    var cunningBonus = parseInt(document.getElementById("cunningMod").value); 
    
    if (prof == 'none') {
        document.getElementById("evasionRate").value = baseE + reactionsBonus;
        document.getElementById("maxArmor").value = (baseA + engineeringBonus) * playerLevel;
        } else if (prof == 'half') {
        document.getElementById("evasionRate").value = baseE + reactionsBonus + halfProf;
        document.getElementById("maxArmor").value = (baseA + engineeringBonus + halfProf) * playerLevel;  
        } else {
        document.getElementById("evasionRate").value = baseE + reactionsBonus + profBonus;
        document.getElementById("maxArmor").value = (baseA + engineeringBonus + profBonus) * playerLevel;  
        }
    
  }
  
  //  Set Proficiency Bonus based on Player Level
  function updateProficiency() {
    window.playerLevel = parseInt(document.getElementById("level").value);
    if (playerLevel >= 17) {
      document.getElementById("proficiencyBonus").value = 6;
    } else if (playerLevel >= 13) {
      document.getElementById("proficiencyBonus").value = 5;
    } else if (playerLevel >= 9) {
      document.getElementById("proficiencyBonus").value = 4;
    } else if (playerLevel >= 5) {
      document.getElementById("proficiencyBonus").value = 3;
    } else {
      document.getElementById("proficiencyBonus").value = 2;
    }
    window.proficiencyBonus = parseInt(document.getElementById("proficiencyBonus").value);
  }
  
  //  Trigger the following updates when the Player's level changes
  function playerLevelChange() {
    updateProficiency();
    setSkills();
    enableFeats();
    setNewtypePowers();
    addNewtypePowers();
    setMaxMSStats();
    longRest();
  }
  
  //  Set skill values based on Profciency and Ability Modifiers
  function setSkills() {
    // Set Variables
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var willBonus = parseInt(document.getElementById("willMod").value);
    var reactionsBonus = parseInt(document.getElementById("reactionsMod").value);
    var engineeringBonus = parseInt(document.getElementById("engineeringMod").value);
    var mentalityBonus = parseInt(document.getElementById("mentalityMod").value);
    var psycheBonus = parseInt(document.getElementById("psycheMod").value);
    var cunningBonus = parseInt(document.getElementById("cunningMod").value);
    
    //  Initialize Skill Variables and Add Proficiency
    if (document.getElementById("acrobaticsProf").checked == true) {
    document.getElementById("acrobatics").value = reactionsBonus + profBonus;
    } else {
    document.getElementById("acrobatics").value = reactionsBonus;  
    }
    if (document.getElementById("agsmProf").checked == true) {
    document.getElementById("agsm").value = willBonus + profBonus;
    } else {
    document.getElementById("agsm").value = willBonus;  
    }
    if (document.getElementById("athleticsProf").checked == true) {
    document.getElementById("athletics").value = willBonus + profBonus;
    } else {
    document.getElementById("athletics").value = willBonus;  
    }
    if (document.getElementById("colonyProf").checked == true) {
    document.getElementById("colony").value = engineeringBonus + profBonus;
    } else {
    document.getElementById("colony").value = engineeringBonus;  
    }
    if (document.getElementById("computerProf").checked == true) {
    document.getElementById("computer").value = mentalityBonus + profBonus;
    } else {
    document.getElementById("computer").value = mentalityBonus;  
    }
    if (document.getElementById("commandProf").checked == true) {
    document.getElementById("command").value = cunningBonus + profBonus;
    } else {
    document.getElementById("command").value = cunningBonus;  
    }
    if (document.getElementById("deceptionProf").checked == true) {
    document.getElementById("deception").value = cunningBonus + profBonus;
    } else {
    document.getElementById("deception").value = cunningBonus;  
    }
    if (document.getElementById("demolitionsProf").checked == true) {
    document.getElementById("demolitions").value = engineeringBonus + profBonus;
    } else {
    document.getElementById("demolitions").value = engineeringBonus;  
    }
    if (document.getElementById("historyProf").checked == true) {
    document.getElementById("history").value = mentalityBonus + profBonus;
    } else {
    document.getElementById("history").value = mentalityBonus;  
    }
    if (document.getElementById("insightProf").checked == true) {
    document.getElementById("insight").value = mentalityBonus + profBonus;
    } else {
    document.getElementById("insight").value = mentalityBonus;  
    }
    if (document.getElementById("intimidationProf").checked == true) {
    document.getElementById("intimidation").value = willBonus + profBonus;
    } else {
    document.getElementById("intimidation").value = willBonus;  
    }
    if (document.getElementById("investigationProf").checked == true) {
    document.getElementById("investigation").value = mentalityBonus + profBonus;
    } else {
    document.getElementById("investigation").value = mentalityBonus;  
    }
    if (document.getElementById("landProf").checked == true) {
    document.getElementById("land").value = reactionsBonus + profBonus;
    } else {
    document.getElementById("land").value = reactionsBonus;  
    }
    if (document.getElementById("newtypeProf").checked == true) {
    document.getElementById("newtype").value = psycheBonus + profBonus;
    } else {
    document.getElementById("newtype").value = psycheBonus;  
    }
    if (document.getElementById("perceptionProf").checked == true) {
    document.getElementById("perception").value = mentalityBonus + profBonus;
    } else {
    document.getElementById("perception").value = mentalityBonus;  
    }
    if (document.getElementById("persuasionProf").checked == true) {
    document.getElementById("persuasion").value = cunningBonus + profBonus;
    } else {
    document.getElementById("persuasion").value = cunningBonus;  
    }
    if (document.getElementById("repairProf").checked == true) {
    document.getElementById("repair").value = engineeringBonus + profBonus;
    } else {
    document.getElementById("repair").value = engineeringBonus;  
    }
    if (document.getElementById("salvageProf").checked == true) {
    document.getElementById("salvage").value = engineeringBonus + profBonus;
    } else {
    document.getElementById("salvage").value = engineeringBonus;  
    }
    if (document.getElementById("sleightProf").checked == true) {
    document.getElementById("sleight").value = reactionsBonus + profBonus;
    } else {
    document.getElementById("sleight").value = reactionsBonus;  
    }
    if (document.getElementById("stealthProf").checked == true) {
    document.getElementById("stealth").value = cunningBonus + profBonus;
    } else {
    document.getElementById("stealth").value = cunningBonus;  
    }
    
  }
  
  //  Set Newtype Attack, Save Bonuses, and Max Points
  function setNewtypePowers() {
    var newtypeBonus = parseInt(document.getElementById("psycheMod").value);
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    
    document.getElementById("newtypeAttack").value = (newtypeBonus + profBonus);
    document.getElementById("newtypeSave").value = (8 + newtypeBonus + profBonus);
    
  }
  
  // Sets up class-specific variables and options
  function selectClass() {
    var newtypePowers = document.getElementById("selectedNewtypePowers").length;
    if (newtypePowers == 0) {
      appendNewtypePowers();
    }
    
    addNewtypePowers();
    longRest();
    enableFeats();
  }
  
  // Add Newtype Powers to available Powers list, should only happen on class selection
  function appendNewtypePowers() {
    var classChoice = document.getElementById("classSelect").value;
    var availablePowers = document.getElementById("availableNewtypePowers");
    var cyberContainer = document.getElementById("cyberNewtypePowers");
    var trueContainer = document.getElementById("trueNewtypePowers");
    var cyberNewtype0 = document.getElementById("cyberNewtype0");
    var cyberNewtype1 = document.getElementById("cyberNewtype1");
    var cyberNewtype2 = document.getElementById("cyberNewtype2");
    var cyberNewtype3 = document.getElementById("cyberNewtype3");
    var cyberNewtype4 = document.getElementById("cyberNewtype4");
    var cyberNewtype5 = document.getElementById("cyberNewtype5");
    var cyberNewtype6 = document.getElementById("cyberNewtype6");
    var cyberNewtype7 = document.getElementById("cyberNewtype7");
    var cyberNewtype8 = document.getElementById("cyberNewtype8");
    var cyberNewtype9 = document.getElementById("cyberNewtype9");
    var trueNewtype0 = document.getElementById("trueNewtype0");
    var trueNewtype1 = document.getElementById("trueNewtype1");
    var trueNewtype2 = document.getElementById("trueNewtype2");
    var trueNewtype3 = document.getElementById("trueNewtype3");
    var trueNewtype4 = document.getElementById("trueNewtype4");
    var trueNewtype5 = document.getElementById("trueNewtype5");
    var trueNewtype6 = document.getElementById("trueNewtype6");
    var trueNewtype7 = document.getElementById("trueNewtype7");
    var trueNewtype8 = document.getElementById("trueNewtype8");
    var trueNewtype9 = document.getElementById("trueNewtype9");
    
    if (classChoice == 'cyber-newtype') {
      availablePowers.append(cyberNewtype0);
      availablePowers.append(cyberNewtype1);
      availablePowers.append(cyberNewtype2);
      availablePowers.append(cyberNewtype3);
      availablePowers.append(cyberNewtype4);
      availablePowers.append(cyberNewtype5);
      availablePowers.append(cyberNewtype6);
      availablePowers.append(cyberNewtype7);
      availablePowers.append(cyberNewtype8);
      availablePowers.append(cyberNewtype9);
      trueContainer.append(trueNewtype0);
      trueContainer.append(trueNewtype1);
      trueContainer.append(trueNewtype2);
      trueContainer.append(trueNewtype3);
      trueContainer.append(trueNewtype4);
      trueContainer.append(trueNewtype5);
      trueContainer.append(trueNewtype6);
      trueContainer.append(trueNewtype7);
      trueContainer.append(trueNewtype8);
      trueContainer.append(trueNewtype9);
    } else if (classChoice == 'newtype') {
      availablePowers.append(trueNewtype0);
      availablePowers.append(trueNewtype1);
      availablePowers.append(trueNewtype2);
      availablePowers.append(trueNewtype3);
      availablePowers.append(trueNewtype4);
      availablePowers.append(trueNewtype5);
      availablePowers.append(trueNewtype6);
      availablePowers.append(trueNewtype7);
      availablePowers.append(trueNewtype8);
      availablePowers.append(trueNewtype9);
      cyberContainer.append(cyberNewtype0);
      cyberContainer.append(cyberNewtype1);
      cyberContainer.append(cyberNewtype2);
      cyberContainer.append(cyberNewtype3);
      cyberContainer.append(cyberNewtype4);
      cyberContainer.append(cyberNewtype5);
      cyberContainer.append(cyberNewtype6);
      cyberContainer.append(cyberNewtype7);
      cyberContainer.append(cyberNewtype8);
      cyberContainer.append(cyberNewtype9);
    } else {
      trueContainer.append(trueNewtype0);
      trueContainer.append(trueNewtype1);
      trueContainer.append(trueNewtype2);
      trueContainer.append(trueNewtype3);
      trueContainer.append(trueNewtype4);
      trueContainer.append(trueNewtype5);
      trueContainer.append(trueNewtype6);
      trueContainer.append(trueNewtype7);
      trueContainer.append(trueNewtype8);
      trueContainer.append(trueNewtype9);
      cyberContainer.append(cyberNewtype0);
      cyberContainer.append(cyberNewtype1);
      cyberContainer.append(cyberNewtype2);
      cyberContainer.append(cyberNewtype3);
      cyberContainer.append(cyberNewtype4);
      cyberContainer.append(cyberNewtype5);
      cyberContainer.append(cyberNewtype6);
      cyberContainer.append(cyberNewtype7);
      cyberContainer.append(cyberNewtype8);
      cyberContainer.append(cyberNewtype9);
    }
  }
  
  // Add Newtype Points to list based on class/level
  function addNewtypePowers() {
    var classChoice = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (classChoice == 'cyber-newtype') {
          if (playerLevel == 20) {
            document.getElementById("maxNewtypePoints").value = 133;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 19) {
            document.getElementById("maxNewtypePoints").value = 123;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 18) {
            document.getElementById("maxNewtypePoints").value = 114;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 17) {
            document.getElementById("maxNewtypePoints").value = 107;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = false;
          } else if (playerLevel == 16) {
            document.getElementById("maxNewtypePoints").value = 94;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 15) {
            document.getElementById("maxNewtypePoints").value = 94;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = false;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 14) {
            document.getElementById("maxNewtypePoints").value = 83;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 13) {
            document.getElementById("maxNewtypePoints").value = 83;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = false;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 12) {
            document.getElementById("maxNewtypePoints").value = 73;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 11) {
            document.getElementById("maxNewtypePoints").value = 73;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = false;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 10) {
            document.getElementById("maxNewtypePoints").value = 64;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 9) {
            document.getElementById("maxNewtypePoints").value = 57;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = false;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 8) {
            document.getElementById("maxNewtypePoints").value = 44;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 7) {
            document.getElementById("maxNewtypePoints").value = 38;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = false;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 6) {
            document.getElementById("maxNewtypePoints").value = 32;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 5) {
            document.getElementById("maxNewtypePoints").value = 27;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = false;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 4) {
            document.getElementById("maxNewtypePoints").value = 17;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 3) {
            document.getElementById("maxNewtypePoints").value = 14;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = false;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else if (playerLevel == 2) {
            document.getElementById("maxNewtypePoints").value = 6;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = true;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          } else {
            document.getElementById("maxNewtypePoints").value = 4;
            document.getElementById("cyberNewtype0").disabled = false;
            document.getElementById("cyberNewtype1").disabled = false;
            document.getElementById("cyberNewtype2").disabled = true;
            document.getElementById("cyberNewtype3").disabled = true;
            document.getElementById("cyberNewtype4").disabled = true;
            document.getElementById("cyberNewtype5").disabled = true;
            document.getElementById("cyberNewtype6").disabled = true;
            document.getElementById("cyberNewtype7").disabled = true;
            document.getElementById("cyberNewtype8").disabled = true;
            document.getElementById("cyberNewtype9").disabled = true;
          }
      
    } else if (classChoice == 'newtype') {
          if (playerLevel == 20) {
            document.getElementById("maxNewtypePoints").value = 100;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 19) {
            document.getElementById("maxNewtypePoints").value = 92;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 18) {
            document.getElementById("maxNewtypePoints").value = 86;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 17) {
            document.getElementById("maxNewtypePoints").value = 80;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = false;
          } else if (playerLevel == 16) {
            document.getElementById("maxNewtypePoints").value = 70;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 15) {
            document.getElementById("maxNewtypePoints").value = 70;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = false;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 14) {
            document.getElementById("maxNewtypePoints").value = 62;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 13) {
            document.getElementById("maxNewtypePoints").value = 62;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = false;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 12) {
            document.getElementById("maxNewtypePoints").value = 55;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 11) {
            document.getElementById("maxNewtypePoints").value = 55;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = false;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 10) {
            document.getElementById("maxNewtypePoints").value = 48;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 9) {
            document.getElementById("maxNewtypePoints").value = 43;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = false;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 8) {
            document.getElementById("maxNewtypePoints").value = 33;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 7) {
            document.getElementById("maxNewtypePoints").value = 29;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = false;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 6) {
            document.getElementById("maxNewtypePoints").value = 24;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 5) {
            document.getElementById("maxNewtypePoints").value = 20;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = false;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 4) {
            document.getElementById("maxNewtypePoints").value = 13;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 3) {
            document.getElementById("maxNewtypePoints").value = 11;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = false;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else if (playerLevel == 2) {
            document.getElementById("maxNewtypePoints").value = 5;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = true;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          } else {
            document.getElementById("maxNewtypePoints").value = 2;
            document.getElementById("trueNewtype0").disabled = false;
            document.getElementById("trueNewtype1").disabled = false;
            document.getElementById("trueNewtype2").disabled = true;
            document.getElementById("trueNewtype3").disabled = true;
            document.getElementById("trueNewtype4").disabled = true;
            document.getElementById("trueNewtype5").disabled = true;
            document.getElementById("trueNewtype6").disabled = true;
            document.getElementById("trueNewtype7").disabled = true;
            document.getElementById("trueNewtype8").disabled = true;
            document.getElementById("trueNewtype9").disabled = true;
          }
    } else {
     document.getElementById("maxNewtypePoints").value = 0;
    }
    
  }
  
  // Add Power from available to selected list
  function addNewtypePower() {
    
  }
  
  // Add Power from available to selected list
  function removeNewtypePower() {
    
  }
  
  // Set up Feats panel or update total feats allowed
  function enableFeats() { 
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
    if (document.getElementById("selectedFeats").length < maxFeats) {
      document.getElementById("addFeat").disabled = false;
    }
    
  }
  
  // Add a feat
  function addFeat() {
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
  var featList = document.getElementById("availableFeats");
  var selFeat = featList.selectedIndex;
  
      if (selFeat == -1) {
          window.alert("You must first select an Feat from the list.")
      } else {
          var playerFeats = document.getElementById("selectedFeats");
          var newOption = featList[selFeat].cloneNode(true);
  
          featList.removeChild(featList[selFeat]);
          playerFeats.appendChild(newOption);
      }
    
    if (document.getElementById("selectedFeats").length >= maxFeats) {
      document.getElementById("addFeat").disabled = true;
    }
    if (document.getElementById("selectedFeats").length > 0) {
      document.getElementById("removeFeat").disabled = false;
    }
    if (document.getElementById("availableFeats").length == 0) {
      document.getElementById("addFeat").disabled = true;
    }
    
  }
  
  // Remove a feat
  function removeFeat() {
    var playerClass = document.getElementById("classSelect").value;
    var playerLevel = parseInt(document.getElementById("level").value);
    
    if (playerClass == 'guerilla') {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'artillery') {
          if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'cyber-newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 13) {
            var maxFeats = 4;
          } else if (playerLevel > 9) {
            var maxFeats = 3;
          } else if (playerLevel > 5) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'infiltrator') {
          if (playerLevel > 19) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else if (playerClass == 'newtype') {
          if (playerLevel > 19) {
            var maxFeats = 6;
          } else if (playerLevel > 17) {
            var maxFeats = 5;
          } else if (playerLevel > 14) {
            var maxFeats = 4;
          } else if (playerLevel > 10) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 2) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    } else {
          if (playerLevel > 17) {
            var maxFeats = 7;
          } else if (playerLevel > 16) {
            var maxFeats = 6;
          } else if (playerLevel > 12) {
            var maxFeats = 5;
          } else if (playerLevel > 9) {
            var maxFeats = 4;
          } else if (playerLevel > 8) {
            var maxFeats = 3;
          } else if (playerLevel > 6) {
            var maxFeats = 2;
          } else if (playerLevel > 1) {
            var maxFeats = 1;
          } else {
            var maxFeats = 0;
          }
    }
  
  var featList = document.getElementById("availableFeats");
  var playerFeats = document.getElementById("selectedFeats");
  var selFeat = playerFeats.selectedIndex;
  
      if (selFeat == -1) {
          window.alert("You must first select an Feat from the list.")
      } else {
          var newOption = playerFeats[selFeat].cloneNode(true);
  
          playerFeats.removeChild(playerFeats[selFeat]);
          featList.appendChild(newOption);
      }
    
    if (document.getElementById("selectedFeats").length == 0) {
      document.getElementById("removeFeat").disabled = true;
    }
    if (document.getElementById("selectedFeats").length < maxFeats) {
      document.getElementById("addFeat").disabled = false;
    }  
    
  }
  
  // Update Attack Values
  function updateAttacks() {
    
  }
  
  //  Update Armor with damage/healing
  function updateCurrentAP() {
    var currentAP = parseInt(document.getElementById("currentArmor").value);
    var armorDamage = parseInt(document.getElementById("damageArmor").value);
    var maxAP = parseInt(document.getElementById("maxArmor").value);
    var netDamage = currentAP + armorDamage;
    
    if (netDamage > maxAP)  {
      document.getElementById("currentArmor").value = maxAP;
    } else {
      document.getElementById("currentArmor").value = currentAP + armorDamage;   }
    
    document.getElementById("damageArmor").value = null;
  }
  
  //  Update HP with damage/healing
  function updateCurrentHP() {
    var currentHP = parseInt(document.getElementById("currentHP").value);
    var maxHP = parseInt(document.getElementById("maxHP").value);
    var HPdamage = parseInt(document.getElementById("damageHP").value);
    var netDamage = currentHP + HPdamage; 
    
    if (netDamage > maxHP) {
      document.getElementById("currentHP").value = maxHP;
    } else {
      document.getElementById("currentHP").value = currentHP + HPdamage; 
    }
    
    document.getElementById("damageHP").value = null;
  }
  
  // Use a Newtype Power, subtract Newtype Points
  function castNewtypePower() {
    
  }
  
  // Heal 1 Hit Dice of Armor and HP, no Newtype Point recovery
  function shortRest() {
    var random = Math.floor(Math.random() * 8 + 1);
    var playerLevel = parseInt(document.getElementById("level").value);
    var healing = random * playerLevel;
    var currentHP = parseInt(document.getElementById("currentHP").value);
    var currentAP = parseInt(document.getElementById("currentArmor").value);
    var maxHP = parseInt(document.getElementById("maxHP").value);
    var maxAP = parseInt(document.getElementById("maxArmor").value);
    var willBonus = parseInt(document.getElementById("willMod").value);
    var engineeringBonus = parseInt(document.getElementById("engineeringMod").value);
    var healHP = currentHP + random + willBonus;
    var healAP = currentAP + healing + engineeringBonus;
    
    if (healHP > maxHP) {
        document.getElementById("currentHP").value = maxHP;
        } else {
        document.getElementById("currentHP").value = healHP;
    }
    if (healAP > maxAP) {
        document.getElementById("currentArmor").value = maxAP;
        } else {
        document.getElementById("currentArmor").value = healAP;
    }
    
  }
  
  // Heal all stats
  function longRest() {
    document.getElementById("currentArmor").value = document.getElementById("maxArmor").value;
    document.getElementById("currentHP").value = document.getElementById("maxHP").value;
    document.getElementById("currentNewtypePoints").value = document.getElementById("maxNewtypePoints").value;
  }s