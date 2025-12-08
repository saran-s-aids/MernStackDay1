const products = [
  {
    title: "iPhone 15 Pro",
    price: 1299,
    img: "iphone.jpg"
  },
  {
    title: "Sony WH-1000XM5",
    price: 349,
    img: "thalai.WEBP"
  },
  {
    title: "MacBook Air M3",
    price: 1899,
    img: "air.WEBP"
  },
  {
    title: "Samsung S24 Ultra",
    price: 1150,
    img: "ultra.WEBP"
  },
  {
    title: "Dell XPS Laptop",
    price: 1500,
    img: "dell.WEBP"
  },
  {
    title: "Xbox Gaming Console",
    price: 499,
    img: "https://m.media-amazon.com/images/I/61-jjE67uqL._AC_SL1500_.jpg"
  },
  {
    title: "JBL PartyBox 310",
    price: 489,
    img: "JBL.WEBP"
  },
  {
    title: "GoPro HERO12 Black",
    price: 549,
    img: "GOPRO.WEBP"
  },
  {
    title: "Samsung 55in 4K TV",
    price: 720,
    img: "SAMSUNG.WEBP"
  }
];

const list = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}
updateCartCount();

products.forEach((p, index) => {
  list.innerHTML += `
    <div class="product-card" onclick="openPopup(${index})">
      <img src="${p.img}">
      <h3>${p.title}</h3>
      <p class="price">$${p.price}</p>
      <button class="add-btn" onclick="event.stopPropagation(); addToCart(${index})">Add to Cart</button>
    </div>
  `;
});

let selected = 0;
function openPopup(i) {
  selected = i;
  document.getElementById("detailsImg").src = products[i].img;
  document.getElementById("detailsTitle").innerText = products[i].title;
  document.getElementById("detailsPrice").innerText = "$" + products[i].price;
  document.getElementById("detailsPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("detailsPopup").style.display = "none";
}

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart!");
}

function addFromPopup() {
  addToCart(selected);
  closePopup();
}

function scrollToProducts() {
  list.scrollIntoView({ behavior: "smooth" });
}
