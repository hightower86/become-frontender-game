import img from './assets/image.png';

function columns(columns) {
  return row(columns.map((column) => col(column)).join(''));
}

function image(path) {
  return `
    <img src='${img}'/>
  `;
}

function text(content) {
  return `<p>${content}</p>`;
}

function title(content) {
  return `<h1>${content}</h1>`;
}

function row(content) {
  return `
  <div class="row">
    ${content}
  </div>
  `;
}

function col(content) {
  return `
  <div class="col-sm">
    ${content}
  </div>
  `;
}

export const templates = {
  columns,
  text,
  title,
  image,
  col,
  row,
};
