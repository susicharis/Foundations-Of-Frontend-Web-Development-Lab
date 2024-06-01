/* Tenth Requirement ------------------------------------------------------------------------------------------------------------------ */
const parentContainer = document.querySelector('.read-more-container');

// Postavljanje kursora na pointer za element sa klasom .read-more-newpage
const readMoreNewPage = document.querySelector('.read-more-newpage');
readMoreNewPage.style.cursor = 'pointer';

// Dodavanje event listener-a na klik za parentContainer
parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');

    // Provera da li je kliknut element .read-more-btn
    if (isReadMoreBtn) {
        const currentText = current.parentNode.querySelector('.read-more-text');
        currentText.classList.toggle('read-more-text--show');
        current.textContent = current.textContent.includes('View More') ? "View Less" : "View More";
    }
});

// Funkcija za preusmeravanje na drugu stranicu
function redirectToPage() {
    console.log("Redirecting...");
    window.location.href = "../html/viewmore.html";
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
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
    
        // Collect form data
        let formData = new FormData(this);
    
        // Create an AJAX request
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true); // Placeholder URL for demonstration
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) { // 201 Created
                // Show the toast message
                let toast = document.getElementById("toast");
                toast.className = "toast show";
                setTimeout(function() {
                    toast.className = toast.className.replace("show", "");
                }, 3000);
            }
        };
    
        // Simulating data handling by sending the form data as JSON
        let object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        xhr.send(JSON.stringify(object));
    });