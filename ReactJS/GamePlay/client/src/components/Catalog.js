import { useState, useEffect } from 'react';

import GamesItem from './GamesItem';
import * as gameService from '../services/gameService';


const Catalog = ({
  navigationChangeHandler
}) => {

  const [games, setGames] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      gameService.getAll()
      .then(results => {setGames(results)})
    }, 1000)
    

  }, [])

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        
          {games.length > 0 
          ? games.map(x => <GamesItem key={x._id} game={x} navigationChangeHandler={navigationChangeHandler} />) 
          : <h3 class="no-articles">No games yet</h3>
          }
       
      </section>
    );
};

export default Catalog;