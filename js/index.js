const navIconEl = document.querySelector('.nav-icons')
const headerEl = document.querySelector('.header')

navIconEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})


// scroll behavior

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const href = link.getAttribute('href');

        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        if (href !== '#' && href.startsWith("#")) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: "smooth" })
        }

        if (link.classList.contains('nav-link')) {
            headerEl.classList.toggle('nav-open')
        }
    })
})


// Navigation sticky

const sectionHeroEl = document.querySelector('.hero-section')

const obs = new IntersectionObserver(function (enteries) {
    const ent = enteries[0]
    console.log(ent)
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky')
    }

    if (ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
})

obs.observe(sectionHeroEl)