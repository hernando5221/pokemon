const pokemonContainer= document.querySelector('.pokemon-container')

function fetpokemons(number){
    for(let i=1; i <= number; i++){
        fetpokemon(i);
        
    }
}

fetpokemons(898);


function fetpokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=>res.json())
    .then(data=>{
        
        console.log(data)
        getpokemon(data)
        
    })
    
}





function getpokemon(pokemon){
    pokemonContainer.innerHTML +=`<div class="container">
    <div class="row">
      <div class="col-3">
      
      <div class="card mt-5" style="width: 18rem;">
    <img src="${pokemon.sprites.back_default}" class="card-img-top" alt="...">
    <div class="card-body">
    <b>Nombre:</b>
      <h5 class="card-title">${pokemon.name}</h5>
      <b>Habilidades</b>
      <p class="card-text">${pokemon.abilities[0].ability.name}</p>
      <p class="card-text">${pokemon.abilities[1].ability.name}</p>
      <p class="card-text">${pokemon.abilities[2].ability.name}</p>
      <b>Tipos</b>
      <p class="card-text">${pokemon.types[0].type.name}</p>
      <p class="card-text">${pokemon.types[1].type.name}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
        
      </div>
      
    </div>
   </div>`
}


