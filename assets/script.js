// ============================================
// Fashion Store - Main JavaScript File
// ============================================


document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// Initialize all functionality
function initializeApp() {
    // Product Details Page Functions
    initProductDetails();

    // Products Page Functions
    initProductsPage();

    // Contact Page Functions
    initContactPage();
}

// ============================================
// PRODUCT DETAILS PAGE FUNCTIONS
// ============================================

function initProductDetails() {
    // Only run on product-details page
    if (!document.getElementById('mainProductImage')) return;

    // Image switching
    const thumbnails = document.querySelectorAll('.product-thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            const img = this.querySelector('img');
            if (img) {
                changeImage(img.src, this);
            }
        });
    });

    // Tab switching
    const tabs = document.querySelectorAll('.spec-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab') || this.textContent.trim().toLowerCase();
            showTab(tabName, this);
        });
    });

    // Quantity controls
    const increaseBtn = document.querySelector('.quantity-btn:last-of-type');
    const decreaseBtn = document.querySelector('.quantity-btn:first-of-type');

    if (increaseBtn) {
        increaseBtn.addEventListener('click', increaseQuantity);
    }
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', decreaseQuantity);
    }

    // Size selection
    const sizeButtons = document.querySelectorAll('.product-size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            sizeButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Color selection
    const colorButtons = document.querySelectorAll('.product-color-btn');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            colorButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function changeImage(src, clickedThumb) {
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.src = src;
        document.querySelectorAll('.product-thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        if (clickedThumb) {
            clickedThumb.classList.add('active');
        }
    }
}

function showTab(tabName, clickedTab) {
    // Map button text to IDs
    const tabMap = {
        'description': 'description',
        'specifications': 'specifications',
        'reviews': 'reviews'
    };

    const targetId = tabMap[tabName.toLowerCase()] || tabName;

    document.querySelectorAll('.spec-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.spec-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    if (clickedTab) {
        clickedTab.classList.add('active');
    }
}

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput && parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// ============================================
// PRODUCTS PAGE FUNCTIONS
// ============================================

function initProductsPage() {
    // Only run on products page
    if (!document.getElementById('productsGrid')) return;

    // Category checkboxes
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    categoryInputs.forEach(input => {
        input.addEventListener('change', filterProducts);
    });

    // Price radio buttons
    const priceInputs = document.querySelectorAll('input[name="price"]');
    priceInputs.forEach(input => {
        input.addEventListener('change', filterProducts);
    });

    // Size buttons
    const sizeButtons = document.querySelectorAll('.filter-size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            toggleSize(this);
        });
    });

    // Color buttons
    const colorButtons = document.querySelectorAll('.filter-color-btn');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            toggleColor(this);
        });
    });

    // Sort select
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }

    // Clear filters button
    const clearBtn = document.querySelector('.filter-clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }

    // Pagination buttons
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.textContent.includes('Previous') ? -1 : 1;
            changePage(direction);
        });
    });

    // Initial filter
    filterProducts();
}

function filterProducts() {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
    const priceRadio = document.querySelector('input[name="price"]:checked');
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        let showProduct = true;

        // Category filter
        if (categoryCheckboxes.length > 0) {
            const categories = Array.from(categoryCheckboxes).map(cb => cb.value);
            if (!categories.includes('all') && !categories.includes(productCategory)) {
                showProduct = false;
            }
        }

        // Price filter
        if (priceRadio && priceRadio.value !== 'all') {
            const priceRange = priceRadio.value;
            if (priceRange === '0-200' && productPrice > 200) showProduct = false;
            else if (priceRange === '200-300' && (productPrice < 200 || productPrice > 300)) showProduct = false;
            else if (priceRange === '300-400' && (productPrice < 300 || productPrice > 400)) showProduct = false;
            else if (priceRange === '400+' && productPrice < 400) showProduct = false;
        }

        if (showProduct) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });

    const countElement = document.getElementById('productsCount');
    if (countElement) {
        countElement.textContent = visibleCount;
    }
}

function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    const sortValue = sortSelect.value;
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const products = Array.from(productsGrid.querySelectorAll('.product-card'));

    products.sort((a, b) => {
        if (sortValue === 'price-low') {
            return parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price'));
        } else if (sortValue === 'price-high') {
            return parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price'));
        } else if (sortValue === 'name-asc') {
            const nameA = a.querySelector('.product-name');
            const nameB = b.querySelector('.product-name');
            if (nameA && nameB) {
                return nameA.textContent.localeCompare(nameB.textContent);
            }
        } else if (sortValue === 'name-desc') {
            const nameA = a.querySelector('.product-name');
            const nameB = b.querySelector('.product-name');
            if (nameA && nameB) {
                return nameB.textContent.localeCompare(nameA.textContent);
            }
        }
        return 0;
    });

    products.forEach(product => productsGrid.appendChild(product));
}

function clearFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    const allCategory = document.querySelector('input[name="category"][value="all"]');
    if (allCategory) allCategory.checked = true;

    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    const allPrice = document.querySelector('input[name="price"][value="all"]');
    if (allPrice) allPrice.checked = true;

    document.querySelectorAll('.filter-size-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.filter-color-btn').forEach(btn => btn.classList.remove('active'));
    filterProducts();
}

function toggleSize(btn) {
    btn.classList.toggle('active');
    filterProducts();
}

function toggleColor(btn) {
    btn.classList.toggle('active');
    filterProducts();
}

function changePage(direction) {
    // Pagination logic can be added here
    console.log('Change page:', direction);
}

// ============================================
// CONTACT PAGE FUNCTIONS
// ============================================

function initContactPage() {
    // Only run on contact page
    if (!document.getElementById('appointment-date')) return;

    // Set minimum date to today
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }

    // Appointment form submission
    const appointmentForm = document.querySelector('.appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();
            bookAppointment();
        });
    }
}

function bookAppointment() {
    const name = document.getElementById('appointment-name');
    const email = document.getElementById('appointment-email');
    const phone = document.getElementById('appointment-phone');
    const type = document.getElementById('appointment-type');
    const date = document.getElementById('appointment-date');
    const time = document.getElementById('appointment-time');
    const notes = document.getElementById('appointment-notes');

    if (!name || !email || !phone || !type || !date || !time) return;

    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const typeValue = type.value;
    const dateValue = date.value;
    const timeValue = time.value;
    const notesValue = notes ? notes.value : '';

    if (nameValue && emailValue && phoneValue && typeValue && dateValue && timeValue) {
        const formattedDate = new Date(dateValue).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        alert(`Appointment Request Submitted!\n\nName: ${nameValue}\nEmail: ${emailValue}\nPhone: ${phoneValue}\nType: ${typeValue}\nDate: ${formattedDate}\nTime: ${timeValue}\n\nWe'll confirm your appointment via email shortly.`);

        // Reset form
        const appointmentForm = document.querySelector('.appointment-form');
        if (appointmentForm) {
            appointmentForm.reset();
        }
    }
}

