// Select all cards we want to animate
const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card, .training-card');

// Set initial styles
cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
});

// Intersection Observer options
const observerOptions = {
    threshold: 0.1
};

// Observer callback with stagger effect
const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Delay animation based on index for stagger
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }, index * 150); // 150ms delay between each card

            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
};

// Create observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each card
cards.forEach(card => observer.observe(card));


// ================= CONTACT FORM VALIDATION =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const error = document.getElementById("formError");

        if (name === "" || email === "" || message === "") {
            error.style.color = "Red";
            error.innerText = "All fields are required!";
        } else {
            error.style.color = "lightgreen";
            error.innerText = "Message sent successfully!";
            contactForm.reset();
        }
    });
}
