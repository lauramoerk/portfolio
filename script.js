document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide all secondary navigations
        document.querySelectorAll('.secnav').forEach(nav => {
            nav.style.display = 'none';
        });

        // Hide all galleries
        document.querySelectorAll('.gallery-container').forEach(gallery => {
            gallery.style.display = 'none';
        });

        // Show the targeted secondary navigation, if applicable
        var targetClass = this.getAttribute('data-target');
        if (targetClass !== 'none') {
            var targetNav = document.querySelector('.' + targetClass);
            if (targetNav) {
                targetNav.style.display = 'block';
            }
        }
    });
});

document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide all galleries
        document.querySelectorAll('.gallery-container').forEach(gallery => {
            gallery.style.display = 'none';
        });

        // Show the targeted gallery
        var targetGallery = this.getAttribute('data-gallery');
        var gallery = document.getElementById(targetGallery);
        if (gallery) {
            gallery.style.display = 'block';
        }
    });
});