let carts=document.getElementsByClassName('add-cart');

for(let i=0; i < carts.length ;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(danhsach[i]);
        totalCost(danhsach[i])
    })
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart1 span').textContent = productNumbers;
    }
}
function cartNumbers(danhsach){
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers ){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart1 span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart1 span').textContent = 1;
    }
    setItems(danhsach);
}
function setItems(danhsach){
    let cartItems = localStorage.getItem('danhsachinCart');
    cartItems = JSON.parse(cartItems)
    console.log("my chose are",cartItems);
    if(cartItems != null){
        if(cartItems[danhsach.game] == undefined){
            cartItems = {
                ...cartItems,
                [danhsach.game] : danhsach
            }
        }
        cartItems[danhsach.game].inCart +=1;
    }else{
        danhsach.inCart=1;
        cartItems={
            [danhsach.game]:danhsach
        }
    }
    localStorage.setItem("danhsachinCart",JSON.stringify (cartItems));
}

function totalCost(danhsach){
    // console.log("the price",danhsach.price);\
    let cartCost=localStorage.getItem("totalCost")
    console.log("My cartCost",cartCost);
    if(cartCost !=null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + danhsach.price);
    }else{
        localStorage.setItem("totalCost",danhsach.price);
    }
  
}

function displayCart(){
    let cartItems = localStorage.getItem('danhsachinCart');
    cartItems = JSON.parse(cartItems)
    let danhsachContainer=document.querySelector('products')
    if(cartItems && danhsachContainer){
        danhsachContainer.innerHTML='';
        Object.valu(cartItems).map(item =>{
            danhsachContainer.innerHTML += `
            <div class="danhsach">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./img/${item.img}.jpg">
                <span>${item.game}</span>
            </div>
            <div class="price1">${item.price}</div>
            `
        });
    }

}

onLoadCartNumbers()
displayCart()