  //скрол по блокам
        export function scroll (id) {
            console.log('scroll: ', id);

             const scrollUp = document.querySelector('body');
                 const up = document.querySelector('.up');
                 if(up){
                     up.style.display = 'none';
                     window.addEventListener('scroll', () => {
                       if (pageYOffset >= 612) {
                         up.style.display = 'block';
                       } else {
                         up.style.display = 'none';
                       }
                    });

                       const click = () => {
                          up.addEventListener('click', () => {
                            scrollUp.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          });
                        };
                       click();
                 }
 
               const getId = document.getElementById(`${id}`);
                if (getId !== null) {
                  getId.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }



               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
      






              };
      
