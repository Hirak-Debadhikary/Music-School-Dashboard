const slides = [
  "https://img.freepik.com/free-vector/promotion-banner-package-milk-chocolate-with-hazelnuts-isolated-brown-background_1441-2198.jpg",
  "https://img.pikbest.com/origin/05/84/45/103pIkbEsTaI4.jpg!w700wp",
  "https://img.freepik.com/free-psd/flat-design-world-chocolate-day-template_23-2150426213.jpg?w=2000",
  "https://img.freepik.com/free-psd/world-chocolate-day-landing-page-template_23-2150430300.jpg?w=2000",
  "https://img.freepik.com/premium-psd/slim-chocolate-boxes-mockup_1332-22827.jpg?w=2000",
];

let currentIndex = 0;

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
};

const goToSlide = (slideIndex) => {
  currentIndex = slideIndex;
  updateCarousel();
};

const updateCarousel = () => {
  const carouselImage = document.getElementById("carousel-image");
  carouselImage.style.backgroundImage = `url(${slides[currentIndex]})`;

  const dotsContainer = document.querySelector(".dot-container");
  dotsContainer.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndex) {
      dot.innerHTML = "&#9679;";
    } else {
      dot.innerHTML = "&#9675;";
    }
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
};

const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", prevSlide);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextSlide);

updateCarousel();

// slide every 3 seconds
setInterval(nextSlide, 3000);

// Custom Chocolate Pack of 8
const products = [
  {
    id: 1,
    name: "Chocolate 1",
    price: 2.5,
    imageSrc:
      "https://p4.wallpaperbetter.com/wallpaper/206/987/812/chocolate-nuts-chips-cocoa-hd-wallpaper-preview.jpg",
  },
  {
    id: 2,
    name: "Chocolate 2",
    price: 3.0,
    imageSrc:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Chocolate 3",
    price: 2.75,
    imageSrc:
      "https://images.unsplash.com/photo-1623000850264-08be785877bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  },
  {
    id: 4,
    name: "Chocolate 4",
    price: 2.25,
    imageSrc:
      "https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 5,
    name: "Chocolate 5",
    price: 3.5,
    imageSrc:
      "https://images.unsplash.com/photo-1571091799989-e88304d6aed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 6,
    name: "Chocolate 6",
    price: 2.0,
    imageSrc:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 7,
    name: "Chocolate 7",
    price: 2.95,
    imageSrc:
      "https://images.unsplash.com/photo-1589385973461-eaa9b0ae2830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 8,
    name: "Chocolate 8",
    price: 3.2,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1673138930194-7c0450505a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 9,
    name: "Chocolate 9",
    price: 2.45,
    imageSrc:
      "https://images.unsplash.com/photo-1504855101244-34edfbd4b861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 10,
    name: "Chocolate 10",
    price: 3.8,
    imageSrc:
      "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 11,
    name: "Chocolate 11",
    price: 2.15,
    imageSrc:
      "https://images.unsplash.com/photo-1635491201370-1abd16f0cde0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 12,
    name: "Chocolate 12",
    price: 3.1,
    imageSrc:
      "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 13,
    name: "Chocolate 13",
    price: 2.6,
    imageSrc:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 14,
    name: "Chocolate 14",
    price: 3.5,
    imageSrc:
      "https://images.unsplash.com/photo-1545396635-f4865ca1448b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 15,
    name: "Chocolate 15",
    price: 2.75,
    imageSrc:
      "https://images.unsplash.com/photo-1589750580009-f80d7f626c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 16,
    name: "Chocolate 16",
    price: 2.95,
    imageSrc:
      "https://images.unsplash.com/photo-1582042837973-a13faf7e0eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 17,
    name: "Chocolate 17",
    price: 2.25,
    imageSrc:
      "https://images.unsplash.com/photo-1523035274455-b2e5c6d5c2e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 18,
    name: "Chocolate 18",
    price: 3.2,
    imageSrc:
      "https://images.unsplash.com/photo-1612799897476-e6e6e663f337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 19,
    name: "Chocolate 19",
    price: 2.45,
    imageSrc:
      "https://images.unsplash.com/photo-1606312618685-7cc798d5a2d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60",
  },
  {
    id: 20,
    name: "Chocolate 20",
    price: 3.8,
    imageSrc:
      "https://images.unsplash.com/photo-1621424093521-eec9a43df158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjaG9jb2xhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60",
  },
];

const maxChocolates = 8;

// Retrieve selected chocolates from localStorage
let selectedChocolates =
  JSON.parse(localStorage.getItem("selectedChocolates")) || [];

const updateTotalPrice = () => {
  const totalPriceElement = document.querySelector(".total-price");
  const totalPrice = selectedChocolates.reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );
  totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
};

const createProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.classList.add("product-image");
  productImage.src = product.imageSrc;
  productImage.alt = product.name;

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const productName = document.createElement("div");
  productName.classList.add("product-name");
  productName.textContent = product.name;

  const productPrice = document.createElement("div");
  productPrice.classList.add("product-price");
  productPrice.textContent = `$${product.price.toFixed(2)}`;

  const addButton = document.createElement("button");
  addButton.classList.add("add-to-cart-button");
  addButton.textContent = "Add To Cart";

  addButton.addEventListener("click", () => {
    // Calculate the current total quantity of chocolates in the cart
    const currentTotalQuantity = selectedChocolates.reduce(
      (total, item) => total + item.quantity,
      0
    );

    if (currentTotalQuantity + 1 <= maxChocolates) {
      // Check if the product is already in the cart
      const existingItem = selectedChocolates.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // If the product is already in the cart, increment the quantity
        existingItem.quantity++;
      } else {
        // Otherwise, add a new item to the cart
        selectedChocolates.push({ product, quantity: 1 });
      }

      // Save the updated cart to localStorage
      localStorage.setItem(
        "selectedChocolates",
        JSON.stringify(selectedChocolates)
      );

      updateTotalPrice();
    } else {
      alert("Cannot add more than 8 chocolates. Refresh the page!!");
    }
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-from-cart-button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", () => {
    const existingItemIndex = selectedChocolates.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex !== -1) {
      const existingItem = selectedChocolates[existingItemIndex];

      if (existingItem.quantity > 1) {
        // If the quantity is greater than 1, decrement it
        existingItem.quantity--;
      } else {
        // If the quantity is 1, remove the item from the cart
        selectedChocolates.splice(existingItemIndex, 1);
      }

      // Save the updated cart to localStorage
      localStorage.setItem(
        "selectedChocolates",
        JSON.stringify(selectedChocolates)
      );

      updateTotalPrice();
    }
  });

  productDetails.appendChild(productName);
  productDetails.appendChild(productPrice);
  productDetails.appendChild(
    selectedChocolates.some((item) => item.product.id === product.id)
      ? removeButton
      : addButton
  );

  productCard.appendChild(productImage);
  productCard.appendChild(productDetails);

  return productCard;
};

const productList = document.querySelector(".product-grid");
products.forEach((product) => {
  const productCard = createProductCard(product);
  productList.appendChild(productCard);
});

updateTotalPrice();
