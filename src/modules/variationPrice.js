
export function variationPrice(select,data){
    const price = document.querySelector('.modal_price')
    select.addEventListener('change', event=>{
        const target = event.target;
        const value = parseInt(target.value);
        const index = data.variation.findIndex(obyom=>obyom===value)
        price.textContent = `${data.price[index]} грн`;
    })

}