var ask = require("readline-sync");

const playerInventory = [
  {
    name: "Water",
    hpDamage: 30,
    duration: "3 uses"
  },
  {
    name: "Shield",
    hpDamage: 0,
    duration: "10 uses"
  },
  {
    name: "Trap",
    hpDamage: 45,
    duration: "3 uses"
  },
  {
    name: "Body Armor",
    hpDamage: 0,
    duration: "3 uses"
  },
  {
    name: "Bear Metamorphasis",
    hpDamage: 100,
    duration: "1 use"
  }
];
// console.log(playerInventory);

const enemyInfo = [
  {
    name: "Dragon",
    hp: 100,
    weapon: "flight, fling and fire",
  },
  {
    name: "She-Ra Princess of Power",
    hp: 75,
    weapon: "super strength, super speed and sword"
  },
  {
    name: "He-Man",
    hp: 65,
    weapon: "super strength, super speed and sword"
  },
  {
    name: "Dwarf",
    hp: 75,
    weapon: "axe, bow & arrows, assualt rifle"
  }
];

const enemyInventoryItems = [
  {
    name: "Axe",
    hpDamage: 25,
    duration: "3 hits"
  },
  {
    name: "Bow & Arrows",
    hpDamage: 20,
    duration: "10 Arrows"
  },
  {
    name: "Assualt Rifle",
    hpDamage: 75,
    duration: "50 Bullets - each use 10 Bullets"
  },
  {
    name: "Super Strength",
    hpDamage: 25,
    duration: "3 uses"
  },
  {
    name: "Super Speed",
    hpDamage: 0,
    duration: "unlimited"
  },
  {
    name: "Sword",
    hpDamage: 65,
    duration: "unlimited"
  },
  {
    name: "Flight",
    hpDamage: 30,
    duration: "unlimited"
  },
  {
    name: "Fling",
    hpDamage: 65,
    duration: "3 uses"
  },
  {
    name: "Fire",
    hpDamage: 100,
    duration: "1 use"
  }
];

// keyIn(key,"wp")

console.log('\nHi, welome to your Colossal Adventure!\n')
const name = ask.question("What's your name? \n")

console.log(name + " time to begin! Hold on! It's crazy up in here...")

const playerInfo = [
  {
      name: name,
      hp: 20,
      inventory: `${playerInventory[1].name} ${playerInventory[1].hpDamage} HP ${playerInventory[1].duration}`
  }
    ];

console.log("\nPlease choose an action below.\n")

const beginning = ask.keyInSelect(["Walk", "Check Inventory", "Run", "Fight"])

function walk(){
  const enemyHere = Math.floor(Math.random() * 10)
  if (enemyHere < 4){
    fight();
  } else {
  console.log("There are no enemies here. ")
  return beginning;
  }
}

console.log(walk());

function run(){
  playerInfo.hp - 5;
  console.log(playerInfo.hp);
  beginning;
};

console.log(run());

function fight() {
  if (beginning === 3){
    attackEnemy();
  }
};

const enemyNameList = ["Dragon", "She-Ra Princess of Power", "He-Man", "Dwarf"];

function attackEnemy(){
  console.log("You encounter ")
  // const randomEnemy = Math.floor(Math.random(enemyNameList.length))
  //   console.log(randomEnemy);
  ask.keyInSelect(["Bear Metamorphasis", "Trap", "Water", "Shield", "Body Armor"])
  const choose = ask.keyInSelect(["Use weapon", "Run"]);
  if (choose === 1) {
    run();
  }
};

function option() {
  while (playerInfo.hp > 0) {
  const beginning = ask.keyInSelect(["Walk", "Check Inventory", "Run", "Fight"]);
   if (beginning === 0){
     walk();
   } else if (beginning === 1){
     checkInventory();
   } else if (beginning === 2){
     run();
   } else if (beginning === 3){
     attackEnemy();
   }
 }
};
// console.log(option())

// function checkInventory() {
//
// }
//
// function enemyAttack() {
//
// }
//
// function die() {
//
// }
//
// function enemyDie() {
//
// }
