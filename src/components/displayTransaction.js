import React from "react";
import '../css/displayTransaction.css';

function DisplayTransaction(props) {

   
    return (
        <div>
        
            {props.list.map((item, id) => {
    
         if (item.transactionType==="Expense") {
             return(
                <div key={id} className="divDetails">
                <div>
                    <h1>{item.item} </h1>
                </div>

                <div>
                    <h1>{item.amount}</h1>
                </div>
                <div>
                    <h1>{item.transactionType}</h1>
                </div>
                <div className="expenseLine"></div>
            </div>
             )
             
         } else {
            return(
                <div key={id} className="divDetails">
                <div>
                    <h1>{item.item} </h1>
                </div>

                <div>
                    <h1>{item.amount}</h1>
                </div>
                <div>
                    <h1>{item.transactionType}</h1>
                </div>
                <div  className="incomeLine"></div>
            </div>
             )
             
         }
      
              

})}

        </div>

    )
            


}

export default DisplayTransaction;

