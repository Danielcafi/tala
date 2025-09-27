// Basic JavaScript for FAQ page
console.log('FAQ page script loaded');

// Handle any missing functionality gracefully
document.addEventListener('DOMContentLoaded', function() {
    console.log('FAQ page DOM loaded');
    
    // Add any missing functionality here
    const searchInput = document.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Search input changed');
        });
    }
});