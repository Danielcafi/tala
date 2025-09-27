// Script for FAQ page theming
console.log('FAQ theming script loaded');

// Basic functionality for FAQ page
document.addEventListener('DOMContentLoaded', function() {
    console.log('FAQ theming script DOM loaded');
    
    // Add any theming-specific functionality here
    const searchForm = document.querySelector('form[role="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            console.log('Search form submitted');
        });
    }
});
