import { model } from './model';
import { columns, image, text, title } from './templates';
const $site = document.querySelector('#site');

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    // html = `
    // <div class="row">
    //   <div class="col-sm"><h1>${block.value}</h1></div>
    // </div>
    // `;
    html = title(block.value);
  } else if (block.type === 'text') {
    html = text(block.value);
  } else if (block.type === 'columns') {
    html = columns(block.value);
  } else if (block.type === 'image') {
    html = image(block.value);
  }
  $site.insertAdjacentHTML('beforeend', html);
});
