const model = [
  { type: 'title', value: 'Hello world from js' },
  { type: 'text', value: 'Here we go with some text' },
  {
    type: 'columns',
    value: ['111111111', '222222222', '444444444', '555555555', '66666666'],
  },
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
    html = `
    <div class="row">
      <div class="col-sm"><p>${block.value}</p></div>
    </div>
    `;
  } else if (block.type === 'columns') {
    html = columns(block.value);
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
