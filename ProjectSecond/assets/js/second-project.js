// First Requirement --------------------------------------------------------------------------------------------------------------------------->

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

// Second Requirement --------------------------------------------------------------------------------------------------------------------------->


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

// Third Requirement --------------------------------------------------------------------------------------------------------------------------->

document.addEventListener("DOMContentLoaded", function() {
    const fontToggle = document.getElementById('fontToggle');

    fontToggle.addEventListener('click', function() {
        // Toggle between italic and normal font by toggling a class on the <body> element
        document.body.classList.toggle('italic-font');
    });
});


// Fourth Requirement --------------------------------------------------------------------------------------------------------------------------->

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


// Eighth Requirement --------------------------------------------------------------------------------------------------------------------------->

let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-check-to-slot"></i> Successfully !';
let errorMsg = '<i class="fa-brands fa-x-twitter"></i> Error Message !';

    
function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    // Nakon 6 sekundi, skloni sa stranice
    setTimeout(()=>{
        toast.remove();
    
    },6000);
}


// Fifth Requirement --------------------------------------------------------------------------------------------------------------------------->

var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener('input', () => {

    if(pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = " none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = " weak.";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }

    else if(pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = " medium.";
        pass.style.borderColor = "orange";
        msg.style.color = "orange";
    }

    else if(pass.value.length >= 8) {
        str.innerHTML = " strong.";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }

});

    // Form validation -------------------------->>>>>>
    $('#contactForm').validate({
        rules: {
            firstname: 'required',
            lastname: 'required',
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            firstname: 'Please enter your first name',
            lastname: 'Please enter your last name',
            email: {
                required: 'Please enter your email',
                email: 'Please enter a valid email address'
            },
            password: {
                required: 'Please enter a password',
                minlength: 'Password must be at least 8 characters long'
            }
        },
        errorPlacement: function(error, element) {
            // Insert error message after the input field's container
            error.insertAfter(element.closest('.form-group'));
            // Add styling to the error message
            error.css('color', '#dc3545'); // Red color
            error.css('font-size', '0.875rem'); // Adjust font size
            error.css('margin-top', '0.5rem'); // Add some space between input and error message
        },
        submitHandler: function(form) {
            // AJAX form submission logic
            $.ajax({
                type: 'POST',
                url: 'your-server-endpoint-url',
                data: $(form).serialize(), // Serialize the form data
                success: function(response) {
                    // Reset the form
                    form.reset();
                    // Display success notification
                    $('#successMessage').text('Form submission successful! Data saved.').show();
                },
                error: function(xhr, status, error) {
                    // Handle errors if any
                    console.error('Error:', error);
                }
            });
        }
    });


    // Tenth Requirement --------------------------------------------------------------------------------------------------------------------------->

   
    
    

// Data Driven Content REQUIREMENT
// script.js

