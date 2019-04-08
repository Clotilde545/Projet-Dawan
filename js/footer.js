'use strict'

// création d'une variable footer pour selectionner les élément à créer dans le footer du HTML
let footer = document.querySelector("footer")

footer.innerHTML = `
<article id="artFooter1"> Created by Agromy and Clo</article>
<article id="artFooter2"> 
    
    <div id="div1Foot2"> 
        <div class="media">
                <img id = "map " src="../img/data=EHW_mINW8aHn3FTlHTodsZdlpphTsWbDU2TgP2cRpFA9XYVIinGJb8NnbnLVVJNp4jeHZ6H0H0QyoqPm8tdlJeBtJ27yrnHV6QJVXEdiouOwRhgI_Ape9H4qQqxC1izJU08Qx-L4b5YGtCeI.png" class="mr-3" alt="...">
                <div class="media-body">
                <h5 id="contact">Contact :</h5>
                  <h5 id="adresse" class="mt-0">Adresse</h5>
                 <p>We live here </p> 
                  <h5 id="tel" class="mt-0">Tel</h5> 
                  <p>0125487966 </p> 
                </div>
            </div>
    </div>
    <div id="div2Foot2"> All rights reserved</div>
</article>
<article id="artFooter3">
    <a href="www.facebook.com"> <img src="../img/facebook.png" alt="logo facebook"></a>
    <a href="www.instagram.com"> <img src="../img/instagram.jpeg" alt="logo instagram"></a>
    <a href="www.twitter.com"> <img src="../img/twitter.png" alt="logo twitter"></a>
</article>
`
