const pokemon_list = document.getElementById('pokemons-list');
const loadMoreBtn = document.getElementById('loadMore');
let limit = 8;
let offset = 0;

function loadPokemon(offset = 0, limit = 5){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
        `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="details">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `)
    .join('')
        pokemon_list.innerHTML += newHtml
    })
}

loadPokemon(offset,limit);

loadMoreBtn.addEventListener('click', () => {
    offset+=limit;
    loadPokemon(offset,limit);
})