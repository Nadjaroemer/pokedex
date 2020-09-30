let url = new URLSearchParams(window.location.search);

let offset = url.get("offset") ? url.get("offset") : 0;
let previousOffset, nextOffset;

let nextLink = document.querySelector(".nextLink");
let previousLink = document.querySelector(".previousLink");

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then(res => res.json())
        .then(function(data) {

            let maxOffset = data.count - (data.count % 20);

            nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 20;
            previousOffset = offset <= 0 ? 0 : parseInt(offset) - 20;

            nextLink.href = `?offset=${nextOffset}`;
            previousLink.href = `?offset=${previousOffset}`;

            data.results.forEach(function(result) {//data er den information, jeg har fetchet (check i konsolen), results er Array'et 
            let array = result.url.split("/");
            //console.log(data);
            
            let id = array[array.length - 2];
            
            let pokemonList = document.querySelector(".pokemonList");
            let template = document.querySelector("#pokemons");

            let clone = template.content.cloneNode(true);//her laver jeg en klon
            clone.querySelector(".types").innerText = result.name;//her skal klonen sættes in i html'en
            clone.querySelector(".types").href = `/pokemons.html?id=${id}`;
            
            pokemonList.appendChild(clone);
        });
    });