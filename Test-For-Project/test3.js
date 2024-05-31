function fetchData(url) {
    return fetch(url)
      .then(response => response.json())
      .catch(error => console.error('Error fetching data:', error));
  }

  // Function to display posts
  function displayPosts(posts) {
    var container = document.getElementById('posts-container');
    posts.forEach(function(post) {
      var postElement = document.createElement('div');
      postElement.innerHTML = '<h2>' + post.title + '</h2><p>' + post.content + '</p>';
      container.appendChild(postElement);
    });
  }

  // Fetch and display posts when the page loads
  window.onload = function() {
    fetchData('data.json')
      .then(data => {
        if (data && data.posts) {
          displayPosts(data.posts);
        } else {
          console.error('Invalid data format:', data);
        }
      });
  };