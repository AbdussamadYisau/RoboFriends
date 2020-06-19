import React, {Component} from 'react';
import Card from './Card';
import {robots} from './robots';


class CardList extends Component {
    render() {
        const cardArray = robots.map((user, i) => {
            return <Card id = {robots[i].id} name={robots[i].name} email={robots[i].email}/>
        });
        return(
            <div className = "d-flex flex-wrap">
               {cardArray}
            </div>
        );
    }
}

export default CardList