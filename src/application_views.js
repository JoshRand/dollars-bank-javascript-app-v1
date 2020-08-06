import React from 'react';

class ApplicationViews extends React.Component{

    inputDisplay(option){   
        if(option == 1){

            return <a>Enter a valid choice (1 : Login |  2 : Open New Account)</a>;
        }
        else{

            return <a>Enter a valid choice (1 : Login |  2 : Open New Account)</a>;
        }
    }
    intro(){
        console.log("DOLLARSBANK ATM Welcome You!!\n\nEnter a valid choice (1 > Login 2 > Open New Account) ");
        return <h3>DOLLARSBANK ATM Welcome You!!</h3>;
    }
    deposit(){
        console.log("How much would you like to deposit? : ");
    }
    withdraw(){
        console.log("How much would you like to withdraw? : ");
    }
    createAccount(){
        console.log("---- Create Account ----");
    }
    updatePin(option){
        if (option == 1)
        {
            console.log("---- Update PIN ----\n");
            console.log("\nEnter your desired PIN: ");
        }
        else if (option == 2)
        {
            console.log("\nEnter your desired PIN again");
        }
    }
   
    printTransactions(history){
        console.log("---- Printing Transactions ----");
        history.forEach(element => {
            console.log(element+"\n");
        });
    }
    checkBalance(balance){
        console.log("---- Check Balance ----");
        console.log("Your current balance is %d\n\n",balance);
    }
    login(){
        console.log("---- Login ----");
    }
    loginSuccessIntro(){
        console.log("---- You are logged in! ----\n\nCheck balance : 1\nPrint Transactions : 2\nUpdate PIN : 3\nWithdraw : 4\nDeposit : 5\nLogout : 6\n\nChoose your option (1-5) :");
    }
    loginIntro(option){
        if(option == 1)
        {
            console.log("---- Enter your Credentials! ----\n\nEnter Name: ");
            return <div><a>---- Enter your Credentials! ----</a><br></br><a>Enter Name: </a></div>;
        }else if (option == 2)
        {
            console.log("\nEnter Password: ");
            return <div><a>Enter Password: </a></div>;
        }
        else{
            return <a></a>;
        }
        
    }
    createAccountIntro(option){
        if(option === 1)
        {
            console.log("---- Create your account! ----\n\nEnter Name: ");
        }else if (option === 2)
        {
            console.log("\nEnter Password: ");
        }
        else if (option === 3)
        {
            console.log("\nEnter Initial Deposit: ");
        }
        else if (option === 4)
        {
            
        }
        
    }
    logout(){
        console.log("\nLogging out ");
    }
}
export default ApplicationViews;