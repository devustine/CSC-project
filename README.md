# Fashion Store Website

A modern, responsive e-commerce website for a luxury fashion store specializing in evening dresses and formal wear. This project features a clean, elegant design with a fully functional shopping cart system, product catalog, and comprehensive customer engagement pages.

## Project Overview

The Fashion Store website is a complete e-commerce solution built with HTML5, CSS3, and JavaScript. It showcases a beautiful collection of luxury evening dresses with an intuitive user interface that provides seamless navigation across multiple pages. The website includes a dynamic shopping cart with real-time count updates, product filtering capabilities, and responsive design that adapts to all device sizes. Key features include a hero section with compelling call-to-action elements, a comprehensive product gallery, team member showcase, event listings, and a detailed contact page with appointment booking functionality. The design emphasizes user experience with smooth transitions, modern typography, and a cohesive color scheme that reflects the luxury brand identity.

## DOM Structure

```
document (root)
│
├── html
│   │
│   ├── head
│   │   ├── meta (charset)
│   │   ├── meta (viewport)
│   │   ├── title
│   │   ├── link (style.css)
│   │   ├── link (responsive.css)
│   │   └── link (Font Awesome)
│   │
│   └── body
│       │
│       ├── header
│       │   ├── top-header
│       │   │   └── container
│       │   │       └── marquee
│       │   │
│       │   └── navbar
│       │       └── container
│       │           └── nav
│       │               ├── navbar-logo
│       │               │   └── img
│       │               │
│       │               ├── navbar-menu
│       │               │   └── ul
│       │               │       ├── li → a (Home)
│       │               │       ├── li → a (Products)
│       │               │       ├── li → a (About)
│       │               │       ├── li → a (Contact)
│       │               │       └── li → a (Events)
│       │               │
│       │               └── navbar-actions
│       │                   ├── navbar-icon (search)
│       │                   ├── cart-count-container
│       │                   │   ├── i (cart icon)
│       │                   │   └── span (cart-count)
│       │                   └── navbar-toggle
│       │
│       ├── section (hero)
│       │   └── container
│       │       └── hero-wrapper
│       │           └── hero-content
│       │               ├── h1 (hero-title)
│       │               ├── p (hero-description)
│       │               └── a (btn-primary)
│       │
│       ├── section (products)
│       │   └── container
│       │       ├── section-header
│       │       │   ├── h2 (section-title)
│       │       │   └── p (section-description)
│       │       │
│       │       └── products-grid
│       │           └── card (× N)
│       │               ├── image-wrapper
│       │               │   └── img
│       │               └── info
│       │                   ├── h3 (name)
│       │                   ├── p (product-category)
│       │                   ├── product-price-wrapper
│       │                   │   ├── span (product-price)
│       │                   └── span (product-price-old)
│       │                   └── button (btn-product)
│       │
│       ├── section (cta-section)
│       │   └── container
│       │       └── cta-wrapper
│       │           ├── cta-content
│       │           │   ├── h2 (cta-title)
│       │           │   ├── p (cta-description)
│       │           │   └── cta-buttons
│       │           │
│       │           └── cta-features
│       │               └── cta-feature-item (× 3)
│       │
│       ├── section (gallery)
│       │   └── container
│       │       ├── section-header
│       │       └── gallery-grid
│       │           └── gallery-item (× 6)
│       │               ├── img (gallery-image)
│       │               └── gallery-overlay
│       │
│       └── footer
│           └── container
│               ├── footer-content
│               │   ├── footer-column (× 4)
│               │   │   ├── footer-logo
│               │   │   ├── footer-description
│               │   │   ├── footer-social
│               │   │   ├── footer-links
│               │   │   └── footer-contact
│               │   │
│               │   └── footer-bottom
│               │       └── footer-bottom-content
│               │
│               └── script (script.js)
```

## Pages

- **index.html** - Homepage with hero section, featured products, and gallery
- **products.html** - List of Products
- **product-details.html** - Individual product page with details and specifications
- **about.html** - Company information and team members
- **contact.html** - Contact form and appointment booking
- **events.html** - Upcoming fashion events and workshops

## Features

- Responsive design for all devices
- Shopping cart with localStorage persistence
- Product filtering and search functionality
- Interactive image galleries
- Form validation and submission
- Modern UI with smooth animations

## Technologies

- HTML5
- CSS3 (with custom properties)
- JavaScript (ES6+)
- Font Awesome Icons
