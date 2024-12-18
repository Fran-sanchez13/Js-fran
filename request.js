//TRABAJO NRO4 ASYNC/AWAIT
//https://pokeapi.co/api/v2/pokemon/ditto


export const getPokemon = async (pokemon) => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );   

            
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        
    }
}