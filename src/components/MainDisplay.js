import React from 'react';
import '../css/MainDisplay.css'
import BeerItem from './BeerItem';

class MainDisplay extends React.Component{

    

        renderBeerItems(){
            return this.props.featuredBeers.map( (beer) => 
                <BeerItem key={beer.id} beer = {beer} handleFavorite = {this.props.handleFavorite}/> 
            );
        }

        renderSearchedBeerItems(){
            return this.props.searchedBeers.map( (beer) => 
                <BeerItem key={beer.id} beer = {beer} handleFavorite = {this.props.handleFavorite}/>
            );
        }

    render(){
        return ( 
        <div>
            <form id = 'search-beers' onSubmit = {this.props.handleSubmit}>
                <input type = "text" placeholder = "Search beers..." name = "searchterm"/>
                <input type = "submit" value = "Search"/>
            </form>
            <div className = "beer-container">
                <h2>Featured</h2>
                <div className ='beer-grid featured-beers'>
                    {this.renderBeerItems()}
                </div>
                <h2>Your Search</h2>
                
                <div className='beer-grid searched-beers'>
                    {this.renderSearchedBeerItems()}
                </div>
                
            </div>
        </div>
        );
    }
}

export default MainDisplay;