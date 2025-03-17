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

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(event) {
    if (event) {
        event.stopPropagation();
    }
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        modal.style.display = 'none';
    });
}

function scrollToServices() {
    document.getElementById('career').scrollIntoView({ behavior: 'smooth' });
}
window.onclick = function (event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
};
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

loadHTML('navbar-container', 'nav.html');
loadHTML('footer-container', 'footer.html');