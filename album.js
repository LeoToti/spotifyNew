window.onload = function(){
	const param = new URLSearchParams(window.location.search)
	const id = param.get('id')
	albumDetails(id);
}



let albums = [];

		const albumDetails = function(id){

		fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
		.then(res => res.json())
		.then(album =>{
			console.log();
		const music = document.getElementById('daynamic');
		music.innerHTML=
			`<div class="col-12 col-lg-3 offset-lg-1 py-5">
              <div class="d-flex justify-content-center">
                <img
                  src="${album.cover}"
                  class="img-fluid shadow p-2 rounded"
                />
              </div>
              <div class="album-label py-4">
                <h2 id="album-title>${album.title}(Deluxe Edition 2011 Remaster)</h2>
                <a
                  class="artist d-flex justify-content-center text-white-50"
                  href="artistPlusSidebar.html"
                  >Queen</a
                >

                <div class="d-flex justify-content-center py-3">
                  <button type="button" class="play-btn btn btn-success">
                    PLAY
                  </button>
                </div>
                <div class="d-flex justify-content-center">
                  <span class="label year text-white-50 px-1">1995 </span>
                  <span class="label text-white-50"
                    ><i id="icons-small" class="bi bi-dot text-white-50"></i
                  ></span>
                  <span class="label text-nowrap text-white-50 px-1">
                    15 SONGS
                  </span>
                </div>
                <div class="d-flex justify-content-center py-4">
                  <i id="icons-small" class="like liked bi bi-heart pr-3"></i>

                  <i
                    id="icons-small"
                    class="threeDots bi bi-three-dots px-3 text-white-50"
                  ></i>
                </div>
              </div>
            </div>
	`
		album.tracks.data.forEach(element => {
		music.innerHTML += `<div class="songs col-12 col-lg-8 py-2 py-lg-5">
	              <div class="sgs row d-flex justify-content-center pb-3">
	                <p class="text-white-50">
	                  <i id="icons-small" class="bi bi-music-note"></i>
	                </p>
	                <div class="col-9">
	                  ${element.title} <br /><a
	                    href="artistPlusSidebar.html"
	                    class="artist text-white-50"
	                    ></a
	                  >
	                </div>
	                <div class="col-2 text-white-50">${Math.floor(element.duration/60)}: ${element.duration % 60}</div>
	              </div>
				  `;
});

	
})
}
