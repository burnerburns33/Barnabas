// Toggle menu function
function toggleMenu() {
    var nav = document.querySelector('.nav-links');
    nav.style.width = nav.style.width === '250px' ? '0' : '250px';
}

// Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var nav = document.querySelector('.nav-links');
    var menuButton = document.querySelector('.menu');
    var clickInsideMenu = menuButton.contains(event.target);
    var clickInsideNav = nav.contains(event.target);

    if (!clickInsideMenu && !clickInsideNav && nav.style.width === '250px') {
        nav.style.width = '0';
    }
});

// Ensures the menu toggle only activates when the menu button is clicked
document.querySelector('.menu').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMenu();
});
