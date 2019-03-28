let main = document.querySelector('main')
main.innerHTML = `
<h1>Forum</h1>
<h2>Bienvenue sur le forum VétiScore</h2>
<section>Le forum est un lieu d'échanges entre utilisateurs. Donnez-nous vos trucs et astuces</section>
<div class="media">
    <img src="../img/profil1.jpeg" class="mr-3" alt="...">
    <div class="media-body">
      <h5 class="mt-0">Tip top</h5>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  
      <div class="media mt-3">
        <a class="mr-3" href="#">
          <img src="../img/profil2.jpeg" class="mr-3" alt="...">
        </a>
        <div class="media-body">
          <h5 class="mt-0">C'est bien vrai =)</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    </div>
    <form action="" method="GET" id = "form">
    <label for="titreCom">Titre :</label>
    <input id="titreCom" name="titreCom" type="text">
    <label for="com">Commentaire :</label>
    <input id="com" name="com" type="text">
    <button type="submit" id="validation">Valider</bu
    </div>
    </form>
  </div>
`

let validation = form.querySelector('validation')
validation.addEventListener('click', function(){
    let titreCom = document.querySelector('div.mt-0');
    let com = document.querySelector('div.media-body');
    com.content = document.querySelector('#com')
    titreCom=document.querySelector('#titreCom')

    });