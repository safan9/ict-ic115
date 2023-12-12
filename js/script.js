function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " nav--open";
    } else {
        x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
}

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const testimonials = document.querySelectorAll(".testimonial");

    let currentIndex = 0;

    function updateSlider() {
        const newTransformValue = -currentIndex * 100 + "%";
        slider.style.transform = "translateX(" + newTransformValue + ")";
    }

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
        showTestimonial(currentIndex);
    }

    // Add event listeners for next and previous buttons
    document.querySelector("#nextBtn").addEventListener("click", nextTestimonial);
    document.querySelector("#prevBtn").addEventListener("click", prevTestimonial);
});
