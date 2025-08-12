document.addEventListener('DOMContentLoaded', () => {
    let counter = 1;
    const totalSlides = 3;
    
    // Auto slide function
    function autoSlide() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > totalSlides) {
            counter = 1;
        }
    }
    
    // Set interval for auto sliding - change slide every 5 seconds
    let timer = setInterval(autoSlide, 5000);
    
    // Reset timer when manually changing slides
    const manualBtns = document.querySelectorAll('.manual_btn');
    manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            clearInterval(timer);
            counter = index + 1;
            timer = setInterval(autoSlide, 5000);
        });
    });
    
    // Pause slideshow when not in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                clearInterval(timer);
            } else {
                timer = setInterval(autoSlide, 5000);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe the slider
    const slider = document.querySelector('.slider');
    if (slider) {
        observer.observe(slider);
    }
});