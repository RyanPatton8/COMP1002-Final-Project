
const slogan = document.querySelector("#slogan");

window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY; // Get current scroll position
    const windowHeight = window.innerHeight; // Get the viewport height
    const windowWidth = window.innerWidth; // Get the viewport width
    const docHeight = document.documentElement.scrollHeight; // Get the total height of the document
        
    const totalScrollableDistance = docHeight - windowHeight; // Total scrollable distance
    let scrollPercentage = (scrollPosition / totalScrollableDistance) * 100; // Calculate scroll percentage
        
    // If the scroll percentage is more than 20, scale up the slogan
    if(windowWidth > 1024 && scrollPercentage > 20) {
        slogan.style.transform = "scale(1.3)";
    }
    else if(windowWidth > 950 && scrollPercentage > 20) {
        slogan.style.transform = "scale(1.2)";
    }
    else if(windowWidth > 640) {
        if(scrollPercentage > 20) {
            slogan.style.transform = "scale(1)";
        } else {
            slogan.style.transform = "scale(.8)";
        }
    }
    //If not and the element isn't already set back to 1 do it
    else if (slogan.style.transform != "scale(1)"){
        slogan.style.transform = "scale(1)"; 
    }
});
