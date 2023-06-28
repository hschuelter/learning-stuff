//  Set Ability Modifiers according to Ability Score
function updateModifiers(){
    //  Convert Ability Scores to Modifiers
    var strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
    var dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);
    var conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);
    var intScore = document.getElementById("intScore").value;
  document.getElementById("intMod").value = Math.floor((intScore - 10)/2);
    var wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);
    var chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);
    
    //  Set Variables based on Ability Scores and Class Details
    window.strMod = parseInt(document.getElementById("strMod").value);
    window.dexMod = parseInt(document.getElementById("dexMod").value);
    window.conMod = parseInt(document.getElementById("conMod").value);
    window.intMod = parseInt(document.getElementById("intMod").value);
    window.wisMod = parseInt(document.getElementById("wisMod").value);
    window.chaMod = parseInt(document.getElementById("chaMod").value);
    
    //  Set Max HP and Initiative Values
    // document.getElementById("maxHP").value = 10 + strMod;
    document.getElementById("initiative").value = dexMod;
    // window.maxHP = parseInt(document.getElementById("maxHP").value);
    
    // Update Skills, Attacks, etc.
    setSkills();
    // setNewtypePowers();
  }

  //  Set Proficiency Bonus based on Player Level
  function updateProficiency() {
    window.playerLevel = parseInt(document.getElementById("level").value);
    document.getElementById("proficiencyBonus").value = Math.ceil(playerLevel / 4) + 1;
    window.proficiencyBonus = parseInt(document.getElementById("proficiencyBonus").value);
  }
  
  //  Trigger the following updates when the Player's level changes
  function playerLevelChange() {
    updateProficiency();
    setSkills();
    enableFeats();
    setNewtypePowers();
    addNewtypePowers();
    longRest();
  }

  function updateSkillProficiency(skill, skillProf, abilityMod) {
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var abilityBonus = parseInt(document.getElementById(abilityMod).value);

    if (document.getElementById(skillProf).checked == true) {
      document.getElementById(skill).value = abilityBonus + profBonus;
    } else {
      document.getElementById(skill).value = abilityBonus;  
    }

  }
  
  //  Set skill values based on Profciency and Ability Modifiers
  function setSkills() {
    // Set Variables
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    var strBonus = parseInt(document.getElementById("strMod").value);
    var dexBonus = parseInt(document.getElementById("dexMod").value);
    var conBonus = parseInt(document.getElementById("conMod").value);
    var intBonus = parseInt(document.getElementById("intMod").value);
    var wisBonus = parseInt(document.getElementById("wisMod").value);
    var chaBonus = parseInt(document.getElementById("chaMod").value);
    
    //  Initialize Skill Variables and Add Proficiency
    if (document.getElementById("acrobaticsProf").checked == true) {
      document.getElementById("acrobatics").value = dexBonus + profBonus;
    } else {
      document.getElementById("acrobatics").value = dexBonus;  
    }

    if (document.getElementById("animaHandlingProf").checked == true) {
      document.getElementById("animaHandling").value = wisBonus + profBonus;
    } else {
      document.getElementById("animaHandling").value = wisBonus;  
    }

    if (document.getElementById("arcanaProf").checked == true) {
      document.getElementById("arcana").value = intBonus + profBonus;
    } else {
      document.getElementById("arcana").value = intBonus;  
    }

    if (document.getElementById("athleticsProf").checked == true) {
      document.getElementById("athletics").value = strBonus + profBonus;
    } else {
      document.getElementById("athletics").value = strBonus;  
    }

    if (document.getElementById("deceptionProf").checked == true) {
      document.getElementById("deception").value = chaBonus + profBonus;
    } else {
      document.getElementById("deception").value = chaBonus;  
    }

    if (document.getElementById("historyProf").checked == true) {
      document.getElementById("history").value = intBonus + profBonus;
    } else {
      document.getElementById("history").value = intBonus;  
    }

    if (document.getElementById("insightProf").checked == true) {
      document.getElementById("insight").value = wisBonus + profBonus;
    } else {
      document.getElementById("insight").value = wisBonus;  
    }

    if (document.getElementById("intimidationProf").checked == true) {
      document.getElementById("intimidation").value = chaBonus + profBonus;
    } else {
      document.getElementById("intimidation").value = chaBonus;  
    }

    if (document.getElementById("investigationProf").checked == true) {
      document.getElementById("investigation").value = intBonus + profBonus;
    } else {
      document.getElementById("investigation").value = intBonus;  
    }

    if (document.getElementById("medicineProf").checked == true) {
      document.getElementById("medicine").value = wisBonus + profBonus;
    } else {
      document.getElementById("medicine").value = wisBonus;  
    }

    if (document.getElementById("natureProf").checked == true) {
      document.getElementById("nature").value = intBonus + profBonus;
    } else {
      document.getElementById("nature").value = intBonus;  
    }

    if (document.getElementById("perceptionProf").checked == true) {
      document.getElementById("perception").value = wisBonus + profBonus;
    } else {
      document.getElementById("perception").value = wisBonus;  
    }

    if (document.getElementById("performanceProf").checked == true) {
      document.getElementById("performance").value = chaBonus + profBonus;
    } else {
      document.getElementById("performance").value = chaBonus;  
    }

    if (document.getElementById("persuasionProf").checked == true) {
      document.getElementById("persuasion").value = chaBonus + profBonus;
    } else {
      document.getElementById("persuasion").value = chaBonus;  
    }

    if (document.getElementById("religionProf").checked == true) {
      document.getElementById("religion").value = intBonus + profBonus;
    } else {
      document.getElementById("religion").value = intBonus;  
    }

    if (document.getElementById("sleightProf").checked == true) {
      document.getElementById("sleight").value = dexBonus + profBonus;
    } else {
      document.getElementById("sleight").value = dexBonus;  
    }

    if (document.getElementById("stealthProf").checked == true) {
      document.getElementById("stealth").value = dexBonus + profBonus;
    } else {
      document.getElementById("stealth").value = dexBonus;  
    }

    if (document.getElementById("survivalProf").checked == true) {
      document.getElementById("survival").value = wisBonus + profBonus;
    } else {
      document.getElementById("survival").value = wisBonus;  
    }
    
  }
  
  //  Set Newtype Attack, Save Bonuses, and Max Points
  function setNewtypePowers() {
    var newtypeBonus = parseInt(document.getElementById("wisMod").value);
    var profBonus = parseInt(document.getElementById("proficiencyBonus").value);
    
    document.getElementById("newtypeAttack").value = (newtypeBonus + profBonus);
    document.getElementById("newtypeSave").value = (8 + newtypeBonus + profBonus);
    
  }

function updateHealth(){
  var currentHP = parseInt(document.getElementById("currentHP").value);
  var maxHP     = parseInt(document.getElementById("maxHP").value);
  var ratio = 100 * currentHP / maxHP;

  if (currentHP > maxHP) {
   ratio = 100;
  }  
  
  if (currentHP < 0) {
    ratio = 0;
  }
  

  var healthBar = document.getElementById("healthBar");
  var healthBarText = document.getElementById("healthBarText");
  
  healthBar.style.width = ratio + '%';
  healthBarText.innerHTML = currentHP + '/' + maxHP;
}
  