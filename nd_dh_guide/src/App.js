import React, { Component } from 'react';
import { Collection, CollectionItem, Navbar, NavItem, Button, Row, Col, Input, Autocomplete } from 'react-materialize';
import logo from './logo.svg';
import './App.css';
import { getFood } from './utils/api';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: [],
    };
    this.setFoods = this.setFoods.bind(this);
  }

  async setFoods() {
    const food = await getFood();
    this.setState({ foods: food });
  }

  componentDidMount() {
    this.setFoods();
  }

  render() {
    const { foods } = this.state;
    let foodData = {};
    foods.map((food) => foodData[food] = null);
    console.log('foodData ', foodData);
    return (
      <div className="App">
        <Navbar brand='Dining Hall Guide' right>
          <NavItem>Sign Up</NavItem>
          <NavItem>Log In</NavItem>
        </Navbar>

        <Row>
          <Autocomplete 
            title='Food'
            data = {foodData}
          />
        </Row>
      </div>
    );
  }
}

export default App;
