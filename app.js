let BookCatalogue = [];

function loadBooks(event) {
    // let newDiv = event.target.value
    // console.log(newDiv)
    // let valor = newDiv.value
    // console.log(newDiv)
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/queen`)
        .then((response) => response.json())
        .then((artist) => {
            BookCatalogue = artist;
            console.log(artist
                )
            let artistPage = document.getElementById("pageContent")
            artistPage.innerHTML = ""
            // artist.forEach((artista) => {
                //  console.log(book.img)
                artistPage.innerHTML += `<div class="-fluid" style="background-size:100vh">
                <div class="card" style="width: 18rem;">
  <img src="${artist.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style="color:black">Name: ${artist.name}</h5>
    <p class="card-text" style="color:black">id: ${artist.id}</p>

  </div>
</div>
              </div>`;
            // });

        //     const myDiv = document.getElementById("main");
        //     books.forEach((book) => {
        //         //  console.log(book.img)
        //         myDiv.innerHTML += `<div><img src=${book.img} width="100" height="100"><h4>${book.title}</h4><button onclick="addSkip(event)">SKIP</button><button onclick="addToCart(event)">Add to Cart</button></div>`;
        //     });
        })
        .catch((err) => {
            console.error(err);
        });
}