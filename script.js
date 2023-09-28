document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");
  const nameInput = document.getElementById("name-input");
  const submitButton = document.getElementById("submit-button");
  const nameField = document.getElementById("name");

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";
    nameInput.style.display = "block";
  });

  submitButton.addEventListener("click", function () {
    const userName = nameField.value;
    if (userName) {
      // Redirect to a new page with a link
      window.location.href = "https://barikhemanta.github.io/WeatherWebApp/";
    }
  });
});
