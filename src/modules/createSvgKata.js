import { modal } from "./modal.js";


export function createSvgKata(){
  
const startY = 125;   // где начинается список
const itemHeight = 33.1; // высота строки
const x = 400;
const width = 200;


const svg = document.querySelector('.overlayKata');
for (let i = 0; i < 26; i++) {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.setAttribute("x", x);
  rect.setAttribute("y", startY + i * itemHeight);
  rect.setAttribute("width", width);
  rect.setAttribute("height", itemHeight - 5);
  rect.classList.add("zone");
  rect.dataset.id = i + 1;

  svg.appendChild(rect);
}

    document.querySelectorAll('.zone').forEach(zone => {
      zone.addEventListener('click', () => {
        const id = zone.dataset.id;
        document.querySelectorAll('.zone').forEach(z => z.classList.remove('active'));
        zone.classList.add('active');
        modal('kata',id)
      });
    });
    
}