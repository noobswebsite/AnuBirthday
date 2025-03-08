document.addEventListener("DOMContentLoaded", () => {
    // Set countdown target (Epoch time in seconds)
    const targetDate = Math.floor(new Date("2025-08-10T23:59:59").getTime() / 1000);

    // Initialize FlipDown
    new FlipDown(targetDate)
        .start()
        .ifEnded(() => {
            // Redirect to another page when countdown ends
            window.location.href = "assets/html/newpage.html"; // Change this to your target page
        });
     // Force Flipdown Width Change After Initialization
    setTimeout(() => {
        const flipdown = document.querySelector(".flipdown");
        flipdown.style.width = "600px"; // Fixed width
        flipdown.style.height = "110px"; // Adjust height if necessary
        flipdown.style.overflow = "visible"; // Fix overflow
    }, 100); // Wait until Flipdown renders
});
