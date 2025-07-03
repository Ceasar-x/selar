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

// Scroll to top button
const scrollBtn = document.getElementById('scrollUpBtn');

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Toggle navbar for small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('show');
});


// COURSES
const featuresData = [
  {
    icon: "selimg/digitalprod.PNG",
    title: "Digital Products",
    description: "Sell any and every kind of digital product, from content packs to designs to bundles and more without stress."
  },
  {
    icon: "selimg/icon-ebooks.PNG",
    title: "Ebooks",
    description: "Selar is the best platform to sell your ebooks both downloadable and non-downloadable in any format."
  },
  {
    icon: "selimg/courses.PNG",
    title: "Courses & Memberships",
    description: "Host your courses with unlimited videos, storage, and students. Content protection included."
  },
  {
    icon: "selimg/e tickets.PNG",
    title: "Event Tickets & Training",
    description: "Sell tickets for all kinds of events and access to masterclasses, workshops, training, webinars, and more."
  },
  {
    icon: "selimg/stars.PNG",
    title: "Services",
    description: "Sell any kind of service, from coaching to consulting, to design and more."
  },
  {
    icon: "selimg/physical.PNG",
    title: "Physical Goods",
    description: "Use Selar to sell your physical products from clothing to books to electronics and more."
  }
];

const featuresContainer = document.getElementById("features-container");

featuresData.map(feature => {
  const card = document.createElement("div");
  card.className = "feature-card";
  card.innerHTML = `
    <img src="${feature.icon}" alt="${feature.title}"> 
    <div class="feature-content">
      <h4>${feature.title}</h4>
      <p>${feature.description}</p>
    </div>
  `;
  featuresContainer.appendChild(card);
});

// TOOLSGRID
const toolsData = [
  {
    icon: 'selimg/aff.PNG',
    title: 'Affiliates',
    description: 'Set up your own affiliate marketing system, and give a commission for anyone that facilitates a sale for your store.',
    link: '#'
  },
  {
    icon: 'selimg/sales.PNG',
    title: 'Sales Page',
    description: 'Create custom sales/landing pages for your products. Descriptive sales pages drive more conversions.',
    link: '#'
  },
  {
    icon: 'selimg/auto.PNG',
    title: 'Automated Follow–ups',
    description: 'Never miss a prospective buyer with Selar’s automated follow ups. Proven to drive conversions by at least 30%.',
    link: '#'
  }
];

const toolsGrid = document.getElementById('toolsGrid');

toolsData.forEach(tool => {
  const card = document.createElement('div');
  card.className = 'tool-card';
  card.innerHTML = `
    <img src="${tool.icon}" alt="${tool.title}" style="height: 40px;">
    <h3>${tool.title}</h3>
    <p>${tool.description}</p>
    <a href="${tool.link}">Learn more</a>
  `;
  toolsGrid.appendChild(card);
});



// CAROSELL


const testimonials = [
  {
    img: "selimg/steve.png",
    name: "Steve Harris",
    role: "Business Accelerator & Coach",
    text: "I’ve used quite a number of e–commerce platforms, but Selar’s amazing! They’re truly interested in your growth and are constantly listening to the customers and tweaking and fine tuning their app. They do the heavy lifting. Totally recommend them!"
  },
  {
    img: "selimg/user1.png",
    name: "Amaka Johnson",
    role: "Course Creator",
    text: "I launched my first digital course with Selar and it was seamless. My audience was able to pay from anywhere."
  },
  {
    img: "selimg/user2.png",
    name: "Kelvin Bassey",
    role: "Online Consultant",
    text: "The ease of integration and variety of payment gateways makes Selar a go-to platform for me and my clients."
  }
];

let current = 0;

const container = document.getElementById("testimonial-container");
const dots = document.getElementById("dots");

function renderSlides() {
  container.innerHTML = '';
  dots.innerHTML = '';

  testimonials.forEach((t, index) => {
    const slide = document.createElement("div");
    slide.className = "testimonial-slide";
    if (index === current) slide.classList.add("active");

    slide.innerHTML = `
      <img src="${t.img}" alt="${t.name}">
      <div class="text">
        <p>${t.text}</p>
        <h4>${t.name}</h4>
        <small>${t.role}</small>
      </div>
    `;
    container.appendChild(slide);

    const dot = document.createElement("span");
    dot.className = index === current ? "active" : "";
    dot.onclick = () => {
      current = index;
      renderSlides();
    };
    dots.appendChild(dot);
  });
}

document.querySelector(".nav.left").onclick = () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  renderSlides();
};

document.querySelector(".nav.right").onclick = () => {
  current = (current + 1) % testimonials.length;
  renderSlides();
};

renderSlides();

