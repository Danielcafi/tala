// Tala Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('#mobileMenu');
    const mobileMenuOverlay = document.querySelector('#mobileMenuOverlay');
    const mobileMenuClose = document.querySelector('#mobileMenuClose');
    
    if (menuToggle && mobileMenu && mobileMenuOverlay && mobileMenuClose) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
        
        mobileMenuOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close menu when clicking on menu links
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-list a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    // Customer Reviews Carousel
let currentReviewIndex = 0; // Start with Eleuterio (first customer)
const reviews = [
    {
        name: "Eleuterio",
        location: "Philippines",
        quote: "\"Tala is kind, understanding and giving. She knows what we're going through and is always willing to help out...I've tried other loaning apps and websites, but they ask for way too much information. With Tala, they only ask me for one ID.\"",
        image: "Reviews_Image_4-Eleuterio.webp"
    },
    {
        name: "Aimee",
        location: "Philippines", 
        quote: "\"It's so easy to get a loan from Tala. I can always count on it. Tala is really like a companion that supports me and helps me achieve my goals.\"",
        image: "Reviews_Image_6-Aimee.webp"
    },
    {
        name: "Raquel",
        location: "Philippines",
        quote: "\"With Tala, I don't just get to help myself, I get to help other people too. I'm able to help friends in need by referring them to the app.\"",
        image: "Reviews_Image_2-Raquel.webp"
    }
];

function changeReview(direction) {
    console.log('Changing review, direction:', direction, 'current index:', currentReviewIndex);
    currentReviewIndex += direction;
    
    if (currentReviewIndex >= reviews.length) {
        currentReviewIndex = 0;
    } else if (currentReviewIndex < 0) {
        currentReviewIndex = reviews.length - 1;
    }
    
    console.log('New index:', currentReviewIndex);
    updateReviewDisplay();
}

function updateReviewDisplay() {
    const review = reviews[currentReviewIndex];
    console.log('Updating display for:', review.name, 'image:', review.image);
    
    const locationTag = document.querySelector('.location-tag');
    const customerImg = document.querySelector('.customer-img');
    const customerName = document.querySelector('.customer-name');
    const customerQuote = document.querySelector('.customer-quote');
    const reviewCard = document.querySelector('.review-card-main');
    
    console.log('Found elements:', {
        locationTag: !!locationTag,
        customerImg: !!customerImg,
        customerName: !!customerName,
        customerQuote: !!customerQuote,
        reviewCard: !!reviewCard
    });
    
    // Add fade out effect
    if (reviewCard) {
        reviewCard.style.opacity = '0.7';
        reviewCard.style.transform = 'translateX(-20px)';
    }
    
    setTimeout(() => {
        if (locationTag) locationTag.textContent = review.location;
        if (customerImg) {
            customerImg.src = review.image;
            customerImg.alt = review.name;
            console.log('Updated image src to:', review.image);
        }
        if (customerName) customerName.textContent = review.name;
        if (customerQuote) {
            // Update the quote text content, preserving the quote marks
            customerQuote.innerHTML = `
                <div class="quote-mark">"</div>
                ${review.quote}
                <div class="quote-mark">"</div>
            `;
        }
        
        // Add fade in effect
        if (reviewCard) {
            reviewCard.style.opacity = '1';
            reviewCard.style.transform = 'translateX(0)';
        }
    }, 250);
}

// Make functions globally accessible immediately
window.changeReview = changeReview;
window.updateReviewDisplay = updateReviewDisplay;

// Initialize the carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing carousel');
    updateReviewDisplay();
    
    console.log('Carousel initialized, current index:', currentReviewIndex);
    console.log('Total reviews:', reviews.length);
    console.log('Functions available:', { 
        changeReview: typeof window.changeReview, 
        updateReviewDisplay: typeof window.updateReviewDisplay 
    });
});

// Floating Chat Button
function openChat() {
    alert('Chat functionality would open here!');
}

// Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Hero indicators functionality
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            // Remove active class from all indicators
            indicators.forEach(ind => ind.classList.remove('active'));
            // Add active class to clicked indicator
            this.classList.add('active');
            
            // Here you could add carousel functionality
            // For now, just visual feedback
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .story-card, .news-card, .trust-feature');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Phone mockup interaction (if element exists)
    const phoneScreen = document.querySelector('.phone-screen');
    if (phoneScreen) {
        phoneScreen.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-50%) scale(1.05)';
        });
        
        phoneScreen.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-50%) scale(1)';
        });
    }
    
    // Parallax effect for hero section (if elements exist)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const womanImage = document.querySelector('.woman');
        const phoneMockup = document.querySelector('.phone-mockup');
        
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * -0.5;
            if (womanImage) {
                womanImage.style.transform = `translateY(${rate}px)`;
            }
            if (phoneMockup) {
                phoneMockup.style.transform = `translateY(calc(-50% + ${rate * 0.3}px))`;
            }
        }
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Video functionality
    const videoWrapper = document.getElementById('videoWrapper');
    const videoThumbnail = document.getElementById('videoThumbnail');
    const playButton = document.getElementById('playButton');
    const videoPlayer = document.getElementById('videoPlayer');
    
    if (videoWrapper && videoThumbnail && playButton && videoPlayer) {
        videoWrapper.addEventListener('click', function() {
            // Replace the thumbnail with the video iframe
            videoThumbnail.style.display = 'none';
            playButton.style.display = 'none';
            
            // Position the iframe exactly where the thumbnail was
            videoPlayer.style.display = 'block';
            videoPlayer.style.position = 'absolute';
            videoPlayer.style.top = '0';
            videoPlayer.style.left = '0';
            videoPlayer.style.width = '100%';
            videoPlayer.style.height = '100%';
            videoPlayer.style.zIndex = '2';
            
            // Load the video with autoplay
            videoPlayer.src = 'https://www.youtube.com/embed/31ShyutJruo?autoplay=1&controls=1&rel=0&playsinline=0&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Ftala.ph&widgetid=1&forigin=https%3A%2F%2Ftala.ph%2F&aoriginsup=1&vf=1';
        });
    }
    
    // Button ripple effects
    const buttons = document.querySelectorAll('.btn, .button, .cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
    
    // Section animations
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => sectionObserver.observe(section));
});

// Add CSS for animations and effects
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .header.scrolled {
        background: rgba(0, 168, 168, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .phone-screen {
        transition: transform 0.3s ease;
    }
    
    .woman {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);
