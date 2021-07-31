import React from 'react'

function Buttons() {
    return (
        
            <div class="container">
              <div class="row">
                <div class="col">
                     <h3 className="outcome"> Bussiness Outcome </h3>
                     
                     <div class="d-grid gap-4 col-6 mx-auto">
                         <button class="btn btn-warning" type="button"><h className="text">Enhanced Customer Experience</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Reduce Time to Sale</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Sales & delivery Alignment</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Eliminate Revenue Leakage</h></button>
                     </div>


                </div>
                <div class="col">
                     <h3 className="outcome">Operations  outcome </h3>
                     
                     <div class="d-grid gap-4 col-6 mx-auto">
                         <button class="btn btn-warning" type="button"><h className="text">Predictability</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Transparence</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Flexibility</h></button>
                         <button class="btn btn-warning" type="button"><h className ="text">Reduce It Cost</h></button>
                     </div>


               </div>
              </div>
           </div>
    )
}

export default Buttons
