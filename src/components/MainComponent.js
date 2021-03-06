import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home  from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };

  } 

  onDishSelect(dishId){

    this.setState({
        selectedDish: dishId
    });

}
 
  render(){

    const HomePage = () => {
      return <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
      promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
      leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
      comment={this.state.comments.filter((comment)=>comment.featured)[0]}      
      />;
    }

    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId,10))}
        /> /*convert string to base 10 int */

      );
    }

    const AboutUsPage = () => {
        return(
            <About 
                leaders={this.state.leaders}
            />
        );
    };


    return(
      <div>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );

  }

}

export default Main;
