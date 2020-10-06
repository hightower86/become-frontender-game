const model = [
  { type: 'title', value: 'Hello world from js!!!' },
  { type: 'text', value: 'Here we go with some text' },
  {
    type: 'columns',
    value: ['111111111', '222222222', '444444444', '555555555', '66666666'],
  },
  { type: 'image', value: './assets/image.png' },
];

const $site = document.querySelector('#site');

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    html = `
    <div class="row">
      <div class="col-sm"><h1>${block.value}</h1></div>
    </div>
    `;
  } else if (block.type === 'text') {
    // html = `
    // <div class="row">
    //   <div class="col-sm"><p>${block.value}</p></div>
    // </div>
    // `;
    html = row(col(text(block.value)));
  } else if (block.type === 'columns') {
    html = columns(block.value);
  } else if (block.type === 'image') {
    html = image(block.value);
  }
  $site.insertAdjacentHTML('beforeend', html);
});

function columns(columns) {
  html = columns.map((column) => `<div class="col-sm">${column}</div>`);
  return `<div class='row'>
            ${html.join('')}
         </div>
         `;
}

function image(path) {
  return `
    <img src='${path}'/>
  `;
}

function row(content) {
  return `
  <div class="row">
    ${content}
  </div>
  `;
}

function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

function text(content) {
  console.log(content);
  return `<p>${content}</p>`;
}
