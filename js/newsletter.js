'use strict'
//Titre de la page Newsletter
let h1 = document.querySelector('h1');
h1.innerHTML = `Newsletter`;
//Contenu de la page
let newsletter = document.querySelector('#newsletter');
newsletter.innerHTML = `
<article>
  <h2>Création de VétiScore</h2>
  <blockquote class="blockquote">
  <p>Le Vétiscore a été créé par 2 ingénieurs en environnement le 20 mars 2019. Depuis ils sont devenus pro du developpement informatique...ahahaha... </p>
  <p>Le site a été créé dans la foulée.</p>
  <div class="blockquote-footer">Someone famous (Agromy and Clo)<cite title="Source Title"></cite></div>
</blockquote>
</article>

`
