'use strict'

let section1 = document.querySelector('#section1');
section1.innerHTML = `
<ul class="nav nav-tabs" id="myTabSection1" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="vetiScoreTab" data-toggle="tab" href="#vetiScore" role="tab"
            aria-controls="vetiScore" aria-selected="true">VetiScore</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="vetiScoreForm-tab" data-toggle="tab" href="#vetiScoreForm" role="tab"
            aria-controls="vetiScoreForm" aria-selected="false">Format du VétiScore</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="calculVetiScore-tab" data-toggle="tab" href="#calculVetiScore" role="tab"
            aria-controls="calculVetiScore" aria-selected="false">Calcul du VétiScore</a>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="vetiScore" role="tabpanel" aria-labelledby="vetiScore-tab">
        <h2>Qu'est-ce que le VétiScore ?</h2>
        <p>Le VétiScore est une note allant de A à E permettant de noter les vêtements. Plusieurs paramètres sont pris
            en compte comme : le prix, le matériaux utilisé et le pays de fabrication</p>
        <p>C'est une base collaborative où chacun enregistre les informations de ses vêtements afin qu'ils soient notés
            et accessibles aux autres utilisateurs.</p>
    </div>
    <div class="tab-pane fade" id="vetiScoreForm" role="tabpanel" aria-labelledby="vetiScoreForm-tab">
        <h2>Format du VétiScore</h2>
        <p>Le VétiScore est renseigné par des lettres allant de A à E.</p>
        <figure>
            <img src="img/VetiScore.png" alt="VetiScore">
            <fig-caption>Schéma du VétiScore</fig-caption>
        </figure>
    </div>
    <div class="tab-pane fade" id="calculVetiScore" role="tabpanel" aria-labelledby="calculVetiScore-tab">
        <h2>Calcul du VétiScore</h2>
        <p>Le VétiScore est calculé à partir de 3 paramètre : le prix, le matériaux utilisés et le pays de fabrication.</p>
        <p>Ces paramètres pourront évolués en fonction de vos retours, n'hésitez pas à nous le faire savoir =)</p>
        <p>Pondération des critères :</p>
        <p>Prix : 20%</p>
        <p>Matériaux : 40%</p>
        <p>Pays de fabrication : 40%</p>
    </div>
</div>
`