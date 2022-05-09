import './sass/style.scss';
import pasteLayout from './layout';

pasteLayout();

const keys = document.querySelectorAll('.key');

// Animation when press ================================
window.addEventListener('keydown', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains(e.code)) {
      keys[i].classList.add('press');
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

// Animation when click ===============================
keys.forEach((item) => {
  item.addEventListener('mousedown', (e) => {
    e.currentTarget.classList.add('press');
  });
});

keys.forEach((item) => {
  item.addEventListener('mouseup', (e) => {
    e.currentTarget.classList.remove('press');
  });
  item.addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove('press');
  });
});

// Fill textarea by keys =============================
const TEXTAREA = document.querySelector('.output');

const arrOfNonePrintKeys = ['Backspace', 'Tab', 'Delete', 'Del', 'CapsLock', 'Enter', 'Shift', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'Ctrl', 'MetaLeft', 'Win', 'Alt', 'AltLeft', 'AltRight', 'ControlRight'];

const arrow = {
  ArrowUp: '&uarr;',
  ArrowLeft: '&larr;',
  ArrowDown: '&darr;',
  ArrowRight: '&rarr;',
};

window.addEventListener('keydown', (e) => {
  if (e.key.startsWith('Arrow')) {
    TEXTAREA.innerHTML += arrow[e.key];
  } else {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].classList.contains(e.code)
      && !arrOfNonePrintKeys.includes(e.code)) {
        TEXTAREA.innerHTML += e.key;
      }
    }
  }
});

// Fill textarea by clicks =============================
function printLetter(collection, event) {
  let letter = '';
  for (let i = 0; i < collection.length; i += 1) {
    if (!collection[i].classList.contains('hidden')) {
      const targetLetter = Array.from(event.currentTarget.children[i].children)
        .find((a) => !a.classList.contains('hidden'));
      if (!arrOfNonePrintKeys.includes(targetLetter.innerHTML)) {
        letter = targetLetter.innerHTML;
      } else {
        letter = '';
      }
    }
  }
  return letter;
}

keys.forEach((item) => {
  item.addEventListener('mousedown', (e) => {
    TEXTAREA.innerHTML += printLetter(e.currentTarget.children, e);
  });
});

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

// const caseUp = document.querySelectorAll('.caseUp');
// const caps = document.querySelectorAll('.caps');
// const shiftCaps = document.querySelectorAll('.shiftCaps');
