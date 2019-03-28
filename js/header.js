'use strict'

let header = document.querySelector("header");
//insertion dans le header du projet 
//logo, volet de navigation et titre
header.innerHTML = `
        <img src="../img/logo_VS.jpg" alt="logo">
        <h1>VétiScore</h1>
        <nav id="nav">
        <a href="./projet.html">Accueil</a>
        <a href="./login.html">Login</a>
        <a href="./newsletter.html">Newsletter</a>
        <input type="search" placeholder="Recherche" name="the_search">
        <button type="submit">Lancer la Recherche</button>
        </nav>
        
`