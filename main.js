import { getPokemon } from "./request.js";
// CAPTURAR ELEMENTOS

const form = document.getElementById('apiForm')
const inputPoke = document.getElementById('numberPoke')
const cardContainer = document.querySelector('.containerPokeApi')
const searchMsg = document.querySelector('.searchMsg')


const searchPokemon = async (event)=> {
    event.preventDefault();


    if (inputPoke.value === "") {
        alert("Por favor ingrese un numero")
        return;       
    } 

    const examinePoke = await getPokemon(inputPoke.value);
    console.log(examinePoke);
};
    
    


const init = () => {
    form.addEventListener("submit", searchPokemon);
}

init();