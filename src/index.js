
import{modal} from "./modules/modal.js";
import {createSvgKata} from './modules/createSvgKata.js';
import {scroll} from './modules/scroll.js';

document.addEventListener('DOMContentLoaded', () => {

const headerNavList = document.querySelector('.header_nav_list');
const headerNav  = document.querySelector('.mob-menu-btn');
const circle = document.querySelectorAll('.circle')

createSvgKata();
scroll(null)


circle.forEach(item=>{
     item.addEventListener('click',e=>{
          const target = e.target

          if(target.classList.contains('kihonBlock')){
               scroll('kihonBlock')
           }
           if(target.classList.contains('kataBlock')){
               scroll('kataBlock')
           }
            if(target.classList.contains('kumiteBlock')){
                scroll('kumiteBlock')
           }
     })

})


  // 🔹 бургер
  document.addEventListener('click', e => {

    const target = e.target;

    // відкриття
    if(target.closest('.mob-menu-btn')){
      headerNavList.classList.toggle('open');
      return;
    }

    // клік по пункту
    if(!target.closest('.header_nav_item')){
      headerNavList.classList.remove('open');
      return;
    }

    // клік поза меню
    if(!target.closest('.header_nav')){
      headerNavList.classList.remove('open');
    }

  });


 
  
	                                         















    
})

