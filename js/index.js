const navIconEl = document.querySelector('.nav-icons')
const headerEl = document.querySelector('.header')

navIconEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open')
})


// scroll behavior

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        
        if(href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if(href !== '#' && href.startsWith("#")) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({behavior: "smooth"})
        }
        
        if(link.classList.contains('nav-link')) {
            headerEl.classList.toggle('nav-open')
        }
    })
})