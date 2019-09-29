import React from 'react';
import '../css/MainDisplay.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BeerItem extends React.Component{
    render(){
        return ( 
        <div className = 'beer-item'>
            <img className = 'beer-image' src = {this.props.beer.image} alt = "beer-image"/>
            <div className = 'beer-item-description'>
                <h2>{this.props.beer.name}</h2>
                <p>{this.props.beer.description}</p>
                    <div className = 'favorite-button-area'>
                        <button id = {this.props.beer.id} name = {this.props.beer.source} onClick = {this.props.handleFavorite} className = 'favorite-button'>
                        </button>
                        {this.props.beer.favoriteState ? <FontAwesomeIcon icon = {['fas','star']} style = {{zIndex: 0}} className = 'favorite-button-icon'/> : 
                        <FontAwesomeIcon icon = {['far','star']} style = {{zIndex: 0}} className = 'favorite-button-icon'/>}
                    </div>
            </div>
        </div>
        );
    }
}

export default BeerItem;

