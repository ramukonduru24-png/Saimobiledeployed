<div class="product-card" data-product='<?php echo json_encode($product); ?>'>
    <div class="product-image">
        <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['title']; ?>">
    </div>
    
    <div class="product-info">
        <h3 class="product-title"><?php echo $product['title']; ?></h3>
        <?php if (!empty($product['description'])) : ?>
            <p class="product-description"><?php echo $product['description']; ?></p>
        <?php endif; ?>
        <p class="product-price">₹<?php echo number_format($product['price']); ?></p>
        
        <div class="product-actions">
            <div class="quantity-selector">
                <button class="quantity-btn" data-action="decrease" type="button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <span class="quantity-value">1</span>
                <button class="quantity-btn" data-action="increase" type="button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
            
            <button class="add-to-cart-btn" data-action="add-to-cart" type="button">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
            </button>
        </div>
    </div>
</div>