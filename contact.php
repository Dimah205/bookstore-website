<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Book Deem - Contact</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <nav>
    <div class="logo">📚 Book Haven</div>
    <span class="menu-btn" onclick="toggleMenu()">☰</span>

    <ul id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="books.html">Books</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.php">Contact</a></li>
    </ul>
  </nav>
</header>

<div class="container">
  <h2>Contact Us</h2>
  <p>Fill the form below to send us a message.</p>

  <form id="contactForm" method="POST" action="contact_process.php">
    
    <label>Name:</label>
    <input type="text" name="name" id="name" placeholder="Enter your name">

    <label>Email:</label>
    <input type="text" name="email" id="email" placeholder="Enter your email">

    <label>Message:</label>
    <textarea name="message" id="message" rows="5" placeholder="Write your message"></textarea>

    <button type="submit">Send Message</button>
  </form>

</div>

<footer>
  <p>© 2026 Book Haven | All Rights Reserved</p>
</footer>

<script src="script.js"></script>
</body>
</html>