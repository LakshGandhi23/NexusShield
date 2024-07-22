document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a.transition');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');

            document.querySelector('.container').classList.add('fade-out');

            setTimeout(function() {
                window.location.href = href;
            }, 1000); // Match the duration of the fade-out animation
        });
    }
});