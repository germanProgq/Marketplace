//Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let itemQuantities = {};
let totalCost = 0;
const container = document.getElementById('cart-inner');    
document.body.onload = addElement();    
window.addEventListener("unload", localStorage.setItem('cart', JSON.stringify(cart)));  
  

  
   
   


function addElement() {
    cart.forEach(item => {    
itemQuantities[item.itemName] = (itemQuantities[item.itemName] || 0) + 1;
let existingDiv = container.querySelector(`.cart-item[data-item-name="${item.itemName}"]`);



if (existingDiv) {       
    const quantityText = ` x${itemQuantities[item.itemName]}`;
    existingDiv.querySelector('.item-quantity').textContent = quantityText;
} else {        
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.setAttribute('data-item-name', item.itemName); 


    const quantityText = itemQuantities[item.itemName] > 1 ? ` x${itemQuantities[item.itemName]}` : ''; 
    let total = (item.itemPrice) * (itemQuantities[item.itemName]);
    let withTax = total*1.2;
    totalCost+=withTax;   
    div.innerHTML = `              
        <div class="product-describtion">
        <p class="item-name">${item.itemName}<span class="item-quantity">${quantityText}</span></p>
        <p class="price">$${(item.itemPrice)}</p>
        <p class="delivery-time">Delivery Time: ${item.itemDeliveryTime}</p>        
        <p class="total-cost">Total Cost: ${total}</p>  
        <p class="add-tax">With Tax: $${withTax}</p>       
        <button class="delete-item">Delete</button>                
        </div>     
        <div class="image-border">  
        <img class="product-image" src=${item.itemImage}>
        </div>
       
        
    `;

    const deleteBtn = div.querySelector('.delete-item');        
    deleteBtn.addEventListener('click', () => {           
        itemQuantities[item.itemName]--;
        let quantityText = itemQuantities[item.itemName] > 1 ? ` x${itemQuantities[item.itemName]}` : '';
        div.querySelector('.item-quantity').textContent = quantityText;      

        const index = cart.findIndex(cartItem => cartItem.itemName === item.itemName);       
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));                                      
                     if(index<0) {
                        document. location. reload() 
                     }
      
        
        

     
});
container.appendChild(div);
}
});
}
//Clear Cart
const clearCart = document.querySelector('.clear-cart-button');
clearCart.addEventListener('click', ()=> {        
    localStorage.setItem('cart', 0); 
    cart=0;    
    document. location. reload();
})
//Save

//AutoSave
setInterval(()=> {
localStorage.setItem('cart', JSON.stringify(cart));
},)

//Total Cost
let showCost = document.getElementById('total')
showCost.innerHTML = 'Total: $'+totalCost;



