'use strict';

document.addEventListener("DOMContentLoaded", () => {

let isPaused = false;

const words =
['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button', 'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 'keyboard', 'window'];

const pause = document.querySelector(".pause");
const menu = document.querySelector(".menu");
const textbanner = document.querySelector(".text-banner");
const worddisplay = document.getElementById("word-display");
const input = document.getElementById("textinput");
const scorepoint = document.getElementById("score");
const status = document.getElementById("status");
const reset = document.querySelector(".reset");
const timer = document.getElementById("timer");
const leo = document.querySelector(".Leo");
const candle1 = document.querySelector(".Candle1");
const candle2 = document.querySelector(".Candle2");
const enemy = document.querySelector(".Enemy")
const plusoneani = document.getElementById("plusone");
    const currentpoint = document.getElementById('currentpoint');
    const prctg = document.getElementById('percentage');
const start = new Audio('./assets/media/keyboard-typing.mp3');
start.type = 'audio/mp3';
const clear = new Audio('./assets/media/score.mp3');
clear.type = 'audio/mp3';
const background = new Audio('./assets/media/background.mp3');
background.type = 'audio/mp3';
const menusound = new Audio('./assets/media/menu.mp3');
menusound.type = 'audio/mp3';
const hurt = new Audio('./assets/media/hurt.mp3');
hurt.type = 'audio/mp3';
const win = new Audio('./assets/media/winning.mp3');
win.type = 'audio/mp3';

let timeleft = 99;
let timestarted = false;
let timerid = null;
let score = 0;
let currentword = "";
    let hit = 0;
    let acchit = 0;

function updateTimer() {
  if(timeleft > 0) {
    timer.innerText = `Time Left: ${timeleft} s`;
  } else {
    timer.innerText = "Times up!";
  }
}

function sort(list) {
  //list = [[30, 60], [20, 80], [50, 20], [20, 90], [40, 50]];
  list.sort((a, b) => b[0] - a[0]);
  if (list.length >= 10) {
    list.pop();
  }
  console.log(list);
  let scores = [];
  let biggestSlot = 0;
  for (let i in list) {
    for (let j in list) {
      if (i != j) {
        if (list[i][0] > list[j][0] && scores.filter(char => char == list[i]) == 0) {
          biggestSlot = i;
        } else if (list[i][0] == list[j][0]) {
          if (list[i][1] > list[j][1] && scores.filter(char => char == list[i]) == 0) {
            biggestSlot = i;
          } else if (scores.filter(char => char == list[j]) == 0) {
            biggestSlot = j;
          }
        } else if (scores.filter(char => char == list[j]) == 0) {
          biggestSlot = j;
        }
      }
    }
    scores.push(list[biggestSlot]);
    biggestSlot = 0;
  }
};

function timetick() {
  animateCandles();
  if(isPaused) return;

  if(timeleft > 1) {
    timeleft--;
    updateTimer();
    timerid = setTimeout(timetick, 1000);
  } else if (timeleft == 1){
    timeleft--;
    updateTimer();
    background.pause();
    win.play();
    timerid = null;
    leo.classList.add('leo_win');
    enemy.classList.add('skeletonWizard_dead');
  }
}

pause.addEventListener("click", function() {
  menu.classList.toggle("visible");
  textbanner.classList.toggle("visible");
  if (isPaused == false) {
    isPaused = true;
    pause.innerText = "D";
    clearTimeout(timerid);
    updateTimer();
    timestarted = false;
    menusound.play();
    background.pause();
  } else {
    isPaused = false;
    pause.innerText = "II";
    input.value = "";
    input.focus();
  }
});

input.addEventListener("input", () => {
  start.play();
  isPaused = false;
  if (isPaused) return;
  if (!timestarted) {
    timestarted = true;
    clearTimeout(timerid);
    timerid = setTimeout(timetick, 1000);
  }
  if(timeleft > 0) {
    menusound.pause();
    background.play();
  } else {
    background.pause();
    menusound.pause();
  }
});




let remainingWords = [];
for (let i = 0; i < words.length; i++) {
  remainingWords.push(words[i]);
}

        function calPercent() {
          const percent = (acchit / hit) * 100;
          return percent.toFixed(2);
        }

function signWord() {
  const index = Math.floor(Math.random() * remainingWords.length);
  const newWord = remainingWords.splice(index, 1)[0];

  currentword = newWord;
  worddisplay.innerText = newWord;
}

input.addEventListener("input", () => {
  let value = String(input.value);
  if (timeleft > 0) {
                hit++;
    if(value == currentword){
      clear.play();
      score++;
              acchit++;
      plusoneani.classList.add('plusone-animation');
      setTimeout(() => {
        plusone.classList.remove('plusone-animation');
      }, 1000);
      scorepoint.innerText = `Score: ${score}`;
                  prctg.innerText = `${calPercent()}% `
                  currentpoint.innerText = `Current Points: ${score}`;
      input.value = "";
      status.innerText = "";
      signWord();
      leo.classList.add('leo_attack');
      enemy.classList.add('skeletonWizard_hurt');
      setTimeout(() => {
        leo.classList.remove('leo_attack');
        enemy.classList.remove('skeletonWizard_hurt');
      }, 1000);
    } else if (currentword.includes(value)) {
                acchit++;
    } else {
      hurt.play();
      status.innerText = "Please enter the right word!";
      leo.classList.add('leo_hurt');
      enemy.classList.add('skeletonWizard_attack');
      textbanner.classList.add('banner-animation');
      setTimeout(() => {
        leo.classList.remove('leo_hurt');
        enemy.classList.remove('skeletonWizard_attack');
        textbanner.classList.remove('banner-animation');
      }, 1000);
    }
  } else {
    status.innerText = "Time's already up!";
  }
});

function animateCandles() {
  let reps = 0;
  while(reps < 100000) {
    candle1.classList.add('candle_alt');
    candle2.classList.add('candle_alt');
    setTimeout(() => {
      candle1.classList.remove('candle_alt');
      candle2.classList.remove('candle_alt');
    }, 1000);
    reps += 1;
  }
}

function resetgame() {
  clearTimeout(timerid);
  leo.classList.remove('leo_win');
  enemy.classList.remove('skeletonWizard_dead');
                hit = 0;
                acchit = 0;
                prctg.innerText = '';
  isPaused = true;
  timeleft = 99;
  timestarted = false;
  timerid = null;
  score = 0;
  currentword = "";
  timer.innerText = "Time Left: 99 s";
  scorepoint.innerText = "Score: 0";
              currentpoint.innerText = "Current Points:"
  input.value = "";
  status.innerText = "";
  signWord();
  input.focus();
}

signWord();
input.focus();
menusound.play();

reset.addEventListener("click", resetgame);

reset.addEventListener("keydown", (e)=> {
  if (e.key === "pagedown") {
    resetgame();
  }
})

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
