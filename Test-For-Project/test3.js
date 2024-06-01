const data = [
  {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com"
  }
];

function displayEntity() {
  const container = document.getElementById('entity-container');
  container.innerHTML = `
      <p>ID: ${data[0].id}</p>
      <p>Name: ${data[0].name}</p>
      <p>Email: ${data[0].email}</p>
      <button onclick="editEntity(${data[0].id})">Edit</button>
      <button onclick="deleteEntity(${data[0].id})">Delete</button>
  `;
}

function editEntity(id) {
  const name = prompt("Enter new name:", data[0].name);
  const email = prompt("Enter new email:", data[0].email);
  if (name && email) {
      alert("Entity edited successfully!");
      // Simulate updating the entity
      data[0].name = name;
      data[0].email = email;
      displayEntity();
  } else {
      alert("Edit canceled.");
  }
}

function deleteEntity(id) {
  if (confirm("Are you sure you want to delete this entity?")) {
      alert("Entity deleted successfully!");
      // Simulate deleting the entity
      data.splice(0, 1);
      document.getElementById('entity-container').innerHTML = "<p>No entity to display.</p>";
  }
}

// Initial display
displayEntity();