'use strist'

// création d'une variable footer pour selectionner les élément à créer dans le footer du HTML
let footer = document.querySelector("footer")

footer.innerHTML = `
<article id="artFooter1"> ID concepteurs</article>
<article id="artFooter2"> 
    <div id="div1Foot2"> All rights reserved</div>
    <div id="div2Foot2"> Contact 
        <div class="media">
                <img src="./img/data=EHW_mINW8aHn3FTlHTodsZdlpphTsWbDU2TgP2cRpFA9XYVIinGJb8NnbnLVVJNp4jeHZ6H0H0QyoqPm8tdlJeBtJ27yrnHV6QJVXEdiouOwRhgI_Ape9H4qQqxC1izJU08Qx-L4b5YGtCeI.png" class="mr-3" alt="...">
                <div class="media-body">
                  <h5 class="mt-0">Adresse</h5>
                 <p>We live here </p> 
                  <h5 class="mt-0">Tel</h5> 
                  <p>0125487966 </p> 
                </div>
            </div>
    </div>
</article>
<article id="artFooter3">
    <img src="./img/facebook.png" alt="logo facebook">
    <img src="./img/instagram.jpeg" alt="logo instagram">
    <img src="./img/twitter.png" alt="logo twitter">
</article>
`
