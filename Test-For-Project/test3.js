// First Requirement

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.image-container img').forEach(image => {
        image.onclick = () => {
            document.querySelector('.popup-image').style.display = 'block'; 
            document.querySelector('.popup-image img').src = image.getAttribute('src');
        }
    });

    document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none'; 
    }
});



// Second Requirement

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.toggle('hidden');
            }
        });
    });
});

// Third Requirement

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});


// Fourth Requirement

document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            accordionItem.classList.toggle('active');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            accordionContent.classList.toggle('active');
        });
    });
});
