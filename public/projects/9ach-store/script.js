/* 9ach Store - Advanced JavaScript */

// Extended product data with detailed information
const products = [
    {
        id: 1,
        name: "Classic Black Hoodie",
        price: 89.99,
        image: "🔥",
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "hoodies",
        description: "Premium quality hoodie made from 100% organic cotton. Features the iconic 9ach logo embroidered on the chest. Perfect for streetwear enthusiasts who value comfort and style.",
        material: "100% Organic Cotton",
        care: "Machine wash cold, tumble dry low"
    },
    {
        id: 2,
        name: "Urban Streetwear Tee",
        price: 45.99,
        image: "👕",
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "t-shirts",
        description: "Soft and comfortable t-shirt with minimalist 9ach branding. Made from premium cotton blend for durability and comfort.",
        material: "Cotton Blend",
        care: "Machine wash cold"
    },
    {
        id: 3,
        name: "Premium Joggers",
        price: 79.99,
        image: "👖",
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "pants",
        description: "Comfortable joggers perfect for both casual wear and athletic activities. Features adjustable drawstring and side pockets.",
        material: "Cotton-Polyester Blend",
        care: "Machine wash warm"
    },
    {
        id: 4,
        name: "9ach Signature Cap",
        price: 29.99,
        image: "🧢",
        sizes: ["One Size"],
        category: "accessories",
        description: "Adjustable cap with embroidered 9ach logo. Perfect accessory to complete your streetwear look.",
        material: "Cotton Twill",
        care: "Spot clean only"
    },
    {
        id: 5,
        name: "Oversized Bomber Jacket",
        price: 129.99,
        image: "🧥",
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "jackets",
        description: "Statement bomber jacket with premium finish. Features multiple pockets and embroidered details.",
        material: "Polyester Shell",
        care: "Dry clean recommended"
    },
    {
        id: 6,
        name: "Logo Crewneck Sweatshirt",
        price: 69.99,
        image: "👔",
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "sweatshirts",
        description: "Classic crewneck sweatshirt with bold 9ach logo. Comfortable fit for everyday wear.",
        material: "Cotton-Polyester Blend",
        care: "Machine wash cold"
    },
    {
        id: 7,
        name: "Distressed Denim Jacket",
        price: 99.99,
        image: "👘",
        sizes: ["S", "M", "L", "XL"],
        category: "jackets",
        description: "Vintage-inspired denim jacket with distressed details and 9ach patch.",
        material: "100% Cotton Denim",
        care: "Machine wash cold, air dry"
    },
    {
        id: 8,
        name: "Cargo Shorts",
        price: 54.99,
        image: "🩳",
        sizes: ["S", "M", "L", "XL"],
        category: "pants",
        description: "Functional cargo shorts with multiple pockets. Perfect for summer streetwear.",
        material: "Cotton Twill",
        care: "Machine wash warm"
    }
];

// Global variables
let cart = JSON.parse(localStorage.getItem('9ach-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('9ach-wishlist')) || [];
let currentFilter = 'all';
let searchQuery = '';

// Initialize the store
document.addEventListener('DOMContentLoaded', function() {
    initializeStore();
});

function initializeStore() {
    createCategoryFilter();
    createSearchBar();
    loadProducts();
    updateCartUI();
    setupEventListeners();
}

// Create category filter
function createCategoryFilter() {
    const categories = ['all', ...new Set(products.map(p => p.category))];
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filter';
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        btn.onclick = () => filterProducts(category);
        if (category === 'all') btn.classList.add('active');
        filterContainer.appendChild(btn);
    });
    
    const productsSection = document.querySelector('.products-section .container');
    const sectionTitle = productsSection.querySelector('.section-title');
    sectionTitle.after(filterContainer);
}

// Create search bar
function createSearchBar() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" class="search-input" placeholder="Search products..." 
               onkeyup="searchProducts(this.value)">
    `;
    
    const productsSection = document.querySelector('.products-section .container');
    const categoryFilter = productsSection.querySelector('.category-filter');
    categoryFilter.after(searchContainer);
}

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts();
}

// Search products
function searchProducts(query) {
    searchQuery = query.toLowerCase();
    loadProducts();
}

// Load and display products
function loadProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '<div class="loading">Loading products</div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        let filteredProducts = products;
        
        // Apply category filter
        if (currentFilter !== 'all') {
            filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
        }
        
        // Apply search filter
        if (searchQuery) {
            filteredProducts = filteredProducts.filter(p => 
                p.name.toLowerCase().includes(searchQuery) ||
                p.category.toLowerCase().includes(searchQuery)
            );
        }
        
        productGrid.innerHTML = '';
        
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<div class="loading">No products found</div>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.style.position = 'relative';
            productCard.innerHTML = `
                <div class="product-image" onclick="openProductDetail(${product.id})">
                    ${product.image}
                    <div style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.8rem;">
                        ${product.category}
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                    <div class="product-sizes">
                        ${product.sizes.map(size => 
                            `<div class="size-option" onclick="selectSize(this, '${size}')">${size}</div>`
                        ).join('')}
                    </div>
                    <div style="display: flex; gap: 0.5rem;">
                        <button class="add-to-cart" onclick="addToCart(${product.id})" style="flex: 1;">
                            Add to Cart
                        </button>
                        <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" 
                                style="width: 40px; height: 40px; border: 1px solid #ccc; background: white; cursor: pointer;">
                            <i class="fa${wishlist.includes(product.id) ? 's' : 'r'} fa-heart" 
                               style="color: ${wishlist.includes(product.id) ? 'red' : '#666'};"></i>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }, 300);
}

