// ! navbar script 
document.getElementById('navbarToggle').addEventListener('click', function () {
    document.getElementById('navbarCollapse').classList.toggle('hidden'); // Toggle visibility
    document.getElementById('navbarCollapse').classList.toggle('block'); // Add block when visible
});

document.getElementById('navbarClose').addEventListener('click', function () {
    document.getElementById('navbarCollapse').classList.add('hidden'); // Hide navbar when close button is clicked
    document.getElementById('navbarCollapse').classList.remove('block'); // Remove block class
});


//! script for flip 
document.addEventListener('DOMContentLoaded', function () {
    const photoImage1 = document.getElementById('photo-image1');
    const photoImage2 = document.getElementById('photo-image2');
    const artworkImage1 = document.getElementById('artwork-image1');
    const artworkImage2 = document.getElementById('artwork-image2');

    // Function to flip images for both divs
    function flipImages(image1, image2) {
        // Show next image and hide the current image after the flip
        image1.classList.toggle('hidden');
        image2.classList.toggle('hidden');

        // Add the flip effect to the visible image
        image2.classList.add('flip-x');

        // Remove the flip effect after the duration to reset the state
        setTimeout(() => {
            image2.classList.remove('flip-x');
        }, 500); // Duration of the flip animation
    }

    // Set interval to flip images every 2 seconds for both sets
    setInterval(() => {
        flipImages(photoImage1, photoImage2);  // Flip images in the "Photo" div
        flipImages(artworkImage1, artworkImage2);  // Flip images in the "Artwork 1" div
    }, 2000); // Flip every 2 seconds
});