document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});

// Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get or initialize cart count from localStorage
    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    
    // Update cart count display
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
    
    // Add event listeners to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.btn-product');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if this is actually an "Add to Cart" button
            if (button.textContent.includes('Add to Cart')) {
                e.preventDefault();
                
                // Increment cart count
                cartCount++;
                localStorage.setItem('cartCount', cartCount);
                
                // Update display
                if (cartCountElement) {
                    cartCountElement.textContent = cartCount;
                }
            }
        });
    });
});