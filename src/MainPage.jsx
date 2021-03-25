import React, { Component } from 'react'
import './App.css';

class MainPage extends Component{

    constructor(props){
        super(props);
        this.state ={
        }
    }
    /*componentDidMount() {
        document.title = 'Your page title here';
    }*/

    render() {
        return(
            <div style={{ backgroundImage: "url(/girlimage.png)",backgroundSize: 'cover',backgroundPosition: 'center',minHeight: '100%',height: '100vh',position: 'relative'}}>
                <form>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.8)',left: '20%',padding: '30px',position: 'absolute',top: '40%',zIndex: '999'}}>
                        <span style={{color:'#59abe3',fontFamily: 'Poppins, sans-serif',fontSize: '25px',letterSpacing: '2px',textTransform: 'uppercase',color: '#555',lineHeight: '25px'}} className="aa-New-top-slider-catg">Pay Your Kids' Fee conveniently, from anywhere!</span>
                        <div className="form">
                            <div style={{boxSizing: 'border-box'}}>
                                <br/>
                                <div style={{marginRight: '-15px',marginLeft: '-15px'}}>
                                          <span style={{color:'#59abe3',width: '40%',height: 'auto',display: 'inline-block'}}><b>Email:</b></span>
                                          <span style={{color:'#59abe3',width: '40%',height: 'auto',display: 'inline-block'}}><b>Password:</b></span>
                                </div>
                                <div style={{marginRight: '-15px',marginLeft: '-15px'}}>
                                    <div style={{width : '33.33333333%',width: '40%',height: 'auto',display: 'inline-block'}}>
                                        <div>
                                          <input type="text" placeholder="Enter Your Email" tabindex="0" style={{ border: '1px solid #fff',borderRadius: '5px',color: '#555',height: '33px',padding: '5px',width: '60%',fontSize: '15px'}}></input>
                                        </div>
                                    </div>
                                    <div style={{width : '33.33333333%',width: '40%',height: 'auto',display: 'inline-block'}}>
                                        <div>
                                            <input type="password" placeholder="Create Password" tabindex="0" style={{ border: '1px solid #fff',borderRadius: '5px',color: '#555',height: '33px',padding: '5px',width: '60%',fontSize: '15px'}}></input>
                                            <span>&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="Login" tabindex="0" style={{width : '33.33333333%',width: '40%',height: 'auto',display: 'inline-block',backgroundColor: '#59abe3',border: 'medium none',borderRadius: '5px',color: '#fff',fontSize: '18px',fontWeight: 'bold',height: '40px',outline: 'medium none',textTransform: 'uppercase',width: '30%'}}></input></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default MainPage;