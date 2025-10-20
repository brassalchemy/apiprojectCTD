fetch("https://api.artic.edu/api/v1/artworks/search?q=Ghanal&query[term][is_public_domain]=true&fields=artist_title,date_display,image_id,thumbnail,title") // Making HTTP GET request to the Art Insitute of Chicago API search query is Ghana 
       .then(response => response.json()) // Converting response to JSON format 
       .then(data => {  
        const imageData = (data) // Assigning response object to varible imageData 
        console.log(imageData) // Print full data to the browser 
     }) 

     const artworks = {
      "royal chair": {
        image: "https://www.artic.edu/iiif/2/d5a271dc-cb9e-4040-561d-158956db94d4/full/843,/0/default.jpg",
        description: "A Royal Chair from Akonkromfi, symbolizing leadership and cultural heritage in West Africa."
      },
      "copper alloy": {
        image: "https://www.artic.edu/iiif/2/15df337b-d341-eb4f-0a5f-72dc3a98d9fe/full/843,/0/default.jpg",
        description: "An intricately crafted piece made from copper alloy, showcasing the artisan's skill and historical metalwork."
      },
      "goldweight and geometric shapes": {
        image: "https://www.artic.edu/iiif/2/11780ee9-eab6-fe12-122c-f49fdd494d57/full/843,/0/default.jpg",
        description: "A traditional goldweight used for measuring gold dust, carved into a symbolic geometric shape."
      }
    };

  document.getElementById("searchBtn").addEventListener("click", () => { // Select the element with the ID "searchBtn" and add 'click' event listener 
     const input = document.getElementById("searchInput").value.toLowerCase().trim(); // When button is clicked take the value in the input field (text), and make searching case insensitive and remove extra spaces before or after text
     let found = false; 
   
     for (const key in artworks) { // Get user's search and compare it to the current key
       if (key.includes(input)) { // Check if key contains user input 
         const { image, description } = artworks[key]; // Object destructuring to extract image and description from associated artwork 
         document.getElementById("artImage").src = image; // Set src of the image to display found artwork 
         document.getElementById("artDescription").textContent = description; // Fill a paragraph with artworks description
         document.getElementById("popup").style.display = "block"; // Make hidden popup visible 
         found = true; // Flag to main code 'match found'
         break; // Exit loop 
       }
     }
   
     if (!found) { // If artwork is not found alert user 
       alert("Artwork not found. Try: Royal Chair, Copper Alloy, Goldweight and Geometric Shapes");
     }
   });
   
   document.getElementById("searchInput").addEventListener("keydown", function (event) { // Targeting id "searchBtn" and adding 'keydown' event listener to check for a key being pressed 
     if (event.key === "Enter") { // Check if the user pressed 'Enter or clicked to submit
       document.getElementById("searchBtn").click(); 
     }
     document.querySelector(".close").addEventListener("click", () => { // Add click listener to the element with class "close"
          document.getElementById("popup").style.display = "none"; // Hide pop up when 'X' is clicked
          document.getElementById("artImage").src = ""; // Clear image from pop up
          document.getElementById("artDescription").textContent = ""; // Clear description text 
        }); 
        

   }); 
  
   


