let BookCatalogue = [];

function loadBooks(event) {
    let newDiv = event.target.value
    console.log(newDiv)
    let valor = newDiv.value
    console.log(newDiv)
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
                artistPage.innerHTML += `<div class="-fluid">
                <a href="album.html"
                  ><img class="" src="${artist.picture}" alt="..." width="300" height="400" />
                </a>
                <div class="albumText">
                  <p><b> Name:${artist.name}</p>
                  <p>id:${artist.id}</p>
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