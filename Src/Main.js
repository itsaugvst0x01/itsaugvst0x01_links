// Main.js — minimal, clean behavior

// Optional: smoother fade-in triggering when scrolling
// (Keeps everything feeling creamy and Apple-like)

document.addEventListener("DOMContentLoaded", () => {
    const fadeItems = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    fadeItems.forEach(item => observer.observe(item));
});
