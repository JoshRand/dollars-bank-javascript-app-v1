import React from 'react';
import CustomerAccount from './customer_account'
import ApplicationViews from './application_views';
import { switchCase } from '@babel/types';
var accnt = new CustomerAccount("a","a",123);
const display = new ApplicationViews();
var i = 0;

var isLoggedIn = false;
var isCreatingAccount = false;

var accountList = [];
accountList.push(accnt);
var currentAccount;

const introOptions = {
    INTRO: 0,
    LOGIN: 1,
    CREATE_ACCOUNT: 2,

}
const loginOptions = {
    LOGIN_INTRO: 0,
    CHECK_BALANCE: 1,
    PRINT_TRANSACTIONS: 2,
    UPDATE_PIN: 3,
    WITHDRAW: 4,
    DEPOSIT: 5,
    LOGOUT: 6,
}

var loginOption = loginOptions.LOGIN_INTRO;
var introOption = introOptions.INTRO;
var introMessage = "";
var loginMessage = "";
class BankAtm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render()
    {
        
        console.log(""+accnt.getBalance());
        
        console.log(""+accnt.getBalance());
        while (i < 10) {
            //console.log(i++)
            switch(introOption)
            {
                case introOptions.INTRO:
                    display.intro();
                    
                    break;
                
                case introOptions.LOGIN:
                    display.login();
                    break;

                case introOptions.CREATE_ACCOUNT:
                    
                    
                    break;

                default:

                    break;    
            }
            introMessage = prompt("Please enter a number 1 or 2", "");
            introOption = parseInt(introMessage);
            if(introOption === introOptions.LOGIN)
            {
                display.loginIntro(1);
                var name = prompt("Please enter your Login name", "<UserName>");
                display.loginIntro(2);
                var password = prompt("Please enter your Password", "<Password>");
                //check account list to see if login successfull and set isloggedin = true
                accountList.forEach(element => {
                    if(name === element.getUserName() && password === element.getPin())
                    {
                        isLoggedIn = true;
                        currentAccount = element;
                       // break;
                    }
                    
                });
                
                while(isLoggedIn){
                    switch(loginOption)
                    {
                        case loginOptions.LOGIN_INTRO:
                            display.loginSuccessIntro(); 
                            loginMessage = prompt("Please enter a number 1 - 5", "");
                            loginOption = parseInt(loginMessage);
                            break;
    
                        case loginOptions.CHECK_BALANCE:
                            display.checkBalance(currentAccount.getBalance());
                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
    
                        case loginOptions.PRINT_TRANSACTIONS:
                            display.printTransactions(currentAccount.getHistory());

                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
    
                        case loginOptions.UPDATE_PIN:
                            display.updatePin();
                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
    
                        case loginOptions.WITHDRAW:
                            display.withdraw();
                            var withdrawString = prompt("Enter the amount to Withdraw", "");
                            var withdrawAmount = parseInt(withdrawString);
                            currentAccount.withdraw(withdrawAmount);
                            accountList.forEach(element => {
                            if(element.getUserName() === currentAccount.getUserName())
                            {
                                element = currentAccount;
                            }
                            });
                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
    
                        case loginOptions.DEPOSIT:
                            display.deposit();
                            var depositString = prompt("Enter the amount to Deposit", "");
                            var depositAmount = parseInt(depositString);
                            currentAccount.deposit(depositAmount);
                            accountList.forEach(element => {
                            if(element.getUserName() === currentAccount.getUserName())
                            {
                                element = currentAccount;
                            }
                            });
                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
    
                        case loginOptions.LOGOUT:
                            display.logout();
                            isLoggedIn = false;
                            introOption = introOptions.INTRO;
                            loginOption = loginOptions.LOGIN_INTRO;
                            break;
                        default:
                            break;
                    }
                    // if(isLoggedIn && loginOption == loginOptions.LOGIN_INTRO)
                    // {
                       

                    // }
                    
                    console.log(loginOption);
                }
                
            }
            else if(introOption == introOptions.CREATE_ACCOUNT)
            {
                display.createAccountIntro(1);
                var name = prompt("Please enter your Login name", "<UserName>");
                display.createAccountIntro(2);
                var password = prompt("Please enter your Password", "<Password>");
                display.createAccountIntro(3);
                var initialDepositString = prompt("Please enter a number 1 or 2", "");
                var initialDeposit = parseInt(initialDepositString);
                accountList.push(new CustomerAccount(name,password,initialDeposit));
                accountList.forEach(element => {
                    console.log(element.getBalance());
                    console.log(element.getUserName());
                    console.log(element.getPin());
                });

                introOption = introOptions.INTRO;
                
            }
        }; //var name = window.prompt("Enter your name: ");

        
        return(
            
            
            <div className="BankAtm">
                <a>{accnt.getBalance()}</a>
                <br/>
                <a>{accnt.getPin()}</a>
                <h2>hi2</h2>
                <a>{accnt.deposit(200)}</a>
                <a>{accnt.getBalance()}</a>
                <a>run</a>
                
            </div>
        )
    }
       
    
    
}
export default BankAtm;