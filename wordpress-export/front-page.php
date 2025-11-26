<?php get_header(); ?>

<!-- Hero Carousel -->
<section id="hero-carousel" class="hero-carousel">
    <?php
    $hero_slides = array(
        array(
            'image' => get_template_directory_uri() . '/assets/hero-1.jpg',
            'title' => 'Exquisite Gold Jewelry',
            'subtitle' => 'Timeless elegance for every occasion'
        ),
        array(
            'image' => get_template_directory_uri() . '/assets/hero-2.jpg',
            'title' => 'Traditional Temple Jewelry',
            'subtitle' => 'Heritage designs crafted with love'
        ),
        array(
            'image' => get_template_directory_uri() . '/assets/hero-3.jpg',
            'title' => 'Contemporary Collections',
            'subtitle' => 'Modern designs with classic appeal'
        )
    );
    
    foreach ($hero_slides as $index => $slide) : ?>
        <div class="hero-slide <?php echo $index === 0 ? 'active' : ''; ?>">
            <img src="<?php echo $slide['image']; ?>" alt="<?php echo $slide['title']; ?>">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <h2 class="animate-fade-in-up"><?php echo $slide['title']; ?></h2>
                    <p class="animate-fade-in-up"><?php echo $slide['subtitle']; ?></p>
                    <button class="btn btn-primary btn-lg" onclick="scrollToElement('arrivals')">
                        Explore Collection
                    </button>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
    
    <button class="carousel-nav prev" aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    </button>
    <button class="carousel-nav next" aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    </button>
    
    <div class="carousel-dots">
        <?php foreach ($hero_slides as $index => $slide) : ?>
            <button class="carousel-dot <?php echo $index === 0 ? 'active' : ''; ?>" aria-label="Go to slide <?php echo $index + 1; ?>"></button>
        <?php endforeach; ?>
    </div>
</section>

<!-- New Arrivals -->
<section id="arrivals" class="section">
    <div class="container">
        <div class="text-center animate-fade-in-up">
            <h2 class="section-title">New Arrivals</h2>
            <p class="section-subtitle">Discover our latest exquisite collections</p>
        </div>
        
        <div class="product-grid">
            <?php
            $arrivals = array(
                array('id' => 'arr1', 'image' => 'arrival-1.jpg', 'title' => 'Floral Necklace Set', 'description' => 'Intricate traditional design', 'price' => 85000),
                array('id' => 'arr2', 'image' => 'arrival-2.jpg', 'title' => 'Gold Bangles', 'description' => 'Classic stacked elegance', 'price' => 125000),
                array('id' => 'arr3', 'image' => 'arrival-3.jpg', 'title' => 'Pearl Jhumkas', 'description' => 'Traditional earrings', 'price' => 45000),
                array('id' => 'arr4', 'image' => 'arrival-4.jpg', 'title' => 'Gemstone Choker', 'description' => 'Contemporary luxury', 'price' => 195000),
                array('id' => 'arr5', 'image' => 'arrival-5.jpg', 'title' => 'Temple Maang Tikka', 'description' => 'Bridal collection', 'price' => 65000),
                array('id' => 'arr6', 'image' => 'arrival-6.jpg', 'title' => 'Layered Chains', 'description' => 'Modern minimalist', 'price' => 55000),
                array('id' => 'arr7', 'image' => 'arrival-7.jpg', 'title' => 'Haaram Necklace', 'description' => 'South Indian heritage', 'price' => 215000),
                array('id' => 'arr8', 'image' => 'arrival-8.jpg', 'title' => 'Designer Rings', 'description' => 'Statement pieces', 'price' => 35000),
            );
            
            foreach ($arrivals as $product) : 
                $product['image'] = get_template_directory_uri() . '/assets/' . $product['image'];
                ?>
                <?php include 'template-parts/product-card.php'; ?>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Categories -->
