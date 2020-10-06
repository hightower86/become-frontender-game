import img from './assets/image.png';

export function columns(columns) {
  return row(columns.map((column) => col(column)).join(''));
}
export function image(path) {
  return `
    <img src='${img}'/>
  `;
}

export function text(content) {
  return `<p>${content}</p>`;
}

export function title(content) {
  return `<h1>${content}</h1>`;
}

export function row(content) {
  return `
  <div class="row">
    ${content}
  </div>
  `;
}
export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
