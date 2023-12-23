const ul=document.getElementById('productcart');
function addCard(title,price,image){
const cardpro=document.createElement('li');
cardpro.classList.add('card')
cardpro.innerHTML=`
<img src=${image} alt="" >
        <h3>${title}</h3>
     <div class="details"> 
         <h2> ₹ ${price}</h2>
         <button class="btn">Buy</button>
     </div>
     `
     ul.append(cardpro)
}

function fetchdata(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                json.map((val)=>{
                    console.log(val.image);
                    addCard(val.title,val.price,val.image)
                })
                
            })
}
fetchdata()

