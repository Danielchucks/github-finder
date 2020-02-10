import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import User from './components/users/User';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
//import UserItem from './components/users/UserItem';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  // async componentDidMount(){
  //   //Checking if the environment variable is working
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    
  //   setLoading(true)
  //   //Making a request from github APIs method is 'axios' this deal with promises 
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //    console.log(res.data)
  //    this.setState({users: res.data, loading: false})
    
  // }
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App"> 
              <Navbar title="Github-Dev Finder" icon="fab fa-github" />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  <Route component={NotFound} />
                  )} />
                </Switch> 
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
