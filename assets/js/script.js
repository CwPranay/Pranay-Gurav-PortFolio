const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')

    })
}

if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')


const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => {
    n.addEventListener('click',linkAction)
});

const BlurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('blur-header')
                    : header.classList.remove('blur-header')
}
window.addEventListener('scroll',BlurHeader);


const contactForm =document.getElementById('contact-form'),
      contactMessage=document.getElementById('contact-message')


const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_pklsx9b','template_mjgmqhm','#contact-form','xE6KNl07N3Xo5hRkx')
    .then(()=>{
        contactMessage.textContent ='Message sent successfully'
        setTimeout(()=>{
            contactMessage.textContent= ''
        },5000)

        contactForm.reset()
    },()=>{
        contactMessage.textContent ='Message not sent(service error)'
    })

}
contactForm.addEventListener('submit',sendEmail)

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY>=350? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass?.classList.add('active-link')  // Optional chaining prevents errors
        } else {
            sectionsClass?.classList.remove('active-link')
        }
    })
})


const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true 
})

sr.reveal(`.home__data,.home__social,.contact__container,.footer__container`)
sr.reveal(`.home__image`,{origin:'bottom'})
sr.reveal(`.about__data ,.skills__data`,{origin:'left'})
sr.reveal(`.about__image,.skills__content`,{origin:'right'})
sr.reveal(`.services__card,.project__card`,{interval:100})
