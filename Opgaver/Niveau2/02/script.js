
const products = document.querySelectorAll(".product");

products.forEach(function(product) {
  
  const productQuantity = product.querySelector(".product__quantity");
  const btnMinus = product.querySelector(".product__btn--minus");
  const btnPlus = product.querySelector(".product__btn--plus");
  const price = product.querySelector(".product__price");
  const totalPrice = product.querySelector(".product__totalPrice");
  console.log(price.textContent)

  let quantity = 0;
  
  btnPlus.addEventListener("click", function(){
    
    quantity++;
    // console.log(quantity)
    let tprice = price.textContent * quantity;
    productQuantity.textContent = quantity;
    totalPrice.textContent = tprice;
    
  })
  
  btnMinus.addEventListener("click", function(){
    // let tprice = Number(price) * quantity;
    if(quantity > 0)
      quantity--;
    let tprice = price.textContent * quantity;
    productQuantity.textContent = quantity;
    totalPrice.textContent = tprice;
  })
})

