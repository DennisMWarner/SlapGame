let items = {
  brassKnuckles: {
    name: "brass knuckles",
    modifier: 5,
    description: "I'M BLEEDING!"
  },
  steelToedBoots: {
    name: "steel toed boots",
    modifier: 5,
    description: "Whyyyyyy"
  },
  mittens: {
    name: "mittens",
    modifier: -2,
    description: "Aweee"
  }
};

let player = {
  health: 100,
  attacks: {
    slap: 5,
    punch: 8,
    kick: 10
  },
  items: []
};

function giveWeapon(weaponKey) {
  let weaponMod = items[weaponKey].modifier;
  console.log(weaponKey);
  console.log(weaponMod);

  player.items.push(weaponMod);

  // for (const weaponKey in items) {
  //   if (items.hasOwnProperty(weaponKey)) {
  //     let weapon = items[weaponKey];
  //     player.items.push(weapon);
  //   }
  // }
  addMods();
}

let health = 100;

function slap() {
  health -= 5;
  //console.log(health);
  update();
}

function update() {
  document.getElementById("health").innerHTML = health.toString();
}

function punch() {
  health -= 8;
  update();
}

function kick() {
  health -= 10;
  update();
}

function addMods() {
  let modTotal = 0;

  for (let index = 0; index < player.items.length; index++) {
    modTotal += player.items[index].modifier;
  }
  console.log(modTotal);
  return modTotal;
}

update();
//giveWeapon();
