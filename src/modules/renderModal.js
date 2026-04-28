export function renderModal(type, id){
    console.log('id: ', id);
  const modal = document.querySelector(".modal");
  
  modal.innerHTML = "";

 //const getCard =  data.find(elem=>elem.id===id);

    const newElem = document.createElement('div');
                        
    newElem.classList.add('videoContent');
    newElem.innerHTML=`
    <button class="modal-close">x</button>
	            <video controls width="600">
                     <source src="video/${type}/${id}.mp4" type="video/mp4">
                     Ваш браузер не поддерживает видео
                </video>`
                    

    modal.append(newElem); 

        
}
