let superHeroes = document.getElementById("superHeroes")

let newMovie = ""

let url = "http://www.omdbapi.com/?s=captain_america&apikey=25d09861"

const requestWithinRequest = () => {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    // event listener for the first request load
    req.addEventListener("load", () => {
        let firstResponse = JSON.parse(req.responseText);
        console.log(firstResponse);
        // grabbing the search array from the first request
        // .Search will need to be changed to the API specific key youre
        // trying to access
        firstResponse.Search.forEach(obj => {
            let movieUrl = `http://www.omdbapi.com/?i=${obj.imdbID}&apikey=25d09861`
            let req = new XMLHttpRequest();
            req.open("GET", movieUrl);
            req.send();
            // event listener for the second request load
            req.addEventListener("load", () => {
                let secondResponse = JSON.parse(req.responseText);
                console.log(secondResponse);
                console.log(obj.Title)
                console.log(secondResponse.Rated)
                newMovie = `<div>
                     <img src="${obj.Poster}"></img>
                     <h4><a>${obj.Title}<a></h4>
                     <ul>
                     <li>${secondResponse.Year}</li>
                     <li>${secondResponse.Rated}</li>
                     </ul>
                 </div>`
                superHeroes.insertAdjacentHTML("afterbegin", newMovie)

            });
        });
    });
};

window.addEventListener("load", () => {
    requestWithinRequest()
})