# 📚 Book Deem Website

## Overview

Book Deem is a responsive online bookstore website developed as a university project. The website allows users to browse books, search by category, manage a shopping cart, and contact the bookstore through a contact form. PHP and MySQL are used to store contact messages, while JavaScript provides interactive features.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL

## Features

- 🏠 Home page
- 📚 Books page
- ℹ️ About page
- 📞 Contact page
- 📱 Responsive design
- 🧭 Navigation menu
- 📖 Grid-based book layout

## JavaScript Functionalities

### Book Filtering
- Filter books by category.
- Search books by title.

### Shopping Cart
- Add books to the cart.
- Display selected books.
- Calculate the total price dynamically.

### Contact Form Validation
- Validate required fields.
- Validate email format.
- Display error messages for invalid input.

## Backend Features

The backend is built using PHP and MySQL.

- Store contact form submissions in a MySQL database.
- Validate submitted data before saving.
- Display stored messages through an admin page (`view_messages.php`).

## Project Structure

```
book-deem-website/
│── css/
│── js/
│── images/
│── home.php
│── books.php
│── about.php
│── contact.php
│── view_messages.php
│── db_connect.php
│── README.md
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bookstore-website.git
```

2. Move the project folder to the **htdocs** directory in XAMPP.

3. Start **Apache** and **MySQL** from the XAMPP Control Panel.

4. Import the provided SQL database into phpMyAdmin.

5. Open your browser and visit:

```
http://localhost/bookstore-website/
```

## Screenshots

### Home Page

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/b811794d-815c-4f54-b65e-674a91976e93" />


### Books Page

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/f03714dc-59cd-4ded-932c-cbfefc20503b" />



## Future Improvements

- User authentication
- Book categories
- Wishlist
- Online ordering
- Payment integration
- User accounts
- Admin dashboard

## Author

Developed as a university Software Development project.
