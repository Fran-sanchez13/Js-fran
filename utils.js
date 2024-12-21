export const getPokeData = (pokeData) => {
    return {
        pokeName: pokeData.name,
        pokeImage: pokeData.sprites.front_default,
        pokePowers: pokeData.abilities[0].ability.name,
        pokeWeight: pokeData.weight,
        pokeHeight: pokeData.height,
    };
};


// const calPoke = (number) => {
//     return Math.round(number);
//    };