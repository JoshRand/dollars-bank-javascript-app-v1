import React from 'react';
import CustomerAccount from './customer_account';
import ApplicationViews from './application_views';
import PasswordEncryption from './password_encryption';
var en = new PasswordEncryption();
var accnt = new CustomerAccount("a","a",123);
const display = new ApplicationViews();
var i = 0;

var isLoggedIn = false;
var isCreatingAccount = false;

var accountList = [];
accountList.push(accnt);
var currentAccount;

const IntroOptions = {
    INTRO: 0,
    LOGIN: 1,
    CREATE_ACCOUNT: 2,

}
const LoginOptions = {
    LOGIN_INTRO: 0,
    CHECK_BALANCE: 1,
    PRINT_TRANSACTIONS: 2,
    UPDATE_PIN: 3,
    WITHDRAW: 4,
    DEPOSIT: 5,
    LOGOUT: 6,
}

var intro = display.intro();
var loginOption = LoginOptions.LOGIN_INTRO;
//var introOption = IntroOptions.INTRO;
var introMessage = "";
var loginMessage = "";
var inputDisplay = display.inputDisplay(1);
class BankAtm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            introOption: IntroOptions.INTRO,

        }
    }

    render()
    {
        console.log(""+accnt.getBalance());
        
        console.log(""+accnt.getBalance());
        while (i < 10) {
           
            //console.log(i++)
            switch(this.state.introOption)
            {
                case IntroOptions.INTRO:
                    display.intro();
                    
                    break;
                
                case IntroOptions.LOGIN:
                    display.login();
                    break;

                case IntroOptions.CREATE_ACCOUNT:
                    
                    
                    break;

                default:

                    break;    
            }
            introMessage = prompt("Please enter a number 1 or 2", "");
            this.state.introOption = parseInt(introMessage);
            if(this.state.introOption === IntroOptions.LOGIN)
            {
                display.loginIntro(1);
                //intro = display.loginIntro(1);
                var name = prompt("Please enter your Login name", "<UserName>");
                display.loginIntro(2);
                var password = prompt("Please enter your Password", "<Password>");
                //check account list to see if login successfull and set isloggedin = true
                accountList.forEach(element => {
                    if(name === element.getUserName() && password === element.getPin())
                    {
                        isLoggedIn = true;
                        currentAccount = element;
                        
                    }
                    
                });
                
                while(isLoggedIn){
                    switch(loginOption)
                    {
                        case LoginOptions.LOGIN_INTRO:
                            display.loginSuccessIntro(); 
                            loginMessage = prompt("Please enter a number 1 - 5", "");
                            loginOption = parseInt(loginMessage);
                            break;
    
                        case LoginOptions.CHECK_BALANCE:
                            display.checkBalance(currentAccount.getBalance());
                           
                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
    
                        case LoginOptions.PRINT_TRANSACTIONS:
                            display.printTransactions(currentAccount.getHistory());

                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
    
                        case LoginOptions.UPDATE_PIN:
                            display.updatePin(1);
                            var updatePinFirstString = prompt("Enter your desired PIN", "");
                            display.updatePin(2);
                            var updatePinSecondString = prompt("Enter your desired PIN again", "");
                            if(updatePinFirstString === updatePinSecondString){
                                currentAccount.updatePin(updatePinSecondString);
                                console.log("Updated PIN");
                            }
                            accountList.forEach(element => {
                                if(element.getUserName() === currentAccount.getUserName())
                                {
                                    element = currentAccount;
                                }
                                });
                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
    
                        case LoginOptions.WITHDRAW:
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
                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
    
                        case LoginOptions.DEPOSIT:
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
                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
    
                        case LoginOptions.LOGOUT:
                            display.logout();
                            isLoggedIn = false;
                            this.state.introOption = IntroOptions.INTRO;
                            loginOption = LoginOptions.LOGIN_INTRO;
                            break;
                        default:
                            break;
                    }
                    // if(isLoggedIn && loginOption == LoginOptions.LOGIN_INTRO)
                    // {
                       

                    // }
                    
                    console.log(loginOption);
                }
                
            }
            else if(this.state.introOption == IntroOptions.CREATE_ACCOUNT)
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

                this.state.introOption = IntroOptions.INTRO;
                
            }
        }
           
         //var name = window.prompt("Enter your name: ");

         return(
            
            <form onSubmit={this.mySubmitHandler}>
            <div className="BankAtm">
                {intro}
                <br/>
                  {inputDisplay}
                  {this.state.inputOption}
                  <br/>
                  <input type = "text" />
                  <input type = 'submit' onClick={this.myIntroOptionHandler}/>
                <a>{this.state.introOption}</a>
                <a>{}</a>
                <a></a>
            </div>
            </form>
        );
    }
    myIntroOptionHandler = (event) => {
        this.setState({introOption: event.target.value});
       
      }
}
       



export default BankAtm;