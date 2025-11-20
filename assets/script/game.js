'use strict';

let isPaused = false;
let inBattle = true;
let timeout = false;
let enemies = 0;

//index 0 is Idle, index 1 is walk, index 2 is attack, index 3 victory (not mandatory for everyone);
const spritesLeo = ["leo_idle", "leo_walk"];
const spritesGoblin = ["goblin_idle", "goblin_walk"];
const spritesSkeleton = ["skeleton_idle", "skeleton_walk"];
const spritesBlaster = ["blaster_idle", "blaster_walk"];

const iconLeo = document.getElementById('Leo');
const iconEnemy1 = document.getElementById('Enemy1');
const iconEnemy2 = document.getElementById('Enemy2');
const iconEnemy3 = document.getElementById('Enemy3');

const objects = [iconLeo, iconEnemy1];
const characters = [];

class Item {
  #name = "";
  #icon = "";
  #action = "";
  #passive = false;
  constructor(name, icon, action, passive) {
    this.#name = name;
    this.#icon = icon;
    this.#action = action;
    this.#passive = passive
  }

  get name() {
    return this.name;
  }

  use() {
    if (this.#action == "heal") {

    } else if (this.#action == "equip") {

    } else {
      
    }
  }
}

class Character {
  maxHealth = 10;
  health = 10;
  atk = 1;
  defense = 1;
  #spriteSheet = [];
  #name = "";
  #animation = "";

  constructor(name, spriteSheet) {
    this.#name = name;
    this.#spriteSheet = spriteSheet;
    this.#animation = 'idle';
  }

  get name() {
    return this.#name;
  }

  get animation() {
    return this.#animation;
  }

  animate(target) {
    if (this.#animation == 'idle') {
      target.classlist.add(this.#spriteSheet[0]);
      setTimeout(function() {
        target.classlist.remove(this.#spriteSheet[0]);
      }, 1000);
    } else if (this.#animation == 'walk') {
      target.classlist.add(this.#spriteSheet[1]);
      setTimeout(function() {
        target.classlist.remove(this.#spriteSheet[1]);
      }, 1000);
    }
  }
}

class Hero extends Character {
  #lName = "";
  #race = "";
  level = 1;
  #job = "";

  constructor(firstName, lastName, race, job, spriteSheet) {
    super(firstName, spriteSheet);
    characters.push(this);
    this.#lName = lastName;
    this.#race = race;
    this.#job = job;
  }

  //methods
  get lName() {
    return this.lName;
  }

  get job() {
    return this.job;
  }

  getBio() {
    return `${this.getName()} ${this.lName} (Level: ${this.level} ${this.race} ${this.job})`;
  }
}
class Enemy extends Character {
  constructor(name, spriteSheet, object) {
    characters.push(this);
    enemies += 1;
    super(name, spriteSheet);
  }

  //methods
}

const Leo = new Hero(
  'Leo', 'Northstar', 'Eternian-Cat', 'Adventurer', spritesLeo
);
const Goblin = new Enemy(
  'Goblin', spritesGoblin, iconEnemy1
)
const Skeleton = new Enemy(
  'Skeleton', spritesSkeleton, iconEnemy3
)
const Blaster = new Enemy(
  'Blaster', spritesBlaster, iconEnemy2
)

console.log(Leo.getBio());

while (isPaused == false && timeout == false) {
  timeout = true;
  setTimeout(() => {
    for (let i = 0; i++; i < characters.length) {
      characters[i].animate(objects[i]);
    }
    timeout = false;
  }, 1000)
}