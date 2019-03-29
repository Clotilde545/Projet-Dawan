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
  </div>

      <div class="media mt-3">
        <a class="mr-3" href="#">
          <img src="../img/profil2.jpeg" class="mr-3" alt="...">
        </a>
        <div class="media-body">
          <h5 class="mt-0">C'est bien vrai =)</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    

    <div class="media">
    <img src="" class="mr-3" alt="">
    <div class="media-body">
    </div>
  </div>
  <button type="submit" id="newCom">Répondre</button>
`

const newCom = document.querySelector('#newCom')

newCom.addEventListener('click', function () {

  const pseudo = prompt("Entrez votre pseudo");
  console.log(`${pseudo}`);
  const com = prompt("Entrez votre commentaire");
  console.log(`${com}`);


  //insertion pseudo
  let avatar = document.createElement('h5');

  avatar.textContent = `${pseudo}`;
  avatar.className = "mt-0";
  console.log("avatar :" + avatar);
  
  const utilisateur = document.querySelector(".media-body:last-child");
  utilisateur.insertAdjacentElement("beforeend", avatar);
console.log('insertion avatar');

  //inserttion commentaire
  //const commentaire = document.querySelector(".media-body:last-child")
  let contenu = document.createElement('div')
  contenu.textContent = `${com}`;
  utilisateur.insertAdjacentElement("beforeend", contenu);
  console.log('insertion com');
  

  console.log("début new div");

  const futurCom = document.querySelector(".media-body:last-child")
  const newDiv = document.createElement('div')
    newDiv.className = 'media-body';
    futurCom.insertAdjacentElement("afterend", newDiv);
    console.log("fin new div");


});


