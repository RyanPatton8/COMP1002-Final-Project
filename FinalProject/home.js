
const element = document.getElementById('slogan');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Get current scroll position
    const windowHeight = window.innerHeight; // Get the viewport height
    const docHeight = document.documentElement.scrollHeight; // Get the total height of the document
        
    const totalScrollableDistance = docHeight - windowHeight; // Total scrollable distance
    const scrollPercentage = (scrollPosition / totalScrollableDistance) * 100; // Calculate scroll percentage
        
    // If the scroll percentage is more than 50, scale up the element
    if(window.innerWidth > 1024) {
        if(scrollPercentage > 20) {
            element.style.transform = 'scale(1.6)'; // Adjust scale value as needed
        } else {
            element.style.transform = 'scale(1)'; // Return to original scale if less than 50%
        }
    }
    else if(window.innerWidth > 960) {
        if(scrollPercentage > 20) {
            element.style.transform = 'scale(1.2)'; // Adjust scale value as needed
        } else {
            element.style.transform = 'scale(1)'; // Return to original scale if less than 50%
        }
    }
    else if(window.innerWidth > 640) {
        if(scrollPercentage > 20) {
            element.style.transform = 'scale(1)'; // Adjust scale value as needed
        } else {
            element.style.transform = 'scale(.8)'; // Return to original scale if less than 50%
        }
    }
    else {
        element.style.transform = 'scale(1)'; // Return to original scale if less than 50%
    }
});
