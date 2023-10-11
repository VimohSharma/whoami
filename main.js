/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{navMenu.classList.add('show-menu')})
}

if(navClose){
    navClose.addEventListener('click',()=>{navMenu.classList.remove('show-menu')})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = ()=>{
    const header =document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),contactMessage = document.getElementById('contact-message')

const sendEmail=(e) =>{
    e.preventDefault()
    //ServiceID, TemplateID, #form, publicKey
    emailjs.sendForm('service_d5ttbdy','template_502487f','contact-form','MAjzxzB06DmEXYOGE')
    .then(()=>{
        //Show sent messages
        contactMessage.textContent = 'Message sent successfully!'
        //Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        }, 5000)
        // Clear input fields
        contactForm.reset()
    },()=>{
        //show error message
        contactMessage.textContent = 'Message not sent (Error - Service Error)'
    })
}
contactForm.addEventListener('submit',sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId=current.getAttribute('id'),
        sectionsClass=document.querySelector('.nav_menu a[href="#' + sectionId + '"]')

        if(scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else
        {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400

})
sr.reveal('.home_fill, .about_image, .contact_mail',{origin:'right'})
sr.reveal('.home_name, .home_info, .about_container .section__title-1, .about_info, .contact_social, .contact_data', {origin:'left'})
sr.reveal('.services_card, .projects_card', {interval: 100})