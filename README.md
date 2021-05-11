# Introducere
Crearea acestei aplicatii a pornit datorita amintirilor din copilarie in legatura cu serialul Pokemon. Imi amintesc ca pe langa serial, colectionam si cartonase si aveam si multe jucarii cu Pokemon. In momentul in care am gasit cateva API-uri publice in legatura cu acest subiect, m-am gandit ca ar fi o idee buna sa-mi rememorez amintirile.

# Descriere problema
Ideea pentru aceasta aplicatie mi-a venit atunci cand am gasit un API intitulat Pokéapi. Aplicatia nu este una complexa, nu necesita autentificare, are o singura pagina si 2 functionalitati. 
Una dintre aceste functionalitati este afisarea informatiilor despre un pokemon cautat de utilizator, precum tip, inaltime si greutate dupa apasarea unui buton. Cealalta functionalitate afiseaza imaginea pokemonului la apasarea butonului de afisare. 

# Descriere API
1. PokéApi

Acesta contine toate detaliile legate de toti pokemonii, inspirate din jocurile video. PokéApi este gratuit pentru utilizare. Singura metoda disponibila este HTTP GET si nu este necesara autentificarea pentru a accesa acest API.

2. PokeRes BastionBot API

Acest API l-am gasit intr-o postare pe un site de stiri legata de API-ul PokéApi. Acest API are imaginile tuturor pokemonilor existenti in PokéApi. Lucrul care a fost esential in legarea celor 2 API-uri a fost ca pokemonii din ambele au acelasi id.

# Flux de date
In cadrul functiei GetData se face un GET request catre PokéAPI. Pentru a realiza acest lucru avem nevoie de un url, si anume https://pokeapi.co/api/v2/pokemon/ la care vom adauga numele pokemonului.
```
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
```
Un raspuns generat de acest request este:
```
abilities: [{ability: {name: "static", url: "https://pokeapi.co/api/v2/ability/9/"}, is_hidden: false, slot: 1},…]
base_experience: 112
forms: [{name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon-form/25/"}]
game_indices: [{game_index: 84, version: {name: "red", url: "https://pokeapi.co/api/v2/version/1/"}},…]
height: 4
held_items: [{item: {name: "oran-berry", url: "https://pokeapi.co/api/v2/item/132/"},…},…]
id: 25
is_default: true
location_area_encounters: "https://pokeapi.co/api/v2/pokemon/25/encounters"
moves: [{move: {name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/"},…},…]
name: "pikachu"
order: 35
past_types: []
species: {name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon-species/25/"}
sprites: {,…}
stats: [{base_stat: 35, effort: 0, stat: {name: "hp", url: "https://pokeapi.co/api/v2/stat/1/"}},…]
types: [{slot: 1, type: {name: "electric", url: "https://pokeapi.co/api/v2/type/13/"}}]
weight: 60
```
# Capturi de ecran
Informatii despre pokemon:
![alt text](https://github.com/sergiuizina/cloud-project/blob/main/images/search.PNG)

Imaginea unui pokemon:
![alt text](https://github.com/sergiuizina/cloud-project/blob/main/images/charizard.PNG)

# Referinte
https://pokeapi.co/

https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2

https://pokeres.bastionbot.org/images/pokemon/%24%7B
