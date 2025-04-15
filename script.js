// script.js

// Ensure functions are available in the global scope
function trackDownload(item) {
    // Log the download event to the console for debugging
    console.log(`Downloaded: ${item}`);

    // Track with Google Analytics (if available)
    if (typeof gtag === 'function') {
        try {
            gtag('event', 'download', {
                'event_category': 'Resource',
                'event_label': item,
                'value': 1
            });
            console.log(`Google Analytics tracked download: ${item}`);
        } catch (error) {
            console.error(`Error tracking download in Google Analytics: ${error}`);
        }
    } else {
        console.warn('Google Analytics (gtag) not available for tracking download');
    }
}

function trackClick(action) {
    // Log the click event to the console for debugging
    console.log(`Clicked: ${action}`);

    // Track with Google Analytics (if available)
    if (typeof gtag === 'function') {
        try {
            gtag('event', 'click', {
                'event_category': 'Button',
                'event_label': action,
                'value': 1
            });
            console.log(`Google Analytics tracked click: ${action}`);
        } catch (error) {
            console.error(`Error tracking click in Google Analytics: ${error}`);
        }
    } else {
        console.warn('Google Analytics (gtag) not available for tracking click');
    }
}

// Ensure the script initializes properly
document.addEventListener('DOMContentLoaded', function() {
    console.log('script.js loaded and ready');

    // Optional: Check if Google Analytics is loaded
    if (typeof gtag !== 'function') {
        console.warn('Google Analytics (gtag) is not loaded. Tracking will be limited to console logs.');
    }
});