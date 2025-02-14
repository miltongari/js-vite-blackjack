import _ from "underscore";


//cuando la exportacion esta default puede exporta como cualquier
//nombre en el archivo principal 
//import cualquierNombreParaCrearUnNuevoDeck from './usecases/crear-deck';

/**
 * Esta funcion crea un nuevo deck 
 * @param {array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

if (!tiposDeCartas || tiposDeCartas.length === 0)
     throw new Error('tiposDeCartas obligatorio como un arreglo de string');

if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales obligatorio como un arreglo de string');

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};

//export default crearDeck;
