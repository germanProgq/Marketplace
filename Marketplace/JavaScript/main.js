//Parallax//  
            
let about= document.getElementById('about-us'); 
let shopping = document.getElementById('shoping');
let contact = document.getElementById('contact-us');    
      

window.addEventListener('scroll', () =>{        
let value = window.scrollY;
about.style.marginTop= value*0.3+ 'px';
shopping.style.marginTop= value*0.2+ 'px';
contact.style.marginTop= value*0.4+ 'px';
}) 






//Infinite-Scroller//
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
addAnimation();
}

function addAnimation() {
scrollers.forEach((scroller) => {    
scroller.setAttribute("data-animated", true);


const scrollerInner = scroller.querySelector(".scroller-inner");
const scrollerContent = Array.from(scrollerInner.children);


scrollerContent.forEach((item) => {
const duplicatedItem = item.cloneNode(true);
duplicatedItem.setAttribute("aria-hidden", true);
scrollerInner.appendChild(duplicatedItem);


});
});
}

//Cart
//Items    
const container = document.getElementById('shopping');


products.forEach(product => {  
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');   

    productDiv.innerHTML = `
        <img class='product-image' src="${product.itemImage}" alt="${product.itemName}">
        <div class="product-describtion">
        <h2 class="title">${product.itemName}</h2>
        <p class='describtion'>${product.itemDescribtion}</p>         
        <button class='learn-more-button button' href="${product.itemWebsite}">Learn More</button>               
        <button class="add-cart-button button">Add to Cart</button>
        </div>
    `;
    const learnMoreButton = productDiv.querySelector('.learn-more-button');
    learnMoreButton.addEventListener('click', () => {
        window.open(product.itemWebsite);
    })

    const addToCartButton = productDiv.querySelector('.add-cart-button');
    addToCartButton.addEventListener('click', () => {
        AddItem(product);
    });
    
   
    container.appendChild(productDiv);
});



//AutoSave
let cart = JSON.parse(localStorage.getItem('cart')) || [];
setInterval(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
}, 3000);

function AddItem(item) {
cart.push(item); 
Save();                     
}
function Save() {
    localStorage.setItem('cart', JSON.stringify(cart));
}









