const productsArray = [];
/*`````````ORDERS ARRAY USING DOCUMENT.QUERYSELECTOR(from cart.js)``````````` */
const itemsInCart = [...document.querySelectorAll('.items-list li')] ;

itemsInCart.forEach(item =>{
    const prodInArray = {
        productID: item.dataset.id,
        price: item.dataset.price,
        type: item.dataset.type
    }
    productsArray.push(prodInArray);
})

/*```````````ORDERS ARRAY USING LOCAL STORAGE````````````````````````*/
/*
const cartProducts= [...JSON.parse(localStorage.getItem('CART-ITEMS'))] ;

    cartProducts.forEach(item => {
        const prodInArray ={
            productId : item.productId ,
            price : item.price,
            type : item.type
        };  
        productsArray.push(prodInArray);
        });

console.log(details); */

module.exports = {productsArray}
