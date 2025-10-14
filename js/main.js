async function fetchIndependentData() { 
    try {
        const firstPromise = await fetch('https://api.artic.edu/api/v1/artworks/275405')
        const secondPromise = await fetch('https://api.artic.edu/api/v1/artworks/129884')
        const [firstPhoto, secondPhoto] = await Promise.all([firstPromise, secondPromise])
        console.log(firstPhoto, secondPhoto)    
    } catch(error){ 
        console.log("Uh oh something went wrong", + error)
    }
}

// fetch("https://api.artic.edu/api/v1/artworks") 
   //  .then(response => response.json()) // capture response and turn into json format
   //  .then(data => { 
       //  const myImages = data;
       //  console.log(myImages);
   //  })
    // .catch(error => console.error('Error', error))
    

