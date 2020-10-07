import { model } from './model';
import { templates } from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach((block) => {
  // let html = '';
  // if (block.type === 'title') {
  //   html = templates.title(block.value);
  // } else if (block.type === 'text') {
  //   html = templates.text(block.value);
  // } else if (block.type === 'columns') {
  //   html = templates.columns(block.value);
  // } else if (block.type === 'image') {
  //   html = templates.image(block.value);
  // }
  const toHTML = templates[block.type];
  if (toHTML) {
    $site.insertAdjacentHTML('beforeend', toHTML(block.value, block.tag));
  }
});
