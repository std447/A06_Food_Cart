import { itemList } from './data.js';


const foodCart = document.getElementById("food-cart");

//foodCart.innerHTML='hare krishna'

for (let item = 0;item < itemList.length;item++) {

  const { rname, details} = itemList[item];

    // Randomly generate price of Product
    let price = Math.ceil((Math.random()*5));
    price*=50;
    
    // Randomly select Quantity of Product ex. "Rs. 100 for two" 
    const num1 = ["one", "two", "three"];
    let _i = Math.floor(Math.random()*num1.length);


    // Delivery time between 30 and 60 min
    let dtime = Math.floor((Math.random()*30) + 30);

    // offer percent between 10% to 50%
    let offer = Math.floor((Math.random()*5) + 1) *10; 
    // above code generates rendom number between 1&5 and output is multiplied by 10 output=[10||20||30||40||50]

    //rating generates random number between 3.0 and 5.0
    let rating = ((Math.floor((Math.random()*20) + 30))/10).toFixed(1);

    let src = `../images/fooditems/food${(item<9)? '0'+(item+1):(item+1) }.avif`
    let src1 = `"https://raw.githubusercontent.com/std447/A06_Food_Cart/foodsection/assets/images/fooditems/food${(item<9)? '0'+(item+1):(item+1) }.avif"`;
  
    
  
  const cardBox = document.createElement("div");
  cardBox.className = "food-cart-box"

  // const star = document.createElement("span");
  // star.className = "star";
  const star = `<svg fill="#FFFFFF" width="0.4em" height="0.4em"
        viewBox="0 0 20 20" class="icon-star">
    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
  </svg>`;

  cardBox.innerHTML=`
    <div class="img-cont" >
      <img src= ${src1} />
      <div class="promoted">Promoted</div>
      <div class="offer-percent">${offer}% Off</div>
      <div class="delivery-time">${dtime} min</div>
    </div>

    <div class="rname-rate">
      <div class="rname">${rname}</div>
      <div class="rating">${rating}
       <span id="star"> ${star} </span>
      </div>
    </div>

    <div class="det-price">
      <div class="det">${details}</div>
      <div class="price grey-text">₹${price} for ${num1[_i]}</div>
    </div>

    <div class="hr"><hr /></div>

    <div class="footnote">
       <img src="https://raw.githubusercontent.com/std447/A06_Food_Cart/foodsection/assets/images/max-safety.png" class="max-safety" />
       <div class="grey-text">
         Follows all Max Safety measures to ensure your food is safe
       </div>
       <img src="https://raw.githubusercontent.com/std447/A06_Food_Cart/foodsection/assets/images/icon-increase.png" class="img-graph" />
     </div>`;

  

  foodCart.appendChild(cardBox);

}



// for (let i = 0; i < itemlist.length; i++) {
//   const { src, offer, dtime, rname, rating, details, price } = itemlist[i];

//   const carddiv = document.createElement("div");
//   carddiv.classname = "card-cont";



//   carddiv.innerhtml = `<div class="img-cont" >
//       <img src="https://raw.githubusercontent.com/std447/A06_Food_Cart/foodsection/assets/images/fooditems/food${src}.avif" />
//       <div class="promoted">Promoted</div>
//       <div class="offer-percent">${offer}</div>
//       <div class="delivery-time">${dtime}</div>
//     </div>
    
//     <div class="rest-rate">
//       <div class="rname">${rname}</div>
//       <div class="rating">${rating} ${star}</div>
//     </div>
//     <div class="det-price">
//       <div class="det">${details}</div>
//       <div class="price grey-text">${price} for one</div>
//     </div>
    
//     <div class="hr"><hr /></div>

//     <div class="footnote">
//       <img src="assets\images\max-safety.png" id="max-safey" />
//       <div class="grey-text">
//         Follows all Max Safety measures to ensure your food is safe
//       </div>
//       <img src="assets\images\icon-increase.png" id="img-graph" />
//     </div>`;

//   foodCart.appendChild(carddiv);
// }
