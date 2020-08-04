import React from 'react';
import BankAtm from './dollars_bank_atm';

class DollarsApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){

        return(
            <div className="DollarsAppRender">
                <h1>
                    hi
                </h1>
                <BankAtm/>
            </div>
        )



    }

}

export default DollarsApp;