import React from 'react';
import CustomerAccount from './customer_account'
import ApplicationViews from './application_views';
import { switchCase } from '@babel/types';
const accnt = new CustomerAccount();
const view = new ApplicationViews();
var i = 0;
const options = {
    INTRO: 0,
    CHECK_BALANCE: 1,
    PRINT_TRANSACTIONS: 2,
    UPDATE_PIN: 3,
    WITHDRAW: 4,
    DEPOSIT: 5,
}
var option = options.INTRO;
class BankAtm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render(){
        
        console.log(""+accnt.getBalance());
        
            console.log(""+accnt.getBalance());
            while (i < 10) {
                //console.log(i++)
                switch(option)
                {
                    case options.INTRO:
                        view.displayIntro();
                        option = 1;
                        break;
                    case options.CHECK_BALANCE:
                        console.log(options.CHECK_BALANCE);
                        option = 2;
                        break;
                    case options.PRINT_TRANSACTIONS:
                        console.log(options.PRINT_TRANSACTIONS);
                        option = 3;
                        break;
                    case options.UPDATE_PIN:
                        console.log(options.UPDATE_PIN);
                        option = 4;
                        break;
                    case options.WITHDRAW:
                        console.log(options.WITHDRAW);
                        option = 5;
                        break;
                    case options.DEPOSIT:
                        console.log(options.DEPOSIT);
                        option = 0;
                        break;
                }
                i++;
               // option = prompt("Please enter a number 1 or 2", "");
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