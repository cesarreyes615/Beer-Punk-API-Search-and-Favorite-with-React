import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons/faStar';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons/faStar';
import './App.css';
import MainDisplay from './components/MainDisplay';
import Nav from './components/Nav';
import Favorites from './components/Favorites';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


library.add(faStarSolid,faStarRegular);

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      searchedBeers: [],
      favoritedBeers: []
    };
  }

  componentWillMount(){
    let beerData;
    fetch("https://api.punkapi.com/v2/beers?")
        .then( (response) => {
            return response.json();
        })
        .then((result) => {
            beerData = result.map((beer) => {
                return ({
                    name: beer.name,
                    image: beer.image_url,
                    description: beer.description,
                    id: beer.id,
                    source: 'featured',
                    favoriteState: false
                });
            });
            this.setState({ beers: beerData });
        });
    }

  handleFavorite = (event) => {
    console.log('Entered App.js');
    console.log(event.target);
    console.log(event.target.name);
    console.log(event.target.id);
    let beerArray;
    let favoriteBeers = [...this.state.favoritedBeers];
    let beerID = event.target.id;
    let beerSource = event.target.name;
    let beerToFavorite;
    let checkIfFavorited = this.state.favoritedBeers.findIndex( beer => beer.id == beerID);
    if(beerSource == 'featured'){
      beerArray = [...this.state.beers];
      beerToFavorite = beerArray.findIndex( beer => beer.id == beerID);
      beerArray[beerToFavorite].favoriteState = !beerArray[beerToFavorite].favoriteState;
      this.setState({beers: beerArray});
    }
    else{
      beerArray = [...this.state.searchedBeers];
      beerToFavorite = beerArray.findIndex( beer => beer.id == beerID);
      beerArray[beerToFavorite].favoriteState = !beerArray[beerToFavorite].favoriteState;
      this.setState({searchedBeers: beerArray});
    }
    checkIfFavorited > -1 ? favoriteBeers.splice(checkIfFavorited,1) : favoriteBeers = [beerArray[beerToFavorite],...favoriteBeers];
    this.setState({favoritedBeers: favoriteBeers});
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({ searchedBeers: []});
    let beerToSearch = event.target.searchterm.value;
    let beerData;
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${beerToSearch}`)
    .then( (response) => {
        return response.json();
    })
    .then( (result) => {
        beerData = result.map((beer) => {
            return ({
                name: beer.name,
                image: beer.image_url,
                description: beer.description,
                id: beer.id,
                source: 'search',
                favoriteState: false
            });
        });
        this.setState({ searchedBeers: beerData });
    });
}

  render(){
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path='/' exact render={ (props) => <MainDisplay {...props} handleFavorite = {this.handleFavorite} featuredBeers = {this.state.beers} searchedBeers = {this.state.searchedBeers} handleSubmit = {this.handleSubmit}/>}/>
            <Route path='/favorites' exact render={(props) => <Favorites {...props} handleFavorite = {this.handleFavorite} favoriteBeers = {this.state.favoritedBeers}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
