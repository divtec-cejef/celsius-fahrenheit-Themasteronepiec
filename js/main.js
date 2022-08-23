/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Xavier Rossi
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const Celsius = Number (prompt ('Entrez un nombre :'));

  let Fahrenheit = Number ((Celsius * 9 / 5) + 32);
  if( isNaN(Fahrenheit) || isNaN(Fahrenheit)){
    alert('Entrez un nombre correct');
  }else{
    alert(`Il fait ${Fahrenheit} Fahrenheit !`);
  }

}()); // Main IIFE


