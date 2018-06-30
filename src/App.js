import React, { Component } from 'react';
import './App.css';
import * as api from './utils/Api'
import { fetchFood } from './action'
import Food from './component/Food'
import FoodDetail from './component/FoodDetail'
import Header from './component/Header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends Component {

  state = {
    loading:true
  };
  componentDidMount(){
    this.props.fetchFood().then(() => {
      this.setState({loading:false})
    });
  }
  
  render() {
        
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" render={()=>(
                <Food loading={this.state.loading}/>
              )}>
              </Route>
              <Route exact path="/fooddetail/:id" render={({match})=>(
                <FoodDetail match={match}/>
              )}>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) =>({
  fetchFood: () => api.fetchFood().then(data => dispatch(fetchFood(data)))
});

export default connect(null,mapDispatchToProps)(App);
