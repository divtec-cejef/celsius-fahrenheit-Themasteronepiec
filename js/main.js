/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Xavier Rossi
 * @version 0.1
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const CELSIUS = Number (prompt ('Entrez un nombre :'));

  let fahrenheit = Number ((CELSIUS * 9 / 5) + 32);
  if( isNaN(fahrenheit) || isNaN(fahrenheit)){
    alert('Entrez un nombre correct');
  }else{
    alert(`Il fait ${fahrenheit} Fahrenheit !`);
  }

}()); // Main IIFE


