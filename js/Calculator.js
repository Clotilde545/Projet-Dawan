'use strict'

// création du corps du calcultator : HTML a implanter dans la section main de la page calculator
let main = document.querySelector("main")

main.innerHTML = `

<form>
            
<div class="form-row align-items-center">
     <div class="col-auto my-1">
            <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
            title="Tooltip on right">
            Type de vêtement
        </button>
    </div>
    <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose...</option>
              <option value="1">T-shirt</option>
              <option value="2">Pantalon</option>
              <option value="3">Chaussettes</option>
            </select>
     </div>
     <div class="col-auto my-1">
    
     <div class="form-check">
            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
                aria-label="...">
        </div>
    </div>
</div>
    
<div class="form-row align-items-center">
        <div class="col-auto my-1">
               <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
               title="Tooltip on right">
               Marque
           </button>
       </div>
       <div class="col-auto my-1">
       
       <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter brand">
     
        </div>
        <div class="col-auto my-1">
       
        <div class="form-check">
               <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
                   aria-label="...">
           </div>
       </div>
   </div>
   <div class="form-row align-items-center">
        <div class="col-auto my-1">
               <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
               title="Tooltip on right">
               Matériaux
           </button>
       </div>
       <div class="col-auto my-1">
               <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
               <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                 <option selected>Choose...</option>
                 <option value="1">Coton</option>
                 <option value="2">Nylon</option>
                 <option value="3">Synthétique</option>
               </select>
        </div>
        <div class="col-auto my-1">
       
        <div class="form-check">
               <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
                   aria-label="...">
           </div>
       </div>
   </div>
   <div class="form-row align-items-center">
        <div class="col-auto my-1">
               <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
               title="Tooltip on right">
               Continent
           </button>
       </div>
       <div class="col-auto my-1">
               <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
               <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                 <option selected>Choose...</option>
                 <option value="1">China</option>
                 <option value="2">Europe</option>
                 <option value="3">Africa</option>
               </select>
        </div>
        <div class="col-auto my-1">
       
        <div class="form-check">
               <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1"
                   aria-label="...">
           </div>
       </div>
   </div>
   <div class="form-row align-items-center">
        <div class="col-auto my-1">
               <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right"
               title="Tooltip on right">
               Prix
           </button>
       </div>
       <div class="col-auto my-1">
               <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
               <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                 <option selected>Choose...</option>
                 <option value="1">0-50€</option>
                 <option value="2">50-100€</option>
                 <option value="3">100-200€</option>
                 <option value="4">200-500€</option>
                 <option value="5"><500€</option>
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