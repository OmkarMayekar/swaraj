import React,{ Component, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';
import FirstPage from "./FirstPage";

class HeaderComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
        }
    }

  render() {
        return (
        <div class='container2'>
            <div style = {{display : 'flex'}}>
            <img src='/phone_logo.png' class='iconDetails'/><span>&nbsp;&nbsp;&nbsp;&nbsp;9979969696</span>
            <img src='/email_logo.png' class='iconDetailsRight'/><span>&nbsp;&nbsp;&nbsp;&nbsp;info@gmail.com</span>
            <div style = {{marginLeft : '60%'}}>
                <a href="/register-user" class = 'align-to-right-60-percent'>Register</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/login-user" class = 'align-to-right-4-percent'>Login</a>
            </div>
            </div>
        </div>
        );
    }
}

export default HeaderComponent;