<section class="section bg-secondary">
    <div class="container">
        <div class="text-center">
            <h2 class="section-title">Shop by Categories</h2>
        </div>
        
        <div class="category-grid">
            <?php
            $categories = array(
                array('image' => 'cat-necklaces.jpg', 'title' => 'Necklaces', 'link' => '/necklaces'),
                array('image' => 'cat-earrings.jpg', 'title' => 'Earrings', 'link' => '/earrings'),
                array('image' => 'cat-bangles.jpg', 'title' => 'Bangles', 'link' => '/bangles'),
                array('image' => 'cat-rings.jpg', 'title' => 'Rings', 'link' => '/rings'),
                array('image' => 'cat-bridal.jpg', 'title' => 'Bridal Sets', 'link' => '/bridal-sets'),
                array('image' => 'cat-chains.jpg', 'title' => 'Chains', 'link' => '/chains'),
            );
            
            foreach ($categories as $category) : 
                $category['image'] = get_template_directory_uri() . '/assets/' . $category['image'];
                ?>
                <a href="<?php echo home_url($category['link']); ?>" class="category-card">
                    <div class="category-image">
                        <img src="<?php echo $category['image']; ?>" alt="<?php echo $category['title']; ?>">
                    </div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3 class="category-title"><?php echo $category['title']; ?></h3>
                        <div class="category-divider"></div>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Temple Collection Carousel -->
<section class="section bg-gradient">
    <div class="container">
        <div class="text-center animate-fade-in-up">
            <h2 class="section-title">Temple & Traditional Collection</h2>
            <div style="width: 6rem; height: 4px; background: linear-gradient(to right, transparent, hsl(var(--primary)), transparent); margin: 0 auto;"></div>
        </div>

        <div id="temple-carousel" class="hero-carousel" style="height: 60vh; border-radius: 1rem; margin-top: 3rem;">
            <?php
            $temple_slides = array(
                array('image' => get_template_directory_uri() . '/assets/temple-1.jpg', 'quote' => 'Where tradition meets timeless beauty'),
                array('image' => get_template_directory_uri() . '/assets/temple-2.jpg', 'quote' => 'Adorned with devotion, crafted with precision')
            );
            
            foreach ($temple_slides as $index => $slide) : ?>
                <div class="hero-slide <?php echo $index === 0 ? 'active' : ''; ?>">
                    <img src="<?php echo $slide['image']; ?>" alt="Temple Jewelry">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <div style="max-width: 48rem; padding: 0 1.5rem; text-align: center;">
                            <p style="font-size: clamp(1.5rem, 4vw, 2.5rem); font-family: var(--font-heading); font-style: italic; color: white; text-shadow: 0 4px 12px rgba(0,0,0,0.5);" class="animate-fade-in">
                                "<?php echo $slide['quote']; ?>"
                            </p>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            
            <div class="carousel-dots">
                <?php foreach ($temple_slides as $index => $slide) : ?>
                    <button class="carousel-dot <?php echo $index === 0 ? 'active' : ''; ?>"></button>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- Trends -->
