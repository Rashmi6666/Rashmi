// // http://www.omdbapi.com/?s=tt3896198&apikey=98281d01

// let input =document.getElementById("search")
// input.addEventListener ("keyup",e =>{
//     console.log(e.target.keycode)
// if(e.keycode===13){


//     let value= e.target.value;
//     SearchMovies(value);
// }
// })

// function SearchMovies(searchText){

//  window.
//  fetch(`http://www.omdbapi.com/?s=tt3896198&apikey=98281d01`)
//  .then(data => {
//      //convert response body into json  object
//      data.json().then(movies => console.log(movies)).catch(err => console.log(err))
//  })
//  .catch(err => console.log(err))
// }


//http://www.omdbapi.com/?s=tt3896198&apikey=f1619349

let input = document.getElementById("search");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition;

let search =document.getElementById("searchIcon")

searchIcon.addEventListener("click",e =>{
    window.recognition = window.recognition || window.webkitSpeechRecognition
    let recognition = new recognition ();
    recognition.addEventListener ("result", e => {
        let transcript =e.result[0][0].transcript
        let speechValue = (input.value= transcript)
        SearchMovies(speechValue)
    })
    recognition.start()
})

input.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    let value = e.target.value;
    SearchMovies(value);
  }
});

function SearchMovies(searchText) {
  window
    .fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f1619349`)
    .then(data => {
      //convert response body into JSON Object
      data
        .json()
        .then(movies => {
          let moviesData = movies.Search;
          let output = [];
          for (let movie of moviesData) {
            console.log(movie);
            output += `
                <div>
                    <img src=${movie.Poster} alt=${movie.Title} />
                    <h1>${movie.Title}</h1>
                    <p>${movie.Type}</p>
                    <p>${movie.Year}</p>
                </div>
                `;

          }
          document.getElementById("template").innerHTML = output;
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}


