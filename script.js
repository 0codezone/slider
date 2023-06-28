// Get necessary elements from the DOM
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const customerImg = document.querySelector("#customer-img");
const customerName = document.querySelector(".customer-name");
const customerText = document.querySelector("#customer-text");

// Array of customer data (images, names, and reviews)
const customers = [
  {
    img: "./images/0.jpg",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet,  nobis numquam impedit, laudantium repudiandae assumenda suscipit?",
  },
  {
    img: "./images/1.jpg",
    name: "Mon Doe",
    review:
      "Lorem ipsum dolmensectetur adipisicing elit. Libero quos moores nobis numquam impedit, laudantium repudiandae assumenda suscipit?",
  },
  {
    img: "./images/2.jpg",
    name: "Pone Doe",
    review:
      "Lorem ipsum do consectetur adipisicing elit. Libero quos moo dolores nobis numquam impedit, laudantium repudiandae assumenda suscipit?",
  },
  {
    img: "./images/3.jpg",
    name: "Lone Doe",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quosol suscipit?",
  },
  // Add more customer data objects here...
];

let currentCustomer = 0;

// Function to update the displayed customer data
function updateCustomer() {
  const { img, name, review } = customers[currentCustomer];
  customerImg.src = img;
  customerName.textContent = name;
  customerText.textContent = review;
}

// Event listener for the previous button
prevBtn.addEventListener("click", () => {
  currentCustomer--;
  if (currentCustomer < 0) {
    currentCustomer = customers.length - 1;
  }
  updateCustomer();
});

// Event listener for the next button
nextBtn.addEventListener("click", () => {
  currentCustomer++;
  if (currentCustomer === customers.length) {
    currentCustomer = 0;
  }
  updateCustomer();
});

// Initial data update
updateCustomer();
