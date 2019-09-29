import React from 'react';
import '../css/MainDisplay.css';
import BeerItem from './BeerItem';

class Favorites extends React.Component{

    renderFavoriteBeers = () =>{
        return this.props.favoriteBeers.map( (beer) => 
                    <BeerItem key={beer.id} beer = {beer} handleFavorite = {this.props.handleFavorite}/>
                );
      }

    handleFavoriteClick = (event) => {
        let beerArray = [...this.props.favoriteBeers];
        this.props.handleFavorite(event.target.id,beerArray);
    }

    render(){
        return (
            <div className='favorites'>
                <div className='beer-container'>
                    <h2>Favorites</h2>
                    <div className='beer-grid'>
                        {this.renderFavoriteBeers()}
                    </div>
                </div>
            </div>
        );
    }
}


export default Favorites;