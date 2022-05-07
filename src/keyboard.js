import keys from './keys.json';

const keysInRows = [14, 15, 13, 13, 9];

// export default class Elem {
//   constructor(tag, cssClass, inner) {
//     this.elem = document.createElement(tag);
//     this.elem.classList.add(cssClass);
//     this.elem.innerHTML = inner;
//   }

//   paste(parent) {
//     parent.append(this.elem);
//   }
// }

export default function pasteLayout() {
  const WRAPPER = document.createElement('div');
  WRAPPER.classList.add('wrapper');

  const TITLE = document.createElement('h1');
  TITLE.classList.add('title');
  TITLE.innerHTML = 'RSS Virtual Keyboard';

  const TEXTAREA = document.createElement('textarea');
  TEXTAREA.classList.add('output');
  TEXTAREA.name = 'output';
  TEXTAREA.id = 'output';
  TEXTAREA.cols = '50';
  TEXTAREA.rows = '5';

  const KEYBOARD = document.createElement('div');
  KEYBOARD.classList.add('keyboard');

  let LENGTH = 0;
  let j = 0;

  for (let i = 0; i < keysInRows.length; i += 1) {
    const KEYROW = document.createElement('div');
    KEYROW.classList.add('keyboard__row');

    LENGTH += keysInRows[i];

    for (j; j < LENGTH; j += 1) {
      const KEY = document.createElement('div');
      KEY.classList.add('keyboard__key');
      KEY.classList.add('key');
      KEY.classList.add(`${keys[j].key}`);

      KEY.innerHTML = `
        <span class="key__rus hidden">
          <span class="caseDown hidden">${keys[j].key__rus.caseDown}</span>
          <span class="caseUp hidden">${keys[j].key__rus.caseUp}</span>
          <span class="caps hidden">${keys[j].key__rus.caps}</span>
          <span class="shiftCaps hidden">${keys[j].key__rus.shiftCaps}</span>
        </span>
        <span class="key__eng">
          <span class="caseDown">${keys[j].key__eng.caseDown}</span>
          <span class="caseUp hidden">${keys[j].key__eng.caseUp}</span>
          <span class="caps hidden">${keys[j].key__eng.caps}</span>
          <span class="shiftCaps hidden">${keys[j].key__eng.shiftCaps}</span>
        </span>
      `;

      KEYROW.append(KEY);
    }

    KEYBOARD.append(KEYROW);
  }

  const BOTTOM = document.createElement('div');
  BOTTOM.classList.add('bottom');

  const DESCRIPTION = document.createElement('p');
  DESCRIPTION.classList.add('description');
  DESCRIPTION.innerHTML = 'Клавиатура создана в операционной системе Windows';

  const LANGUAGE = document.createElement('p');
  LANGUAGE.classList.add('language');
  LANGUAGE.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

  BOTTOM.append(DESCRIPTION, LANGUAGE);

  WRAPPER.append(TITLE, TEXTAREA, KEYBOARD, BOTTOM);
  document.body.append(WRAPPER);
}
