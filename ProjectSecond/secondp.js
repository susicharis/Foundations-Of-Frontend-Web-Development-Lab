// First

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
    const buttons = document.querySelectorAll('.second-req-button');

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
    const fontToggle = document.getElementById('fontToggle');

    fontToggle.addEventListener('click', function() {
        // Toggle between italic and normal font by toggling a class on the <body> element
        document.body.classList.toggle('italic-font');
    });
});


// Fourth Requirement

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        
        if (accordionContent.style.display === 'block') {
          accordionContent.style.display = 'none';
        } else {
          accordionContent.style.display = 'block';
        }
      });
    });
  });