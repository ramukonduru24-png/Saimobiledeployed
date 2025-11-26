<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Header -->
<header class="site-header">
    <div class="container header-container">
        <!-- Logo -->
        <div class="site-logo">
            <a href="<?php echo home_url(); ?>">
                <h1>SVJ</h1>
                <p>Sri Venkateswara Jewellery</p>
            </a>
        </div>

        <!-- Main Navigation -->
        <nav class="main-nav">
            <ul>
                <li><a href="<?php echo home_url(); ?>">Home</a></li>
                <li><a href="#arrivals">New Collection</a></li>
                <li class="nav-dropdown">
                    <span class="dropdown-toggle">Categories</span>
                    <div class="dropdown-menu">
                        <a href="<?php echo home_url('/necklaces'); ?>">Necklaces</a>
                        <a href="<?php echo home_url('/earrings'); ?>">Earrings</a>
                        <a href="<?php echo home_url('/bangles'); ?>">Bangles</a>
                        <a href="<?php echo home_url('/rings'); ?>">Rings</a>
                        <a href="<?php echo home_url('/bridal-sets'); ?>">Bridal Sets</a>
                        <a href="<?php echo home_url('/chains'); ?>">Chains</a>
                    </div>
                </li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>

        <!-- Header Actions -->
        <div class="header-actions">
            <a href="tel:07799644700" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>077996 44700</span>
            </a>
            <a href="#contact" class="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kakinada, AP</span>
            </a>
            <button class="cart-button" onclick="toggleCartDrawer()" aria-label="Shopping cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span class="cart-badge" style="display: none;">0</span>
            </button>
        </div>
    </div>
</header>

<!-- Cart Drawer -->
<div id="cart-overlay" class="cart-overlay" onclick="closeCartDrawer()"></div>
<div id="cart-drawer" class="cart-drawer">
    <div class="cart-header">
        <h3 class="cart-title">Shopping Cart (<span id="cart-count">0</span> items)</h3>
        <button class="cart-close" onclick="closeCartDrawer()" aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
    
    <div class="cart-items" id="cart-items-container">
        <p style="text-align: center; padding: 2rem; color: hsl(var(--muted-foreground));">Your cart is empty</p>
    </div>
    
    <div class="cart-footer">
        <div class="cart-total">
            <span>Total:</span>
            <span class="cart-total-price" id="cart-total">₹0</span>
        </div>
        <button class="btn btn-primary btn-lg" style="width: 100%;" onclick="cart.checkout()">
            Proceed to WhatsApp Checkout
        </button>
    </div>
</div>

<?php
// Update cart count in header
?>
<script>
document.addEventListener('DOMContentLoaded', function() {
    const updateCartCount = () => {
        const countElement = document.getElementById('cart-count');
        if (countElement && cart) {
            countElement.textContent = cart.getTotalItems();
        }
    };
    
    // Update initially and on cart changes
    if (typeof cart !== 'undefined') {
        updateCartCount();
        const originalUpdateUI = cart.updateCartUI;
        cart.updateCartUI = function() {
            originalUpdateUI.call(this);
            updateCartCount();
        };
    }
});
</script>