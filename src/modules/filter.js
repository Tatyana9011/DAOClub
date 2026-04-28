import {renderTable} from './renderTable.js';
import {data} from './data.js';

//renderTable(data);

export function filter(target){

    const links = document.querySelectorAll(".header_nav_item");
    const clubPage = document.querySelector('.clubPage');

    clubPage.style.display = "none";

    let text = target.textContent;

    if(text==='Головна'){
        clubPage.style.display = "flex";
    }

    const newData = data.filter(item=>item.navLink===text);

    if(newData.length){
       
        renderTable(newData);

    }else{

        const cards = document.querySelector('.cards');
        if(text==='Головна'){
            clubPage.style.display = "flex";
            cards.innerHTML=``;

        }else{
            cards.innerHTML = '<p class="header_worn">Ця сторінка в процесі доопрацювання.</p> ';
        }
         
        
    }
  

}