import "../css/addItem.css"
import React,{useState} from "react";
function AddItem(props)
{
   const[amount,setAmount]=useState("")
   const[item,setItem]=useState("")
   const[transactionType,setTransactionType]=useState("")

   console.log(item)
   console.log(amount)
   console.log(transactionType)
    const add=(()=>{
        props.add(item,amount,transactionType);
    })

return (

    <div className="addItemContainer" >
        <div className="addTrans"><h1>Add Transaction</h1></div>
        <input placeholder="Enter item" onChange={(e)=>setItem(e.target.value)}/><br></br>
        <input  type="number" placeholder="Enter amount" onChange={(e)=>setAmount(e.target.value)}/><br></br>

        <select onChange={(e)=>setTransactionType(e.target.value)}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </select><br></br>

        <button id="buttonAdd" onClick={add}>Add</button>

    </div>
)
}

export default AddItem;