// Open product detail modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'product-detail-modal active';
    modal.innerHTML = `
        <div class="product-detail-content">
            <button class="close-detail" onclick="closeProductDetail()">&times;</button>
            <div class="product-detail-image">
                ${product.image}
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-price">$${product.price}</div>
                <div class="product-description">
                    <p>${product.description}</p>
                    <p><strong>Material:</strong> ${product.material}</p>
                    <p><strong>Care:</strong> ${product.care}</p>
                </div>
                
                <div class="size-selector">
                    <h4>Select Size:</h4>
                    <div class="size-grid">
                        ${product.sizes.map(size => 
                            `<div class="size-option-detail" onclick="selectDetailSize(this, '${size}')">${size}</div>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <h4>Quantity:</h4>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" max="10" id="quantity-input">
                        <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="add-to-cart-detail" onclick="addToCartFromDetail(${product.id})">
                        Add to Cart
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fa${wishlist.includes(product.id) ? 's' : 'r'} fa-heart" 
                           style="color: ${wishlist.includes(product.id) ? 'red' : '#666'};"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Close product detail modal
function closeProductDetail() {
    const modal = document.querySelector('.product-detail-modal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

// Select size in detail modal
function selectDetailSize(element, size) {
    document.querySelectorAll('.size-option-detail').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    element.parentElement.setAttribute('data-selected-size', size);
}

// Change quantity
function changeQuantity(delta) {
    const quantityInput = document.getElementById('quantity-input');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, Math.min(10, currentValue + delta));
    quantityInput.value = newValue;
}

// Select size
function selectSize(element, size) {
    element.parentElement.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    element.parentElement.setAttribute('data-selected-size', size);
}

// Add to cart from product detail
function addToCartFromDetail(productId) {
    const product = products.find(p => p.id === productId);
    const sizeContainer = document.querySelector('.size-grid');
    const selectedSize = sizeContainer.getAttribute('data-selected-size');
    const quantity = parseInt(document.getElementById('quantity-input').value);
    
    if (!selectedSize && product.sizes.length > 1) {
        showNotification('Please select a size first!', 'warning');
        return;
    }
    
    const cartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        size: selectedSize || product.sizes[0],
        quantity: quantity,
        image: product.image
    };
    
    addItemToCart(cartItem);
    closeProductDetail();
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const productCard = event.target.closest('.product-card');
    const sizesContainer = productCard.querySelector('.product-sizes');
    const selectedSize = sizesContainer.getAttribute('data-selected-size');

    if (!selectedSize && product.sizes.length > 1) {
        showNotification('Please select a size first!', 'warning');
        return;
    }

    const cartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        size: selectedSize || product.sizes[0],
        quantity: 1,
        image: product.image
    };

    addItemToCart(cartItem);
}

// Add item to cart helper
function addItemToCart(cartItem) {
    const existingItem = cart.find(item => 
        item.id === cartItem.id && item.size === cartItem.size
    );

    if (existingItem) {
        existingItem.quantity += cartItem.quantity;
    } else {
        cart.push(cartItem);
    }

    updateCartUI();
    saveCart();
    showNotification('Item added to cart!', 'success');
    
    // Add pulse animation to cart icon
    const cartCount = document.getElementById('cart-count');
    cartCount.classList.add('pulse');
    setTimeout(() => cartCount.classList.remove('pulse'), 300);
}

// Toggle wishlist
function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist!', 'success');
    }
    
    saveWishlist();
    loadProducts(); // Refresh to update heart icons
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 2rem; color: #666;">Your cart is empty</div>';
    } else {
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="font-size: 1.5rem;">${item.image}</div>
                    <div>
                        <div style="font-weight: 600;">${item.name}</div>
                        <div style="color: #666; font-size: 0.9rem;">Size: ${item.size} | Qty: ${item.quantity}</div>
                    </div>
                </div>
                <div style="text-align: right;">
                    <div style="font-weight: 600;">$${itemTotal.toFixed(2)}</div>
                    <button onclick="removeFromCart(${index})" 
                            style="background: none; border: none; color: red; cursor: pointer; margin-top: 0.5rem;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCart();
    showNotification('Item removed from cart', 'info');
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // In a real application, this would redirect to a payment processor
    showNotification(`Order placed! Total: $${total.toFixed(2)}`, 'success');
    
    // Clear cart after checkout
    cart = [];
    updateCartUI();
    saveCart();
    toggleCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('9ach-cart', JSON.stringify(cart));
}

// Save wishlist to localStorage
function saveWishlist() {
    localStorage.setItem('9ach-wishlist', JSON.stringify(wishlist));
}

// Show notification
function showNotification(message, type = 'info') {
    const colors = {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
    };

    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10001;
        font-weight: 600;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close modals on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductDetail();
            const cartModal = document.getElementById('cart-modal');
            if (cartModal.classList.contains('active')) {
                toggleCart();
            }
        }
    });

    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('product-detail-modal')) {
            closeProductDetail();
        }
        if (e.target.classList.contains('cart-modal')) {
            toggleCart();
        }
    });
}

// Add animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Make functions global
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.selectDetailSize = selectDetailSize;
window.changeQuantity = changeQuantity;
window.addToCartFromDetail = addToCartFromDetail;
window.selectSize = selectSize;
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.checkout = checkout;
window.filterProducts = filterProducts;
window.searchProducts = searchProducts;