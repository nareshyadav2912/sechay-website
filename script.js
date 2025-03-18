window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

loadHTML('navbar-container', 'nav.html');
loadHTML('footer-container', 'footer.html')
function sendMail(event) {
    event.preventDefault(); 

  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let company = document.getElementById("company").value;
    let comment = document.getElementById("comment").value;

    
    let emailBody = `Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0AContact: ${contact}%0A%0AComment:%0A${comment}`;

   
    let mailtoLink = `mailto:avulaanand59@gmail.com?subject=New Contact Form Submission&body=${emailBody}`;
    window.location.href = mailtoLink;

 
    document.getElementById("contactForm").reset();

    
    document.getElementById("successMessage").style.display = "block";

   
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 5000); 
}

function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function showService(serviceId) {
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(serviceId).classList.add('active');
}
window.onload = () => {
    const serviceId = window.location.hash.replace('#', '') || 'iam';
    showService(serviceId);
}
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

loadHTML('navbar-container', 'nav.html');
loadHTML('footer-container', 'footer.html');
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();