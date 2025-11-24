'use strict';

document.addEventListener("DOMContentLoaded", () => {

let isPaused = false;
let timeout = false;
let enemies = 0;

const words =
['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 'keyboard', 'window'];

const pause = document.querySelector(".pause");
const menu = document.querySelector(".menu");
const textbanner = document.querySelector(".text-banner");
const timer = document.getElementById("timer");
const worddisplay = document.getElementById("word-display");
const input = document.getElementById("textinput");

pause.addEventListener("click", function() {
  menu.classList.toggle("visible");
  textbanner.classList.toggle("visible");
  if (isPaused == false) {
    isPaused = true;
    pause.innerText = "D";
  } else {
    isPaused = false;
    pause.innerText = "II";
  }
});


let timeleft = 15;
let timestarted = false;
let timerid = null;

function updateTimer() {
  const timer = document.getElementById("timer");
  timer.innerText = `Time Left: ${timeleft} s`;
}

function startTimer() {
  timeleft--;
  updateTimer();

  if(timeleft > 0) {
    timerid = setTimeout(startTimer, 1000);
  } else {
    timerid = null;
    timer.innerText = "Times up!";
  }
}

input.addEventListener("keydown", startTimer);

});

/* Animation and physic code for extra stuff later on...
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
*/
