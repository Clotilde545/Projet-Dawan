let section2 = document.querySelector("#section2");
//insertion dans le header du projet 
//logo, volet de navigation et titre
section2.innerHTML = `
<article id="calculator">
    <a href="./templates/Calculator.html" class="breadcrumb" role="button">noter votre vetement</a>
</article>
<article id="astuces"> 
    <a href="./templates/Astuces.html" class="breadcrumb" role="button">Astuces</a>
</article>
<article id="forum">
 <a href="./templates/Forum.html" class="breadcrumb" role="button">Forum</a>
</article>
`