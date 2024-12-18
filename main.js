//   ASYNC/AWAIT

// const getPokemon = async () => {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     const data = await response.json();
//     console.log(data);
    
//     console.log(`Soy ${data.name} con el poder ${data.types[0].type.name}`);
//     }
   

// getPokemon();


const getPokemon = async () => {
    try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await response.json();
    // console.log(data);
    // console.log(`Soy ${data.name} con el poder ${data.types[0].type.name}`);
    } catch (error) {
        console.log(error);
        
        
    }
}
// getPokemon();
    
//===================================aca empieza el tp NRO 4=============================================================

const contenedor = document.querySelector('.containerPoke')

const templatePokemon = (pokemon) => {
    console.log(pokemon);
    // return `
    //     <div class="card">
    //         <img src="" alt="">
    //         <h2></h2>
    //         <p></p>
    //     </div>
        
    // `;
};
    
    
    


const renderPokemon = async () => {
    try {
        const pokemon = await getPokemon()
        templatePokemon(pokemon)
    } catch (error) {
        console.log(error);
    }
        


};
renderPokemon();