<section class="section">
    <div class="container">
        <div class="text-center">
            <h2 class="section-title">Shop by Season & Trends</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
            <?php
            $trends = array(
                array('image' => 'trend-classic.jpg', 'title' => 'Classic Gold'),
                array('image' => 'trend-steel.jpg', 'title' => 'Stainless Steel & Tarnish-Proof'),
                array('image' => 'trend-emerald.jpg', 'title' => 'Emerald'),
                array('image' => 'trend-demi.jpg', 'title' => 'Demi-Fine'),
                array('image' => 'trend-choker.jpg', 'title' => 'Chokers'),
                array('image' => 'trend-temple.jpg', 'title' => 'Temple'),
            );
            
            foreach ($trends as $category) : 
                $category['image'] = get_template_directory_uri() . '/assets/' . $category['image'];
                ?>
                <div class="category-card">
                    <div class="category-image">
                        <img src="<?php echo $category['image']; ?>" alt="<?php echo $category['title']; ?>">
                    </div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3 class="category-title"><?php echo $category['title']; ?></h3>
                        <div class="category-divider"></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section id="testimonials" class="section bg-secondary testimonials-section">
    <div class="container text-center">
        <h2 class="section-title">What Our Customers Say</h2>
    </div>
    <div class="testimonials-scroll">
        <?php
        $testimonials = array(
            array('name' => 'Priya Sharma', 'text' => 'Beautiful collection! The quality of gold is exceptional.'),
            array('name' => 'Rajesh Kumar', 'text' => 'Best jewelry store in Kakinada. Highly recommended!'),
            array('name' => 'Anitha Reddy', 'text' => 'Stunning bridal sets. Made my wedding day special.'),
            array('name' => 'Venkat Rao', 'text' => 'Traditional designs with modern touch. Love it!'),
            array('name' => 'Lakshmi Devi', 'text' => 'Excellent service and beautiful temple jewelry.'),
            array('name' => 'Suresh Babu', 'text' => 'Trusted store for generations. Never disappoints.'),
            array('name' => 'Kavitha M', 'text' => 'Affordable prices with premium quality.'),
            array('name' => 'Ramesh N', 'text' => 'Wide variety of designs to choose from.'),
            array('name' => 'Sneha P', 'text' => 'The staff is very knowledgeable and helpful.'),
            array('name' => 'Arun K', 'text' => 'Perfect place for all your jewelry needs.'),
        );
        
        // Duplicate for infinite scroll effect
        $all_testimonials = array_merge($testimonials, $testimonials);
        
        foreach ($all_testimonials as $testimonial) : ?>
            <div class="testimonial-card">
                <div class="testimonial-stars">
                    <?php for ($i = 0; $i < 5; $i++) : ?>
                        <svg class="star" viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    <?php endfor; ?>
                </div>
                <p class="testimonial-text">"<?php echo $testimonial['text']; ?>"</p>
                <p class="testimonial-author">— <?php echo $testimonial['name']; ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section bg-gradient">
    <div class="container">
        <div class="text-center animate-fade-in-up">
            <h2 class="section-title">Visit Our Store</h2>
            <p class="section-subtitle">Experience the brilliance of our collection in person</p>
        </div>

        <div class="contact-grid">
            <!-- Contact Info -->
            <div>
                <div class="contact-info">
                    <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem;">Get in Touch</h3>
                    
                    <div class="contact-item">
                        <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                            <p style="font-weight: 500; margin-bottom: 0.25rem;">Address</p>
                            <p style="color: hsl(var(--muted-foreground));">
                                Gold Market Center, Rajaji St<br>
                                Opp. Manikanta Veg Hotel<br>
                                Suryanarayana Puram, Kakinada<br>
                                Andhra Pradesh 533001
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div>
                            <p style="font-weight: 500; margin-bottom: 0.25rem;">Phone</p>
                            <a href="tel:07799644700" style="color: hsl(var(--muted-foreground)); transition: color 0.3s;">077996 44700</a>
                        </div>
                    </div>

                    <div class="contact-item">
                        <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div>
                            <p style="font-weight: 500; margin-bottom: 0.25rem;">Email</p>
                            <a href="mailto:info@svjjewellery.com" style="color: hsl(var(--muted-foreground)); transition: color 0.3s;">info@svjjewellery.com</a>
                        </div>
                    </div>
                </div>

                <!-- Map -->
                <div style="border-radius: 0.75rem; overflow: hidden; box-shadow: var(--shadow-elegant); height: 300px; margin-top: 2rem;">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.073!2d82.2388!3d16.9891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU5JzIwLjgiTiA4MsKwMTQnMTkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style="border: 0;"
                        allowfullscreen
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="SVJ Jewellery Location"
                    ></iframe>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form">
                <h3 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem;">Send us a Message</h3>
                <form id="contact-form">
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-input" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-textarea" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>