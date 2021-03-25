import React,{ useLayoutEffect, Component, useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MainPage from "./MainPage.jsx";

const myDivStyle = {
  display: 'flex',
  justifyContent: 'space-around'
};


class Home extends Component{

    constructor(props){
        super(props);
        this.state ={
        }
       
    }
    /*componentDidMount() {
        document.title = 'Your page title here';
    }*/

  render() {
        return (
                <Carousel autoPlay>
                <div>
                    <img src="/girlimage.png" />
                </div>
                <div>
                    <img src="/Store.jpg" />
                </div>
                <div>
                    <img src="/Welcome.jpg" />
                </div>
            </Carousel>
        );
    }
}

export default Home;