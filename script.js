// console.log("Script API")
// DOM - DOCUMENT OBJECT MODEL

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');


function requestApi(searchTerm){
    // const url ='http://localhost:3000/artists?name_like=${searchTerm}';
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
        .then((result) => displayResults(result))

}

function displayResults(result){
    
    resultPlaylist.classList.add('hidden'); 
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    
    result.forEach((element) =>{
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
        
    });
    
    resultArtist.classList.remove('hidden'); 
    hidePlaylists();

}

function hidePlaylists() {
    playlistContainer.classList.add("hidden");
  }


document.addEventListener('input', function(){
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === ''){
resultPlaylist.classList.add('hidden');
resultArtist.classList.remove('hidden');
return

    }

    requestApi(searchTerm);
    // console.log(searchTerm);

} ); 
//  Nova formatação para a function () =>{}
