# SVJ Jewellery - WordPress Integration Guide

This package contains WordPress-compatible HTML, CSS, and JavaScript files converted from your React application.

## 📁 File Structure

```
wordpress-export/
├── style.css              # Main stylesheet (all styles)
├── script.js              # Main JavaScript (carousel, cart, etc.)
├── header.php             # WordPress header template
├── footer.php             # WordPress footer template
├── front-page.php         # Homepage template
├── template-parts/
│   └── product-card.php   # Reusable product card component
└── README.md              # This file
```

## 🚀 Installation Instructions

### Option 1: Create a Custom WordPress Theme

1. **Create Theme Folder**
   ```
   wp-content/themes/svj-jewellery/
   ```

2. **Copy All Files**
   - Copy all files from `wordpress-export/` to your theme folder
   
3. **Add Assets Folder**
   - Create an `assets/` folder in your theme
   - Copy all images from `src/assets/` to `wp-content/themes/svj-jewellery/assets/`

4. **Create functions.php**
   ```php
   <?php
   // wp-content/themes/svj-jewellery/functions.php
   
   function svj_theme_setup() {
       add_theme_support('title-tag');
       add_theme_support('post-thumbnails');
   }
   add_action('after_setup_theme', 'svj_theme_setup');
   
   function svj_enqueue_scripts() {
       wp_enqueue_style('svj-style', get_stylesheet_uri());
       wp_enqueue_script('svj-script', get_template_directory_uri() . '/script.js', array(), '1.0', true);
   }
   add_action('wp_enqueue_scripts', 'svj_enqueue_scripts');
   ?>
   ```

5. **Activate Theme**
   - Go to WordPress Admin → Appearance → Themes
   - Activate "SVJ Jewellery" theme

### Option 2: Integrate into Existing Theme

1. **Copy Assets**
   - Copy `style.css` content to your theme's main stylesheet
   - Copy `script.js` to your theme's js folder
   
2. **Enqueue Scripts**
   Add to your theme's `functions.php`:
   ```php
   function enqueue_svj_assets() {
       wp_enqueue_script('svj-cart', get_template_directory_uri() . '/js/script.js', array(), '1.0', true);
   }
   add_action('wp_enqueue_scripts', 'enqueue_svj_assets');
   ```

3. **Create Page Template**
   - Create a new page template using `front-page.php` as reference
   - Name it `template-jewelry-home.php`
   - Add template header:
   ```php
   <?php
   /*
   Template Name: Jewelry Homepage
   */
   get_header();
   // ... rest of code
   get_footer();
   ?>
   ```

## 📄 Creating Category Pages

To create category pages (Necklaces, Earrings, etc.):

1. **Create page-{slug}.php files**:
   ```php
   <?php
   // page-necklaces.php
   get_header();
   ?>
   
   <div class="min-h-screen" style="background: hsl(var(--background)); padding-top: 6rem;">
       <main class="container" style="padding: 5rem 1rem;">
           <h1 class="section-title text-center" style="color: hsl(var(--gold-dark));">
               Necklaces Collection
           </h1>
           <p class="text-center" style="color: hsl(var(--muted-foreground)); margin-bottom: 3rem;">
               Premium gold necklaces crafted with precision
           </p>
           
           <div class="product-grid">
               <?php
               $products = array(
                   array('id' => 'neck-1', 'image' => get_template_directory_uri() . '/assets/necklace-1.jpg', 'title' => 'Traditional Necklace', 'description' => '22K Gold', 'price' => 125000),
                   // Add more products...
               );
               
               foreach ($products as $product) {
                   include get_template_directory() . '/template-parts/product-card.php';
               }
               ?>
           </div>
       </main>
   </div>
   
   <?php get_footer(); ?>
   ```

2. **Create Pages in WordPress**:
   - Go to Pages → Add New
   - Create pages: "Necklaces", "Earrings", "Bangles", "Rings", "Bridal Sets", "Chains"
   - Set slugs to match file names

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
  --gold-dark: 40 80% 45%;
  --primary: 40 80% 45%;
  /* Modify other colors as needed */
}
```

### Fonts
Already included Google Fonts in `header.php`. To change fonts:
1. Update Google Fonts link
2. Update CSS variables:
```css
--font-heading: 'Your Font', serif;
--font-body: 'Your Font', sans-serif;
```

### WhatsApp Number
Change in `script.js`:
```javascript
const phoneNumber = '07799644700'; // Line 71
```

## ⚙️ Features

### Shopping Cart
- LocalStorage-based cart (persists across page reloads)
- Add/remove items
- Update quantities
- WhatsApp checkout integration

### Carousels
- Auto-playing hero carousel (5s interval)
- Temple collection carousel (6s interval)
- Manual navigation with buttons and dots

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 1024px
- Touch-friendly interfaces

## 🔌 WordPress Integration Tips

### Creating Custom Post Type for Products
Add to `functions.php`:
```php
function svj_register_products() {
    register_post_type('product', array(
        'labels' => array(
            'name' => 'Products',
            'singular_name' => 'Product'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-cart'
    ));
}
add_action('init', 'svj_register_products');
```

### Using WordPress Loop for Products
```php
<?php
$args = array('post_type' => 'product', 'posts_per_page' => 8);
$products_query = new WP_Query($args);

while ($products_query->have_posts()) {
    $products_query->the_post();
    $product = array(
        'id' => 'prod-' . get_the_ID(),
        'image' => get_the_post_thumbnail_url(),
        'title' => get_the_title(),
        'description' => get_field('description'), // ACF field
        'price' => get_field('price') // ACF field
    );
    include 'template-parts/product-card.php';
}
wp_reset_postdata();
?>
```

## 📱 Mobile Menu (Add if needed)

Add to `header.php` before closing `</header>`:
```html
<button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
</button>
```

Add to `script.js`:
```javascript
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('open');
}
```

## 🐛 Troubleshooting

### Images Not Loading
- Ensure images are in `wp-content/themes/your-theme/assets/`
- Check file permissions (644 for files, 755 for folders)
- Clear WordPress cache

### Styles Not Applying
- Clear browser cache
- Check if `style.css` is properly enqueued
- Inspect element to see if styles are loaded

### Cart Not Working
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded after jQuery (if using)
- Clear localStorage: `localStorage.clear()`

## 📞 Support

For WordPress-specific questions:
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress Stack Exchange](https://wordpress.stackexchange.com/)

## 📝 Notes

- All colors use HSL format for easy theming
- Cart data stored in browser's localStorage
- Fully responsive and mobile-friendly
- SEO-optimized with semantic HTML
- Accessibility features included (ARIA labels)

---

**Version:** 1.0  
**Last Updated:** 2025  
**Compatible with:** WordPress 5.0+