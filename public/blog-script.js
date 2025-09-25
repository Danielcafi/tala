// Blog Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Category Dropdown Toggle
    const dropdown = document.querySelector('.dropdown');
    const select = document.querySelector('.select');
    const menu = document.querySelector('.menu');
    
    if (dropdown && select && menu) {
        select.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
        
        // Handle menu item clicks
        const menuItems = menu.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                const selectedText = this.textContent;
                document.querySelector('.selected').textContent = selectedText;
                dropdown.classList.remove('active');
                
                // Filter posts based on category
                filterPostsByCategory(selectedText);
            });
        });
    }
    
    // Search Functionality
    const searchBtn = document.querySelector('.search-btn-icon');
    const searchForm = document.querySelector('.search-form');
    const searchField = document.querySelector('.search-field');
    
    if (searchBtn && searchForm && searchField) {
        searchBtn.addEventListener('click', function() {
            searchForm.classList.toggle('active');
            if (searchForm.classList.contains('active')) {
                searchField.focus();
            }
        });
        
        // Handle search form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchField.value.trim();
            if (searchTerm) {
                searchPosts(searchTerm);
            }
        });
        
        // Close search when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
                searchForm.classList.remove('active');
            }
        });
    }
    
    // Load More Button
    const loadMoreBtn = document.querySelector('.button-load-more');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            loadMorePosts();
        });
    }
    
    // Category Links Filtering
    const categoryLinks = document.querySelectorAll('.category-links-inner a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            categoryLinks.forEach(l => l.classList.remove('current'));
            
            // Add active class to clicked link
            this.classList.add('current');
            
            // Filter posts
            const category = this.textContent;
            filterPostsByCategory(category);
        });
    });
    
    // Post Card Hover Effects
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Lazy Loading for Images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Filter Posts by Category
function filterPostsByCategory(category) {
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
        const postCategories = post.querySelectorAll('.post-categories a');
        let hasCategory = false;
        
        if (category === 'All') {
            hasCategory = true;
        } else {
            postCategories.forEach(cat => {
                if (cat.textContent === category) {
                    hasCategory = true;
                }
            });
        }
        
        if (hasCategory) {
            post.style.display = 'block';
            post.style.opacity = '1';
        } else {
            post.style.opacity = '0.3';
            post.style.transform = 'scale(0.95)';
        }
    });
    
    // Add animation effect
    setTimeout(() => {
        posts.forEach(post => {
            if (post.style.opacity === '0.3') {
                post.style.display = 'none';
            } else {
                post.style.transform = 'scale(1)';
            }
        });
    }, 300);
}

// Search Posts Function
function searchPosts(searchTerm) {
    const posts = document.querySelectorAll('.post-card');
    const searchLower = searchTerm.toLowerCase();
    
    posts.forEach(post => {
        const title = post.querySelector('.entry-title a');
        const categories = post.querySelectorAll('.post-categories a');
        
        let matchesSearch = false;
        
        // Check title
        if (title && title.textContent.toLowerCase().includes(searchLower)) {
            matchesSearch = true;
        }
        
        // Check categories
        categories.forEach(cat => {
            if (cat.textContent.toLowerCase().includes(searchLower)) {
                matchesSearch = true;
            }
        });
        
        if (matchesSearch) {
            post.style.display = 'block';
            post.style.opacity = '1';
        } else {
            post.style.display = 'none';
        }
    });
    
    // Show search results message
    showSearchResults(searchTerm);
}

// Load More Posts Function
function loadMorePosts() {
    const loadMoreBtn = document.querySelector('.button-load-more');
    const loadingIndicator = loadMoreBtn.querySelector('.loading-indicator');
    
    // Show loading state
    loadMoreBtn.classList.add('loading');
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        // Hide loading state
        loadMoreBtn.classList.remove('loading');
        loadMoreBtn.disabled = false;
        
        // Show success message
        showNotification('More posts loaded successfully!', 'success');
        
        // In a real application, you would make an AJAX call here
        // to fetch more posts from the server
    }, 2000);
}

// Show Search Results Message
function showSearchResults(searchTerm) {
    const existingMessage = document.querySelector('.search-results-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'search-results-message';
    message.style.cssText = `
        background: #e3f2fd;
        border: 1px solid #2196f3;
        border-radius: 8px;
        padding: 15px 20px;
        margin: 20px 0;
        color: #1565c0;
        font-weight: 500;
        text-align: center;
    `;
    message.textContent = `Search results for: "${searchTerm}"`;
    
    const postsGrid = document.querySelector('.posts-grid');
    if (postsGrid) {
        postsGrid.insertBefore(message, postsGrid.firstChild);
    }
}

// Show Notification Function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Mobile Menu Toggle (if needed)
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
initMobileMenu();

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #00BFA5;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    
    scrollBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
addScrollToTopButton();
