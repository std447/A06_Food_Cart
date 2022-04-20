// import { __list } from './data.js';

const itemlist = [
  {
    id: 1,
    rname: 'One Way Restaurant',
    rating: '3.9',
    details: 'Sev Tamatar Sabji',
    price: 'Rs. 100 for 2',
    offer: '50% off',
    dtime: '39 min',
    src: '01',
  },
  {
    id: 2,
    rname: 'One Way Restaurant',
    rating: '3.9',
    details: 'Sev Tamatar Sabji',
    price: 'Rs. 100 for 2',
    offer: '50% off',
    dtime: '39 min',
    src: '02',
  },
];

const foodCart = document.getElementById("food-cart");

for (let i = 0; i < itemlist.length; i++) {
  const { src, offer, dtime, rname, rating, details, price } = itemlist[i];

  const carddiv = document.createElement("div");
  carddiv.classname = "card-cont";

  const star = document.createElement("span");
  star.className = "star";
  star.innerHTML = `<svg fill="#FFFFFF" width="0.4em" height="0.4em"
        viewBox="0 0 20 20" class="icon-star">
    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
  </svg>`;

  carddiv.innerhtml = `<div class="img-cont" >
      <img src="https://raw.githubusercontent.com/std447/A06_Food_Cart/foodsection/assets/images/fooditems/food${src}.avif" />
      <div class="promoted">Promoted</div>
      <div class="offer-percent">${offer}</div>
      <div class="delivery-time">${dtime}</div>
    </div>
    
    <div class="rest-rate">
      <div class="rname">${rname}</div>
      <div class="rating">${rating} ${star}</div>
    </div>
    <div class="det-price">
      <div class="det">${details}</div>
      <div class="price grey-text">${price} for one</div>
    </div>
    
    <div class="hr"><hr /></div>

    <div class="footnote">
      <img src="assets\images\max-safety.png" id="max-safey" />
      <div class="grey-text">
        Follows all Max Safety measures to ensure your food is safe
      </div>
      <img src="assets\images\icon-increase.png" id="img-graph" />
    </div>`;

  foodCart.appendChild(carddiv);
}
