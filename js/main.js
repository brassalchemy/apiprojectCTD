fetch("https://api.artic.edu/api/v1/artworks/search?q=editorial&query[term][is_public_domain]=true&fields=artist_title,date_display,image_id,thumbnail,title")
       .then(response => response.json()) 
       .then(data => { 
        const myFirstImage = (data)
        console.log(myFirstImage)
     }) 

  document.getElementById("searchBtn").addEventListener("click", () => {
     const input = document.getElementById("searchInput").value.toLowerCase().trim();
     let found = false;
   
     for (const key in artworks) {
       if (key.includes(input)) {
         const { image, description } = artworks[key];
         document.getElementById("artImage").src = image;
         document.getElementById("artDescription").textContent = description;
         document.getElementById("popup").style.display = "block";
         found = true;
         break;
       }
     }
   
     if (!found) {
       alert("Artwork not found. Try: Royal Chair, Copper Alloy, Goldweight and Geometric Shapes");
     }
   });
   
   document.getElementById("searchInput").addEventListener("keydown", function (event) {
     if (event.key === "Enter") {
       document.getElementById("searchBtn").click();
     }
     document.querySelector(".close").addEventListener("click", () => {
          document.getElementById("popup").style.display = "none";
          document.getElementById("artImage").src = "";
          document.getElementById("artDescription").textContent = "";
        });
        

   });
   
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
   


