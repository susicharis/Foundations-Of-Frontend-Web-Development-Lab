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


// Eighth Requirement

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


// Fifth Requirement & Seventh Requirement (7. Not Working)



    // Form validation
    $('#contactForm').validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 15,
                digits: true
            },
            dob: 'required',
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: 'Please enter your name',
            email: {
                required: 'Please enter your email',
                email: 'Please enter a valid email address'
            },
            phone: {
                required: 'Please enter a phone number',
                minlength: 'Phone number must be at least 10 digits',
                maxlength: 'Phone number cannot exceed 15 digits',
                digits: 'Please enter only digits'
            },
            dob: 'Please select your date of birth',
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
            // Form submission logic
            console.log('Form submitted');
            // Reset the form
            form.reset();
            // Display success notification
            alert('Form submission successful!');
        }
    });
    
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
    
        var formData = new FormData(this); // Create FormData object from form data
    
        // Send AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "submit.php"); // Replace "submit.php" with your server-side script URL
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Request successful
                    document.getElementById("responseMessage").innerHTML = xhr.responseText;
                } else {
                    // Error handling
                    document.getElementById("responseMessage").innerHTML = "Error: " + xhr.status;
                }
            }
        };
        xhr.send(formData); // Send form data as the request body
    });
    


    
    