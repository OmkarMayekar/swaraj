import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import HeaderComponent from  "./HeaderComponent.jsx"; 
import NavigationBar from "./NavigationBar";
import FirstPage from "./FirstPage";
import Home from "./Home";
import RegisterUser from "./RegisterUserComponent.jsx";
import LoginUser from "./LoginUserComponent.jsx";
import MainPage from "./MainPage.jsx";

class App extends React.Component 
{
  render(){
  return (
    <div>
        <Helmet>
              <title>Home Property</title>
        </Helmet> 
        <div>
          <HeaderComponent/>
        </div>
        <Divider/>
                    <Router>
                            <Switch>
                                <Route path="/firstpage" exact component={FirstPage} />
                                <Route path="/" exact component={Home} />
                                <Route path="/register-user" exact component={RegisterUser} />
                                <Route path="/login-user" exact component={LoginUser} />
                                <Route path="/MainPage" exact component={MainPage} />
                            </Switch>
                    </Router>
    </div>

  );
}
}

export default App;
