
/*création d'une fonction qui compte le nombre de changement sur ma classe checkbox.
*etape par étape :
* Compter le nombre de checkbox (donc savoir ou les trouver)
*Etre capable de réperer la valeur de ma checkbox : valider ou non
*récupérer le nombre de valeur de mes checkboxs (=voir le changement au click)
*Faire une action en fonction du nombre de valeur qui est :
*Mettre dans la classe style de ma progress bar la valeur suivante : nbvaleurcheckbox*100/nbvaleurmax
*Et mettre dans le text de ma progress bar : nbvaleurcheckbox/nbvaleurmax
*/

console.log("hello");


let checkbox = document.querySelectorAll (".form-check-input");
console.log(checkbox.lenght);
console.log(checkbox[0]);
console.log(checkbox[0].checked);

//mise en place d'un écouteur pour récupérer le nombre de valeur checked = True
let form = document.querySelector("form")
form.addEventListener("click", function() {
  let value = checkbox[0].checked.value

  console.log(checkbox[0].name + " = " + checkbox[0].checked);


   console.log(value);
});

