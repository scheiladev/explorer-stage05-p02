import state from './state.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';
import * as timer from './timer.js';

export function play() {
  if (state.isRunning) {
    return
  }
  
  state.isRunning = true;
  el.play.classList.add('disabled');

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function stop() {
  state.isRunning = false;
  el.play.classList.remove('disabled');
  sounds.buttonPressAudio.play();
}

export function plus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes = minutes + 5;

  if (minutes > 60) {
    return
  }

  timer.updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

export function minus() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);
  
  minutes = minutes - 5;

  if (minutes < 0) {
    return
  }
  
  timer.updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

export function playSoundJungle() {
  state.isSoundJungle = el.jungle.classList.toggle('active');
  sounds.jungle.play();

  if (!state.isSoundJungle) {
    sounds.jungle.pause();  
  }
}

export function playSoundRain() {
  state.isSoundRain = el.rain.classList.toggle('active');
  sounds.rain.play();

  if (!state.isSoundRain) {
    sounds.rain.pause();  
  }
}

export function playSoundCoffeeShop() {
  state.isSoundCoffeeShop = el.coffeeShop.classList.toggle('active');
  sounds.coffeeShop.play();

  if (!state.isSoundCoffeeShop) {
    sounds.coffeeShop.pause();  
  }
}

export function playSoundFireplace() {
  state.isSoundFireplace = el.fireplace.classList.toggle('active');
  sounds.fireplace.play();

  if (!state.isSoundFireplace) {
    sounds.fireplace.pause();  
  }
}