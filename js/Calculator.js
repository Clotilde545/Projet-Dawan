'use strict'

// création du corps du calcultator : HTML a implanter dans la section main de la page calculator
let main = document.querySelector("main")

main.innerHTML = `

    
<div class="form-row align-items-center">
<div class="col-auto my-1">
       <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
       title="Tooltip on right">
       Tooltip on right
   </button>
</div>
<div class="col-auto my-1">
       <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
       <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
         <option selected>Choose...</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
       </select>
</div>
<div class="col-auto my-1">

<div class="form-check">
       <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
           aria-label="...">
   </div>
</div>
</div>


  
</form>

<div class="progress">
<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
   aria-valuemax="100">25%</div>
</div>



`

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })