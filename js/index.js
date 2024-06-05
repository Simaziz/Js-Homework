import { cardComponent } from "../component/cardComponent.js";
import { products } from "../data/product.js";

let renderArea = document.querySelector("#card-area");

products.map((product) =>{
    renderArea.innerHTML += cardComponent(product);
    console.log(product);
})