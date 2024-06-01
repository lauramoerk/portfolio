document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide all secondary navigations
        document.querySelectorAll('.secondary-nav').forEach(nav => {
            nav.style.display = 'none';
        });

        // Show the targeted secondary navigation
        var targetClass = this.getAttribute('data-target');
        var targetNav = document.querySelector('.' + targetClass);
        if (targetNav) {
            targetNav.style.display = 'block';
        }
    });
});