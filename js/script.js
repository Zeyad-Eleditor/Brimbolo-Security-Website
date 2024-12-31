


function validateform(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if(name===''||email===''||message===''){
        alert("please vallied form")
        return false
    }
     if(email.indexof('@')===''){
        alert("please vallied @")
        return false
     }
     return true
}

const products = [
    { id: 1, name: "Product 1", description: "This is the description for Product 1. It's a high-quality item that meets your needs.", price: "100 EGP", image: "images/pexels-jaralol-17527826.jpg" },
    { id: 2, name: "Product 2", description: "Product 2 offers excellent value for money. Ideal for everyday use.", price: "150 EGP", image: "images/pexels-jakubzerdzicki-29291981.jpg" },
    { id: 3, name: "Product 3", description: "Product 3 is designed for durability and long-lasting performance, suitable for all types of users.", price: "200 EGP", image: "images/pexels-agk42-5589597.jpg" },
    
  ];


  
const productList = document.getElementById("product-list");
products.forEach(product => {
  const col = document.createElement("div");
  col.classList.add("col-md-4", "mb-4");

  col.innerHTML = `
    <div class="card h-100 shadow-sm border-light rounded">
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text"><strong>${product.price}</strong></p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  `;
  productList.appendChild(col);
});

