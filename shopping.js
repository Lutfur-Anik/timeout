const displayLocalStore=()=>{
    const cart=getCart()
    for(product in cart){
        display(product)
    }
}

const add=()=>{
    const product=document.getElementById('order');
    const result=product.value;
   console.log(result)
  display(result)
  productCart(result)
  product.value=''
 
    
}
const display=name=>{
    const list=document.getElementById('list');
    const li=document.createElement('li');
    li.innerText=name;
    list.appendChild(li)
}

const getCart=()=>{
   const cart= localStorage.getItem('cart');
    
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart)
    }
    else{
        cartObj={};
    }
    return cartObj;
}
const productCart=name=>{
    const cart=getCart();
    if( cart[name]){
        cart[name]= cart[name]+1; 
    }
    else{
        cart[name]=1;
    }
    const add=JSON.stringify(cart)
 localStorage.setItem('cart',add)
 console.log(cart)
}
const orderProduct=()=>{
    document.getElementById('list').textContent=''
    localStorage.removeItem('cart')
}
displayLocalStore()