let url = new URLSearchParams(window.location.search);

/*let spinner = document.querySelector(".spinnerContainer");*/
console.log("hej");

if (url.has("id")) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + url.get("id"))
        .then(res => res.json())
        .then(function(data) {
            /*spinner.remove();*/
            /* name: */
            console.log(data);

            document.querySelector(".characterName").innerText = data.name;

             /* images: */
             document.querySelector(".imageFront").src = data.sprites.back_default;
             document.querySelector(".imageBack").src = data.sprites.front_default;

            /* species: */
            document.querySelector(".characterDetails__species").innerText = data.species.species;
           

            /* type: */
            data.types.forEach(function(type) {
                document.querySelector(".characterDetails__types").innerHTML += `<li>${type.type.name}</li>`;
            });

            /* abilities: */
            data.abilities.forEach(function(ability) {
                document.querySelector(".characterDetails__abilities").innerHTML += `<li>${ability.ability.name}</li>`;
            });
        })
}
