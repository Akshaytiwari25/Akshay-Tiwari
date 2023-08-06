// script.js

// Function to apply animations to elements
function applyAnimations() {
    // Animate profile image on load
    const profileImg = document.querySelector(".profile-img");
    profileImg.style.opacity = "0";
    profileImg.style.transform = "translateY(20px)";
    profileImg.style.transition = "opacity 1s ease, transform 1s ease";

    // Animate profile image when page loads
    window.addEventListener("load", function () {
        profileImg.style.opacity = "1";
        profileImg.style.transform = "translateY(0)";
    });

    // Animate project images on hover
    const projectImages = document.querySelectorAll(".project-images img");
    projectImages.forEach(image => {
        image.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        image.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
}

// Call the animation function when the page loads
window.onload = applyAnimations;
