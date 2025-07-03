// Highlight active navbar link
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.href.includes(currentPath.split("/").pop())) {
      link.classList.add('active');
    }
  });
});


// Toggle navbar for small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
});

const products = [
  {
    id: 1,
    name: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A woman shoots her husband and never speaks again.",
    price: "$15.00",
    image: "selimg/the silent.jpg"
  },
  {
    id: 2,
    name: "Where the Crawdads Sing",
    author: "Delia Owens",
    description: "A mystery set in the marshes of North Carolina.",
    price: "$14.50",
    image: "selimg/Where the Crawdads Sing.jpg"
  },
  {
    id: 3,
    name: "Verity",
    author: "Colleen Hoover",
    description: "A struggling writer uncovers disturbing secrets.",
    price: "$12.99",
    image: "selimg/Verity.jpg"
  },
  {
    id: 4,
    name: "It Ends with Us",
    author: "Colleen Hoover",
    description: "A story about love, strength, and self-worth.",
    price: "$13.50",
    image: "selimg/It Ends with Us.jpg"
  },
  {
    id: 5,
    name: "The Midnight Library",
    author: "Matt Haig",
    description: "Infinite lives. Infinite choices. One library.",
    price: "$11.00",
    image: "selimg/The Midnight Library.jpg"
  },
  {
    id: 6,
    name: "The Book Thief",
    author: "Markus Zusak",
    description: "A girl steals books to escape war-torn Germany.",
    price: "$14.00",
    image: "selimg/The Book Thief.jpg"
  },
  {
    id: 7,
    name: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    description: "A human girl enters the fae world.",
    price: "$16.99",
    image: "selimg/A Court of Thorns and Roses.jpg"
  },
  {
    id: 8,
    name: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    description: "A reclusive Hollywood star tells her truth.",
    price: "$13.75",
    image: "selimg/The Seven Husbands of Evelyn Hugo.jpg"
  },
  {
    id: 9,
    name: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    description: "The rise and fall of a legendary rock band.",
    price: "$13.25",
    image: "selimg/Daisy Jones & The Six.jpg"
  },
  {
    id: 10,
    name: "Before We Were Strangers",
    author: "Renée Carlino",
    description: "A second chance at love, years later.",
    price: "$10.50",
    image: "selimg/Before We Were Strangers.jpg"
  },
  {
    id: 11,
    name: "Ugly Love",
    author: "Colleen Hoover",
    description: "An emotional, sexy tale of love and heartbreak.",
    price: "$12.00",
    image: "selimg/Ugly Love.jpg"
  },
  {
    id: 12,
    name: "Reminders of Him",
    author: "Colleen Hoover",
    description: "A mother’s fight to reunite with her daughter.",
    price: "$13.30",
    image: "selimg/Reminders of Him.jpg"
  },
  {
    id: 13,
    name: "The Night Circus",
    author: "Erin Morgenstern",
    description: "A magical competition and an enchanted circus.",
    price: "$11.75",
    image: "selimg/The Night Circus.jpg"
  },
  {
    id: 14,
    name: "Circe",
    author: "Madeline Miller",
    description: "The story of the witch of Aiaia.",
    price: "$15.50",
    image: "selimg/Circe.jpg"
  },
  {
    id: 15,
    name: "The Song of Achilles",
    author: "Madeline Miller",
    description: "A retelling of the Iliad through Patroclus' eyes.",
    price: "$12.40",
    image: "selimg/The Song of Achilles.jpg"
  },
  {
    id: 16,
    name: "The Alchemist",
    author: "Paulo Coelho",
    description: "A boy’s journey to find his personal legend.",
    price: "$9.99",
    image: "selimg/The Alchemist.jpg"
  },
  {
    id: 17,
    name: "Normal People",
    author: "Sally Rooney",
    description: "Two young people navigate love and life.",
    price: "$10.25",
    image: "selimg/Normal People.jpg"
  },
  {
    id: 18,
    name: "Eleanor Oliphant Is Completely Fine",
    author: "Gail Honeyman",
    description: "An unusual woman finds friendship and hope.",
    price: "$11.85",
    image: "selimg/Eleanor Oliphant Is Completely Fine.jpg"
  },
  {
    id: 19,
    name: "Beach Read",
    author: "Emily Henry",
    description: "Romance authors switch genres for a summer.",
    price: "$13.00",
    image: "selimg/Beach Read.jpg"
  },
  {
    id: 20,
    name: "People We Meet on Vacation",
    author: "Emily Henry",
    description: "Two best friends take one last trip together.",
    price: "$12.50",
    image: "selimg/People We Meet on Vacation.jpg"
  }
];

const productGrid = document.getElementById("productGrid");

products.map(product => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="Novel Image" />
    <h3>${product.name}</h3>
    <p><em>${product.author}</em></p>
    <p>${product.description}</p>
    <p class="price">${product.price}</p>
    <button onclick="previewProduct(${product.id})">Preview</button>
    <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
  `;
  productGrid.appendChild(card);
});

function previewProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return alert("Product not found!");

  const query = new URLSearchParams({
    name: product.name,
    author: product.author,
    description: product.description,
    price: product.price,
    image: product.image
  }).toString();

  window.location.href = `preview.html?${query}`;
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  const msg = document.getElementById("message");
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
    window.location.href = "cart.html";
  }, 3000);
}
