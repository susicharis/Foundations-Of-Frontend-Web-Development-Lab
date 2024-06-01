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
    toast.classList.add('toast-eight'); // Change the class name here
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    // Nakon 6 sekundi, skloni sa stranice
    setTimeout(() => {
        toast.remove();
    }, 6000);
}


// Sixth Requirement --------------------------------------------------------------------------------------------------------------------------->

function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Function to display posts
  function displayPosts(posts) {
    var container = document.getElementById('posts-container');
    posts.forEach(function(post, index) {
      var title = post.title ? post.title : 'No Title';
      var content = post.content ? post.content : 'No Content';
  
      var postElement = document.createElement('div');
      postElement.className = 'post'; // Assign the 'post' class
  
      var titleElement = document.createElement('h2');
      titleElement.id = 'post-title-' + (index + 1); // Assign unique IDs for titles
      titleElement.className = 'post-title';
      titleElement.textContent = title;
  
      var contentElement = document.createElement('p');
      contentElement.id = 'post-content-' + (index + 1); // Assign unique IDs for content
      contentElement.className = 'post-content';
      contentElement.textContent = content;
  
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
      container.appendChild(postElement);
    });
  }
  
  // Fetch and display posts when the page loads
  window.onload = function() {
    fetchData('../json/data.json')
      .then(data => {
        if (data && data.posts) {
          displayPosts(data.posts);
        } else {
          console.error('Invalid data format:', data);
        }
      });
  };


  // Eleventh Requirement --------------------------------------------------------------------------------------------------------------------------->

  function editEntity() {
    const name = prompt("Enter new name:", document.getElementById('entity-name').textContent);
    const email = prompt("Enter new email:", document.getElementById('entity-email').textContent);
    if (name !== null && email !== null) {
        document.getElementById('entity-name').textContent = name;
        document.getElementById('entity-email').textContent = email;
        alert("Entity edited successfully!");
    } else {
        alert("Edit canceled.");
    }
}

    function deleteEntity() {
        if (confirm("Are you sure you want to delete this entity?")) {
            document.getElementById('entity-container').innerHTML = "<p>No entity to display.</p>";
            alert("Entity deleted successfully!");
        }
}



// Last Requirement - API -------------------------------------------------------------------------------------------------------------------------->

document.getElementById('getWeatherButton').addEventListener('click', getWeather);

async function getWeather() {
    const apiKey = '16045176b40c1804813a4fec3b222ffb';
    const city = document.getElementById('cityInput').value;
    const weatherDiv = document.getElementById('weatherDisplay');

    weatherDiv.innerHTML = 'Loading...';

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        const weather = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        weatherDiv.innerHTML = weather;
    } catch (error) {
        weatherDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}