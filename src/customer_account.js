import React from 'react';


class CustomerAccount extends React.Component{
   
    constructor(props)
    {
        super(props)
        this.state={
           
            balance:0,
            pin:"1121",
            historyMessage: [],
          
        }
        
    }
    getBalance()
    {
        return this.state.balance;
    }
    deposit = (amount) =>
    {
        this.state.balance+=amount;
        this.state.historyMessage.push("Deposited ${amount} into account as of date");
         
        

    }
    withdraw = (amount) =>
    {
        this.state.balance-=amount;
        this.state.historyMessage.push("Withdrawn ${amount} out of account as of date");
    }
    updatePin = (newPin) =>
    {
        this.state.pin = newPin;
      
        
    }
    getPin()
    {
        return this.state.pin;
    }

}

export default CustomerAccount;