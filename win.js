window.addEventListener('scroll', function() {
    const topNav = document.querySelector('.top-nav');
    const secondNav = document.querySelector('.second-nav');
    const banner = document.querySelector('.banner');
    
    // Get the heights
    const bannerHeight = banner.offsetHeight;
    const topNavHeight = topNav.offsetHeight;

    // Check if the page has been scrolled past the top-nav or banner
    if (window.scrollY > topNavHeight || window.scrollY > bannerHeight) {
        secondNav.classList.add('fixed-second-nav');
    } else {
        secondNav.classList.remove('fixed-second-nav');
    }
});

// Ensure that clicking on a tab in the "second-nav" scrolls to the section without it being covered by the fixed second-nav
document.querySelectorAll('.second-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Calculate the height of the second nav whether it is fixed or not
        const secondNavHeight = document.querySelector('.second-nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - secondNavHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


// Initialize the carousel
var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel)
