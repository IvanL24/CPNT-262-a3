import { animals } from './animals.js';
  
let outputHTML = '';
  
const gallery = document.querySelector('.gallery');

animals.forEach(function(item){
  
  console.log(item);
  
  outputHTML +=
    
  `<figure class="card">
        
    <img src="https://picsum.photos/id/${item.id}/${item.width}/${item.height}" alt="${item.title}">
    <figcaption>Photography by: <a href="${item.url}">${item.credit}</a></figcaption>
    
  </figure>`

  });

gallery.innerHTML = outputHTML;