import React from 'react';

//var AES = require("crypto-js");

var encrypted;
var decrypted;
class PasswordEncryption extends React.Component{
    encrypt(password)
    {
        //encrypted = AES.encrypt(password, "NtkXD");
        return encrypted;
        //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
    }
    
    decrypt()
    {
        //var decrypted = AES.decrypt(encrypted, "NtkXD");
        
        return decrypted;
        //4d657373616765
    }
}



export default PasswordEncryption;