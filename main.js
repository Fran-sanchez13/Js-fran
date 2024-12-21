import { getPokemon } from "./request.js";
import { getPokeData } from "./utils.js";

// CAPTURAR ELEMENTOS
const form = document.getElementById('apiForm')
const inputPoke = document.getElementById('numberPoke')
const cardContainer = document.querySelector('.containerPokeApi')
const searchMsg = document.querySelector('.searchMsg')

const createPokeTemplate = (pokeData) => {
    const {
        pokeName,
        pokeImage,
        pokePowers,
        pokeWeight,
        pokeHeight,
    } = pokeData
    return `
    <h2 class="title">${pokeName}</h2>
      <img src=${pokeImage} alt=${pokeName} class="image">
      <p class="powers">Poder: ${pokePowers}</p>
      <p class="weight">Peso: ${pokeWeight} Kg</p>
      <p class="height">Altura: ${pokeHeight} Metros</p>
    `;
};


const renderPoke = (pokeData) => {
    cardContainer.innerHTML = createPokeTemplate(pokeData)

}



const searchPokemon = async (event)=> {
    event.preventDefault();


    if (inputPoke.value === "") {
        alert("Por favor ingrese un numero")
        // console.log(examinePoke);
        return;       
    } 

    const examinePoke = await getPokemon(inputPoke.value);
    form.reset();
    
    // console.log(getPokeData(examinePoke));

  renderPoke(getPokeData(examinePoke));  
    
};
    
    


const init = () => {
    form.addEventListener("submit", searchPokemon);
}

init();