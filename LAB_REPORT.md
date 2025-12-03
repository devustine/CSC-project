# LABORATORY REPORT

## Fashion House Website Development Project

---

### Course Information

- **Course Name:** [Your Course Name]
- **Assignment Title:** Fashion House Website Development
- **Submitted By:** [Your Name - Group Leader]
- **Submission Date:** [Current Date]
- **Instructor:** [Lecturer's Name]

**Project Repository:** [https://github.com/devustine/CSC-project](https://github.com/devustine/CSC-project)

**Live Project:** [https://miva-csc-project.vercel.app/](https://miva-csc-project.vercel.app/)

---

## 1. INTRODUCTION

### 1.1 Objective

The primary objectives of this laboratory assignment were to develop a multi-page website for a fashion house with the following requirements:

1. Agree on a name for the fashion house as a group
2. Display products that the fashion house offers
3. Ensure all pages have the same link structure
4. Display photos of each group member as the Board of Trustees
5. Include a page for inquiries and appointment bookings
6. Include a page to display upcoming events
7. Implement a marquee on all pages displaying upcoming events or other info
8. Apply JavaScript features of choice on each page
9. Use an external CSS file to manage the website's styling
10. Show the structure of the website using the Document Object Model (DOM)

### 1.2 Background Theory

Modern web development relies on three core technologies: HTML5 for structure, CSS3 for presentation, and JavaScript for behavior. HTML5 provides semantic elements that improve accessibility and SEO. CSS3 enables responsive design through media queries, Grid, and Flexbox. JavaScript adds interactivity and dynamic content manipulation through the Document Object Model (DOM), which represents the page structure as a tree of objects.

---

## 2. METHODOLOGY

### 2.1 Project Planning Phase

We selected "Fashion Store" as our fashion house name, focusing on luxury evening dresses and formal wear. The website structure was designed with 6 pages: Homepage, Products, Product Details, About, Contact, and Events. All pages share consistent header and footer components for seamless navigation.

### 2.2 Development Approach

**HTML Structure:** We used semantic HTML5 elements (header, nav, section, footer) with proper document structure and accessible forms.

**CSS Styling Strategy:** We developed two external stylesheets: `style.css` for main styling with CSS custom properties, and `responsive.css` for media queries ensuring cross-device compatibility.

**JavaScript Functionality:** We implemented mobile navigation toggle, shopping cart with localStorage persistence, and form interactions to enhance user experience.

**DOM Visualization:** We created a dedicated visualization on the README.md file to render the website's DOM tree structure.

---

## 3. IMPLEMENTATION

### 3.1 Page Structure

**Homepage (index.html):** Features a hero section, 3 featured products, call-to-action section, and gallery with 6 product images.

**Products Page (products.html):** Displays complete catalog with 6 products in a responsive grid, each showing image, name, category, pricing, and add-to-cart button.

**Product Details Page (product-details.html):** Provides detailed product view with main image, thumbnails, specifications, size selection, quantity selector, and add-to-cart functionality.

**About Page (about.html):** Contains company story, mission and values, and Board of Trustees section displaying all 12 group members with photos in card format.

**Contact Page (contact.html):** Includes contact information, contact form with validation, and appointment booking system with date/time pickers and appointment type selection.

**Events Page (events.html):** Displays 3 upcoming events with images, date badges, descriptions, time/location details, and registration buttons, plus newsletter subscription.

### 3.2 Navigation Structure

All pages implement identical navigation structure:

**Header:** Top header bar with marquee element, navigation bar with logo, main menu (Home, Products, About, Contact, Events), action icons (search, shopping cart with count badge), and mobile hamburger menu toggle.

**Footer:** Four-column layout with company information, quick links, customer service links, contact information, social media links, and copyright information.

### 3.3 Marquee Implementation

A marquee element appears in the top header of every page, displaying: "Special Offer: 50% Off on all products | Free Shipping | 100% Satisfaction Guarantee". The marquee scrolls continuously and is styled to match the website's color scheme.

### 3.4 CSS Implementation

**Main Stylesheet (style.css):** Contains CSS custom properties for colors, fonts, and spacing; comprehensive styling for all elements; typography using Google Fonts; button styles and hover effects; form styling; Grid and Flexbox layouts; and animation effects.

**Responsive Stylesheet (responsive.css):** Includes media queries for different screen sizes, mobile-first design approach, and adjusted layouts for tablets and mobile devices.

### 3.5 JavaScript Features

**Mobile Navigation Toggle:** Event listener on hamburger menu button toggles active class on navigation menu for mobile-friendly experience.

**Shopping Cart Functionality:** localStorage implementation for cart count persistence. Event listeners on all "Add to Cart" buttons update cart count in real-time, with count badge displaying in header across all pages.

**Form Interactions:** Form validation for required fields and interactive elements with user feedback.

---

## 4. TESTING AND RESULTS

### 4.1 Navigation Testing

All pages verified for consistent header and footer structure. Navigation links function correctly across all pages. Mobile hamburger menu works properly on mobile devices. **Result: ✓ Passed**

### 4.2 Product Showcase Testing

Homepage displays 3 featured products correctly. Products page shows all 6 products in grid layout. Product details page loads with all information. **Result: ✓ Passed**

### 4.3 Board of Trustees Testing

All 12 group members display correctly with photos in responsive grid layout. All names and card formatting are consistent. **Result: ✓ Passed**

### 4.4 Contact and Appointment Testing

Contact form validation works for required fields. Appointment booking form functions correctly with date picker, time selection, and appointment type dropdown. **Result: ✓ Passed**

### 4.5 Events Page Testing

All 3 events display correctly with complete information. Newsletter subscription form functions properly. **Result: ✓ Passed**

### 4.6 JavaScript Functionality Testing

Shopping cart count updates correctly and persists across page navigation using localStorage. Mobile menu toggle works on all devices. **Result: ✓ Passed**

### 4.7 Responsive Design Testing

Website tested on desktop (1920x1080), tablet (768px), and mobile (375px) devices. All layouts adapt correctly with proper spacing and readability. **Result: ✓ Passed**

---

## 5. OBSERVATIONS AND ANALYSIS

### 5.1 Design Implementation

Consistent navigation structure significantly improves usability. External CSS files simplify maintenance and ensure styling consistency. CSS custom properties enable easy theme modifications. Responsive design ensures accessibility across all devices.

### 5.2 JavaScript Functionality

localStorage provides persistent cart functionality without backend infrastructure. Event delegation simplifies button event handling. Mobile navigation toggle significantly improves mobile user experience.

### 5.3 User Experience

Clear navigation structure helps users find information efficiently. Product showcase provides comprehensive product information. Contact and appointment forms facilitate customer engagement. Events page keeps users informed about upcoming activities.

---

## 6. CHALLENGES FACED

### Challenge 1: Consistent Navigation Across Multiple Pages

**Problem:** Ensuring identical header and footer structure across all 6 pages.

**Solution:** Created template structure for header and footer, replicated across all pages with identical class names and structure.

### Challenge 2: Shopping Cart Persistence

**Problem:** Maintaining cart count across page navigation without backend database.

**Solution:** Implemented localStorage API to store cart count, ensuring persistence across page navigation and browser sessions.

### Challenge 3: Responsive Design Implementation

**Problem:** Ensuring correct display on various screen sizes from mobile to desktop.

**Solution:** Created separate responsive.css file with comprehensive media queries, flexible layouts using CSS Grid and Flexbox, and mobile-first design principles.

### Challenge 4: DOM Structure Visualization

**Problem:** Creating accurate visual representation of website's DOM structure.

**Solution:** Developed custom HTML page using HTML5 Canvas API with tree rendering algorithm that calculates node positions and draws connections with color coding.

---

## 7. CONCLUSION

The fashion house website project was completed successfully, meeting all 10 specified requirements. The website includes 6 pages with consistent navigation, comprehensive product showcase, Board of Trustees display, contact and appointment booking functionality, events page, marquee implementation, JavaScript features, external CSS styling, and DOM structure visualization.

### Key Learning Outcomes:

- Practical application of HTML5 semantic elements
- CSS3 styling with custom properties and responsive design
- JavaScript implementation for interactive features
- Understanding of DOM structure and manipulation
- Web development best practices and code organization
- User experience design principles

### Project Achievements:

- Successfully implemented all required features
- Created professional, responsive website
- Demonstrated understanding of front-end web technologies
- Applied modern web development practices
- Delivered functional, user-friendly website

The complete source code is available on GitHub at [https://github.com/devustine/CSC-project](https://github.com/devustine/CSC-project), and the live website can be accessed at [https://miva-csc-project.vercel.app/](https://miva-csc-project.vercel.app/).

---

## 8. REFERENCES

1. HTML5 Specification - W3C Recommendations
2. CSS3 Documentation - MDN Web Docs
3. JavaScript Documentation - MDN Web Docs
4. Responsive Web Design Principles - W3Schools
5. DOM API Documentation - MDN Web Docs
6. Course Lecture Notes on Web Development
7. Course Materials on HTML, CSS, and JavaScript

---

**Declaration:**

I hereby declare that this work is original and has been completed by our group with guidance from course materials and lectures. All group members have contributed to the development of this project.
