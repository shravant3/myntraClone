import { cart } from "./cart.js";


export const products = [{
    id: '1746fc9-3744s-65lw83-59274de01',
    image: 'products/versace.avif',
    name: 'Versace Jeans Couture',
    price: 51000
}, {
    id: '1746fc9-3744s-65lw83-59274de02',
    image: 'products/2.avif',
    name: 'Hackett London',
    price: 20500
}, {
    id: '1746fc9-3744s-65lw83-59274de03',
    image: 'products/3.avif',
    name: 'Ted Baker',
    price: 12500
}, {
    id: '1746fc9-3744s-65lw83-59274de04',
    image:'products/4.avif',
    name: 'Nike',
    price: '3895'
}];

export let index=0;
export let productsHTML='';
prorun();



export function prorun(){
products.forEach((product) =>{
    productsHTML +=`
    <div class="container text-center">
      <div class="row row-cols-auto">
        <div class="col">
          <img class="image" src="${product.image}">
          <p class="name">${product.name}</p>
          <p class="price" style="font-weight: 700;">Rs.${product.price}</p>
          <button class="move-to-bag js-move-to-bag" data-bs-toggle="modal" data-bs-target="#exampleModal" data-product-id="${product.id}" >MOVE TO BAG</button>
        </div>
      </div>
    </div>
    `;
    index+=1;
});
}

proEven();

function proEven(){
  if(productsHTML != null)
  document.querySelector('.js-products-grid').innerHTML=productsHTML;
}

export let productId='';
export let size='';

document.querySelector('.js-wish-head').innerHTML=`My Wishlist ${index} items`;


// document.querySelector('.js-products-grid').innerHTML=productsHTML;

document.querySelectorAll('.js-move-to-bag')
  .forEach((button) => {
    button.addEventListener('click', () => {
      productId=button.dataset.productId;
    });
  });

  const element=document.getElementById("js-submit-but");
  element.addEventListener("click", () => {
    var small=document.getElementById("flexRadioDefault1");
    var medium=document.getElementById("flexRadioDefault2");
    var large=document.getElementById("flexRadioDefault3");
      if(small.checked==true)
        size='Small';
      else if(medium.checked==true)
        size='Medium';
      else if(large.checked==true)
        size='Large';

      let matchingItem;
      cart.forEach((cartItem) =>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
      });
      if(matchingItem){
        matchingItem.quantity+=1;
      }else{
        cart.push({
          productId: productId,
          size: size,
          quantity:1
        });
      }

    let cartQuantity=0;
        cart.forEach((cartItem) => {
            cartQuantity+=cartItem.quantity;
        });


      document.querySelector('.js-index-but').innerHTML=cartQuantity;
  });

  

