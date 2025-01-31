
const products = document.querySelectorAll(".product");

products.forEach(function(product) {
  
  const productQuantity = product.querySelector(".product__quantity");
  const btnMinus = product.querySelector(".product__btn--minus");
  const btnPlus = product.querySelector(".product__btn--plus");
  const btnPlus = product.querySelector(".product__btn--plus");
  let quantity = 0;

  btnPlus.addEventListener("click", function(){
    
    quantity++;
    productQuantity.textContent = quantity;

  })

  btnMinus.addEventListener("click", function(){
    if(quantity > 0)
      quantity--;
    productQuantity.textContent = quantity;
  })
})

