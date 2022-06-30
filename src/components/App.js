
import "../css/App.css"
import React, {useState} from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [transaction,setTransaction]=useState([]);
  const addTransaction=((amount,item,transactionType)=>
  {
    setTransaction((items)=>[...items,{
      amount:amount,
      item:item,
      transactionType:transactionType
    }])

  })
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>

        <Route path="/home" component={Home}>
        <Home list={transaction} add={ addTransaction}/>
  
        </Route>
       
        
      </Switch>
   


    </Router>

 
  )
}

export default App;
