'use strict';

let isPaused = true;
let timeout = false;
let enemies = 0;

//index 0 is Idle, index 1 is walk, index 2 is attack, index 3 victory (3 is not mandatory for everyone);
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

class Character {
  maxHealth = 3;
  health = 3;
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

const Leo = new Character(
  'Leo', spritesLeo, iconLeo
);
const Goblin = new Character(
  'Goblin', spritesGoblin, iconEnemy1
)
const Skeleton = new Character(
  'Skeleton', spritesSkeleton, iconEnemy3
)
const Blaster = new Character(
  'Blaster', spritesBlaster, iconEnemy2
)

while (isPaused == false && timeout == false) {
  timeout = true;
  setTimeout(() => {
    for (let i = 0; i++; i < characters.length) {
      characters[i].animate(objects[i]);
    }
    timeout = false;
  }, 1000)
}