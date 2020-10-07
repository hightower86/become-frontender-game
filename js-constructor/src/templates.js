import img from './assets/image.png';
import { col, row } from './utils';

function columns(columns) {
  return row(columns.map(col).join(''));
}

function image(path) {
  return `
    <img src='${img}'/>
  `;
}

function text(content) {
  return row(col(`<p>${content}</p>`));
}

function title(content, tag = 'h1') {
  return row(col(`<${tag}>${content}</${tag}>`));
}

export const templates = {
  columns,
  text,
  title,
  image,
};
