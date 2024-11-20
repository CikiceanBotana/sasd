document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('splash-video');
    const button = document.getElementById('splash-button');
    const enterButton = document.querySelector('.enter-button');
    
    // Initially disable the button
    enterButton.style.pointerEvents = 'none';
    
    // Function to enable the button and show it
    function enableButton() {
        button.classList.remove('hidden');
        button.classList.add('visible');
        // Wait for the fade-in animation to complete before enabling click
        setTimeout(() => {
            enterButton.style.pointerEvents = 'auto';
        }, 1000); // Matches the fade-in transition duration in CSS
    }
    
    // Show button when video ends
    video.addEventListener('ended', function() {
        enableButton();
    });
    
    // Fallback: Show button after 5 seconds if video doesn't play
    setTimeout(function() {
        if (button.classList.contains('hidden')) {
            enableButton();
        }
    }, 5000);
});