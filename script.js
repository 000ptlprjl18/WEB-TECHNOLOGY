document.querySelector("form").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill all fields!");
    event.preventDefault(); // stop form submission
  }
});
