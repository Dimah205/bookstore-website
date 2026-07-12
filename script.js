// ============================
// NAV MENU (Responsive)
// ============================
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ============================
// BOOK LIST DATA (Dynamic Content)
// ============================
const books = [
  { title: "The Great Gatsby", category: "Fiction", price: 15 },
  { title: "Atomic Habits", category: "Self-Help", price: 20 },
  { title: "Clean Code", category: "Programming", price: 30 },
  { title: "Harry Potter", category: "Fantasy", price: 18 },
  { title: "The Pragmatic Programmer", category: "Programming", price: 35 },
  { title: "Rich Dad Poor Dad", category: "Business", price: 22 }
];

// ============================
// DISPLAY BOOKS
// ============================
function displayBooks(bookList) {
  const container = document.getElementById("booksContainer");
  if (!container) return;

  container.innerHTML = "";

  bookList.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <h3>${book.title}</h3>
        <p><b>Category:</b> ${book.category}</p>
        <p><b>Price:</b> $${book.price}</p>
        <button onclick="addToCart('${book.title}', ${book.price})">Add to Cart</button>
      </div>
    `;
  });
}

// ============================
// FILTER BOOKS (JavaScript Functionality 1)
// ============================
function filterBooks() {
  const category = document.getElementById("categoryFilter").value;
  const searchText = document.getElementById("searchBox").value.toLowerCase();

  let filtered = books.filter(book =>
    (category === "All" || book.category === category) &&
    book.title.toLowerCase().includes(searchText)
  );

  displayBooks(filtered);
}

// ============================
// CART SYSTEM (JavaScript Functionality 2)
// ============================
let cart = [];

function addToCart(title, price) {
  cart.push({ title, price });
  alert(title + " added to cart!");
  updateCart();
}

function updateCart() {
  const cartBox = document.getElementById("cartBox");
  if (!cartBox) return;

  let total = 0;
  cartBox.innerHTML = "<h3>Cart Items:</h3>";

  cart.forEach(item => {
    cartBox.innerHTML += `<p>${item.title} - $${item.price}</p>`;
    total += item.price;
  });

  cartBox.innerHTML += `<hr><p><b>Total:</b> $${total}</p>`;
}

// ============================
// CONTACT FORM VALIDATION (JavaScript Functionality 3)
// ============================
function validateForm(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let errorBox = document.getElementById("errorBox");
  errorBox.innerHTML = "";

  if (name === "" || email === "" || message === "") {
    errorBox.innerHTML = "❌ All fields are required!";
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    errorBox.innerHTML = "❌ Please enter a valid email!";
    return false;
  }

  alert("✅ Message sent successfully!");
  document.getElementById("contactForm").reset();
  return true;
}

// Auto-load books on books.html
window.onload = function () {
  displayBooks(books);
};