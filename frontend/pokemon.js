var pokeName; 

function onload() { 
        pokeName = document.getElementById("inputPokemon");
        document.querySelector('.pokemon').style.display = 'none';
        document.querySelector('.pokemonPhoto').style.display = 'none';
    }
    
function clearField() {
    document.getElementById("inputPokemon").value = "";
}

function GetPhoto(pokeID){
    document.querySelector('.pokemonPhoto').style.display = 'block';
    document.querySelector('.pokemon').style.display = 'none';
    const pokeresUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + pokeID +'.png';
    console.log(pokeresUrl);
    const imageHtml = `<img src=${pokeresUrl}>`;
    const pokemonPhotoDiv = document.querySelector('.pokemonPhoto'); 
        pokemonPhotoDiv.innerHTML = imageHtml;
}

function GetData(){    
    document.querySelector('.pokemon').style.display = 'block';
    document.querySelector('.pokemonPhoto').style.display = 'none';
    const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pokeName.value;
    fetch(pokeApiUrl)
        .then( (data) => {
            if (data.ok){
                return data.json()}
            throw new Error('Not ok.');
        })
        .then((pokemonData) => generateHtml(pokemonData))
        .catch(error => alert("Pokemonul nu exista."));
        
    const generateHtml = (pokemonData) => {
        const html = `
        <div class="nume">${pokemonData.name}</div>
        <div class="SpecificatiiPokemon">
            <span>Tip: ${pokemonData.types[0].type.name}</span><br/>
            <span>Inaltime: ${pokemonData.height} cm</span><br/>
            <span>Greutate: ${pokemonData.weight} kg</span><br/>
        </div>
        <button type="submit" id="pokeCardBtn" name="pokeCardBtn" onClick="GetPhoto(${pokemonData.id}); clearField();">Afisati pokemon</button>
        `;
        const pokemonDiv = document.querySelector('.pokemon'); 
        pokemonDiv.innerHTML = html;
    };
}



