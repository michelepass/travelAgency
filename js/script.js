// Scroll-triggered fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
        observer.observe(el);
    });
});

// Simple contact form handler
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Thank you! We\'ll be in touch.';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    e.target.reset();
}
