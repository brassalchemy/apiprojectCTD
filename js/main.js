// When the button is clicked, run the function
document.getElementById("searchBtn").addEventListener("click", function () {
  
  // Get what the user typed into the input box
  const userInput = document.getElementById("searchInput").value.trim();

  // Stop if input is empty
  if (userInput === "") {
    alert("Please type something to search.");
    return;
  }

  // Turn the input into a safe URL format using encodeURIComponent
  const encodedInput = encodeURIComponent(userInput);

  // Build the API URL using the user's search
  const apiURL = `https://api.artic.edu/api/v1/artworks/search?q=${encodedInput}&query[term][is_public_domain]=true&fields=artist_title,date_display,image_id,title`;

  // Fetch data from the Art Institute API
  fetch(apiURL)
    .then(function (response) {
      return response.json(); // Turn the response into JSON
    })
    .then(function (data) {
      const artworks = data.data; // Get the artworks from the response

      if (artworks.length === 0) {
        alert("No artworks found.");
        return;
      }

      // Take the first artwork result
      const artwork = artworks[0];

      // Create the image URL using the image_id
      const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

      // Show the image and description in the popup
      document.getElementById("artImage").src = imageUrl;
      document.getElementById("artDescription").innerHTML = `
        <strong>Title:</strong> ${artwork.title}<br>
        <strong>Artist:</strong> ${artwork.artist_title || "Unknown"}<br>
        <strong>Date:</strong> ${artwork.date_display || "Unknown"}
      `;

      // Show the popup
      document.getElementById("popup").style.display = "block";
    })
    .catch(function (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    });
});

// When "Enter" is pressed inside the input box, do the same as clicking the button
document.getElementById("searchInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("searchBtn").click();
  }
});

// Close the popup when "X" is clicked
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
  document.getElementById("artImage").src = "";
  document.getElementById("artDescription").textContent = "";
});


  
   


