import React from 'react';


class CustomerAccount extends React.Component{
  
    constructor(userName,password,initialBalance)
    {
        super()
        this.state={
            name: userName,
            balance:initialBalance,
            pin:password,
            historyMessages: [],
          
        }
        this.state.historyMessages.push("Initial deposit of "+initialBalance+" into account as of date");
    }
    getBalance()
    {
        return this.state.balance;
    }
    deposit = (amount) =>
    {
        this.state.balance+=amount;
        this.state.historyMessages.push("Deposited "+amount+" into account as of date");
         
        

    }
    withdraw = (amount) =>
    {
        this.state.balance-=amount;
        this.state.historyMessages.push("Withdrawn "+amount+" out of account as of date");
    }
    updatePin = (newPin) =>
    {
        this.state.pin = newPin;
      
        
    }
    getPin()
    {
        return this.state.pin;
    }

    getUserName()
    {
        return this.state.name;
    }
    
    getHistory()
    {
        return this.state.historyMessages;
    }
}

export default CustomerAccount;