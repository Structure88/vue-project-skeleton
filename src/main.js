import { add } from './util/add';
import person from './data/person.json';

import './assets/css/app.scss';

import editIcon from './assets/image/edit.png';
import mineIcon from './assets/image/mine.png';

console.log(add(1, 2));
console.log(person);

const imageElementEdit = new Image();
imageElementEdit.src = editIcon;

const imageElementMine = new Image();
imageElementMine.src = mineIcon;

document.body.appendChild(imageElementEdit);
document.body.appendChild(imageElementMine);
