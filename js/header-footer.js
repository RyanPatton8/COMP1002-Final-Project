const mainHeader = document.querySelector("#main-header");
const mainFooter = document.querySelector("#main-footer");

mainHeader.innerHTML = `
<div class="Main-Logo">
    <img src="Images/Logo/rednintendolarge.png" alt="Large Nintendo Logo">
</div>
<nav class="nav-bar">
    <a href="index.html">Home</a>
    <a href="aboutme.html">About</a>
    <a href="ContactUs.html" id="contact-us">Contact Us</a>
    <a href="products.html">Products</a>
</nav>
`

mainFooter.innerHTML = `
<div id="footer-logo">
    <img src="Images/Logo/rednintendosmall.png" alt="Small Nintendo Logo">
</div>
<nav id="footer-nav">
    <a href="index.html">Home</a>
    <a href="aboutme.html">About</a>
    <a href="ContactUs.html">Contact Us</a>
    <a href="products.html">Products</a>
</nav>

<p id="footer-trademark">Nintendo&reg;</p>
`