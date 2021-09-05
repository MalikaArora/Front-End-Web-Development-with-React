import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home  from './HomeComponent';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
    };

  } 

  onDishSelect(dishId){

    this.setState({
        selectedDish: dishId
    });

}
 
  render(){

    const HomePage = () => {
      return <Home/>;
    }

    return(
      <div>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );

  }

}

export default Main;
