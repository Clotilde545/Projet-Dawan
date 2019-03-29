'use strict'

let section2 = document.querySelector("#section2");
//insertion dans le header du projet 
//logo, volet de navigation et titre
section2.innerHTML = `
<article id="calculator">
    <a href="Calculator.html" class="breadcrumb" role="button">Noter votre vêtement</a>
</article>
<article id="astuces"> 
    <a href="Astuces.html" class="breadcrumb" role="button">Astuces</a>
</article>
<article id="forum">
 <a href="Forum.html" class="breadcrumb" role="button">Forum</a>
</article>
`