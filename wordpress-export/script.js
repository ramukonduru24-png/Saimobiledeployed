/**
 * SVJ Jewellery - Main JavaScript
 * Handles carousel, cart, and interactive features
 */

// ===== CART FUNCTIONALITY =====
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartUI();
  }

  loadCart() {
    const saved = localStorage.getItem('svj_cart');
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem('svj_cart', JSON.stringify(this.items));
  }

  addItem(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    this.saveCart();
    this.updateCartUI();
    this.showToast('Added to cart', `${product.title} added to your cart`);
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveCart();
    this.updateCartUI();
  }

  updateQuantity(id, quantity) {
    if (quantity <= 0) {
      this.removeItem(id);
      return;
    }
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = quantity;
      this.saveCart();
      this.updateCartUI();
    }
  }

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  updateCartUI() {
    // Update cart badge
    const badge = document.querySelector('.cart-badge');
    const totalItems = this.getTotalItems();
    if (badge) {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update cart drawer
    this.renderCartItems();
  }

  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    
    if (!container) return;

    if (this.items.length === 0) {
      container.innerHTML = '<p style="text-align: center; padding: 2rem; color: hsl(var(--muted-foreground));">Your cart is empty</p>';
      if (totalElement) totalElement.textContent = '₹0';
      return;
    }

    container.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <p class="cart-item-price">₹${item.price.toLocaleString()}</p>
          <div class="cart-item-actions">
            <div class="quantity-selector">
              <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <button class="btn btn-icon btn-outline" onclick="cart.removeItem('${item.id}')" style="color: hsl(0, 70%, 50%);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (totalElement) {
      totalElement.textContent = `₹${this.getTotalPrice().toLocaleString()}`;
    }
  }

  checkout() {
    if (this.items.length === 0) {
      this.showToast('Cart is empty', 'Please add items to cart first');
      return;
    }

    const phoneNumber = '07799644700';
    const orderDetails = this.items.map(item => 
      `${item.quantity}x ${item.title} - ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = encodeURIComponent(
      `*New Order from SVJ Website*\n\n${orderDetails}\n\n*Total: ₹${this.getTotalPrice().toLocaleString()}*\n\nPlease confirm availability and pricing.`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }

  showToast(title, description) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-title">${title}</div>
      <div class="toast-description">${description}</div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Initialize cart
const cart = new ShoppingCart();

// ===== CART DRAWER =====
function toggleCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.toggle('open');
  overlay.classList.toggle('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  drawer.classList.remove('open');
  overlay.classList.remove('open');
}

// ===== HERO CAROUSEL =====
class Carousel {
  constructor(elementId, options = {}) {
    this.element = document.getElementById(elementId);
    if (!this.element) return;
    
    this.slides = this.element.querySelectorAll('.hero-slide');
    this.currentSlide = 0;
    this.autoplayInterval = options.interval || 5000;
    this.timer = null;
    
    this.init();
  }

  init() {
    this.showSlide(0);
    this.startAutoplay();
    
    // Setup navigation
    const prevBtn = this.element.querySelector('.carousel-nav.prev');
    const nextBtn = this.element.querySelector('.carousel-nav.next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
    if (nextBtn) nextBtn.addEventListener('click', () => this.next());
    
    // Setup dots
    const dots = this.element.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    
    const dots = this.element.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    this.currentSlide = index;
  }

  next() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(nextIndex);
  }

  prev() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(prevIndex);
  }

  goToSlide(index) {
    this.showSlide(index);
    this.resetAutoplay();
  }

  startAutoplay() {
    this.timer = setInterval(() => this.next(), this.autoplayInterval);
  }

  resetAutoplay() {
    clearInterval(this.timer);
    this.startAutoplay();
  }
}

// ===== PRODUCT CARD FUNCTIONALITY =====
function setupProductCards() {
  const cards = document.querySelectorAll('[data-product]');
  
  cards.forEach(card => {
    const productData = JSON.parse(card.dataset.product);
    const quantityDisplay = card.querySelector('.quantity-value');
    const minusBtn = card.querySelector('[data-action="decrease"]');
    const plusBtn = card.querySelector('[data-action="increase"]');
    const addToCartBtn = card.querySelector('[data-action="add-to-cart"]');
    
    let quantity = 1;
    
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          quantityDisplay.textContent = quantity;
        }
      });
    }
    
    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
      });
    }
    
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        for (let i = 0; i < quantity; i++) {
          cart.addItem(productData);
        }
        quantity = 1;
        quantityDisplay.textContent = quantity;
      });
    }
  });
}

// ===== SMOOTH SCROLL =====
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// ===== CONTACT FORM =====
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    cart.showToast('Message Sent!', "We'll get back to you soon.");
    form.reset();
  });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize hero carousel
  new Carousel('hero-carousel', { interval: 5000 });
  
  // Initialize temple carousel if exists
  new Carousel('temple-carousel', { interval: 6000 });
  
  // Setup product cards
  setupProductCards();
  
  // Setup smooth scrolling
  setupSmoothScroll();
  
  // Setup contact form
  setupContactForm();
  
  // Close cart on overlay click
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeCartDrawer);
  }
  
  console.log('SVJ Jewellery initialized successfully!');
});

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`;
}

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}