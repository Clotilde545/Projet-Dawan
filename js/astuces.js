console.log("début");

let main = document.querySelector('main');
main.innerHTML = `
<h1>Astuces</h1>
<section>
    <article id="consoMieux">
        <h2>Consommer mieux</h2>

        <details>
        <summary><h3>Consommer moins</h3></summary> 
            <p id="consoMoins"  >L'industrie de la mode produit des collections de plus en plus rapprochée et incite à la consommation.
                Ne pas se laisser dicter la mode par l'industrie est un des éléments pour réduire sa consommation de
                vêtements qui polluent énormément la planète.
            </p>
        </details>
        <details>
        <summary><h3>Louer ses vêtements</h3></summary> 
            <p id="location">
                Si vous n'arrivez pas à resister aux changements de modes, une autre possibilité s'offre à vous : Louer
                des vêtements.
                La location de vêtements vous permet d'avoir un changement régulier de votre garde robe sans accumuler
                des vêtements chez vous.
                La location vous donne accès à des pièces de meilleures qualités que vous ne pourriez peut-être pas vous
                offrir en achat.
                De plus, les vêtements seront reloués jusqu'à ce que cela ne soit plus possible.
            </p>
        </details>
        <details>
        <summary><h3>Acheter des vêtements d'occasion</h3></summary> 
            <p id="occasion" >La mode est cyclique. Du coup, dans les friperies vous pouvez trouver des pièces actuelles à prix battant
                toute concurrence
                Les arrivages sont réguliers et permettent d'avoir de nouveaux choix régulièrement.
            </p>
        </details>
    </article>
    <article id="pollution">
        <h2>Pollution</h2>
        <p>
            Entre l'utilisation de substances chimiques et/ou nocives pour la production et la fabrication des fibres,
            le gaspillage des ressources provoqué par la surconsommation de vêtements, et la pollution générée par les
            kilomètres parcourus par un vêtement avant d'arriver en boutique, la mode est clairement l'une des
            industries les plus polluantes au monde.
            Un t-shirt en coton peut polluer 20 000L d'eau de la fabrication à sa fin de vie.
            Un jean pour sa fabrication utilise 2 000L d'eau
            Seulement 1% des vêtement sont recyclés.
            Même troué un vêtement peut avoir une seconde vie, n'hésitez pas à les recycler.
        </p>
    </article>
</section>
`
console.log("fin");
