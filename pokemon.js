var pokemon = document.getElementById("pokemon").value;

var pokemonData = "";

jQuery.get( "http://pokeapi.co/api/v2/pokemon/"+pokemon, function( response ) { 
    // response contains site information
} );
document.getElementById("pokemon").value = pokemonData;