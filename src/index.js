// Add layout ====================================
import './sass/style.scss';
import pasteLayout from './layout';

pasteLayout();

// Press keys on keyboard =========================
const TEXTAREA = document.querySelector('.output');

// Animation when press ================================
const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains(e.code)) {
      keys[i].classList.add('press');
      TEXTAREA.innerHTML += e.key;
    }
  }
});

window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains(e.code)) {
      keys[i].classList.remove('press');
    }
  }
});

// const caseUp = document.querySelectorAll('.caseUp');
// const caps = document.querySelectorAll('.caps');
// const shiftCaps = document.querySelectorAll('.shiftCaps');

// Change language ====================================
const RUS = document.querySelectorAll('.key__rus');
const ENG = document.querySelectorAll('.key__eng');
const caseDown = document.querySelectorAll('.caseDown');
const pressed = new Set();

window.addEventListener('keydown', (e) => {
  if (e.code === 'ShiftLeft'
  || e.code === 'AltLeft') {
    pressed.add(e.code);
  }
  if (pressed.has('ShiftLeft')
  && pressed.has('AltLeft')) {
    RUS.forEach((item) => {
      item.classList.toggle('hidden');
    });
    caseDown.forEach((item) => {
      item.classList.toggle('hidden');
    });
    ENG.forEach((item) => {
      item.classList.toggle('hidden');
    });
  }
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft'
  || e.code === 'AltLeft') {
    pressed.delete(e.code);
  }
});

// Clicks on keys ==========================
const KEYBOARD = document.querySelector('.keyboard');

KEYBOARD.addEventListener('mousedown', (e) => {
  e.target.classList.add('press');
});

KEYBOARD.addEventListener('mouseup', (e) => {
  e.target.classList.remove('press');
});
