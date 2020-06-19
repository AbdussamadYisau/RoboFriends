import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
class App extends Component {
    render(){
        return(
            <div className="text-center">
                <h1>RoboFriends</h1>
                <SearchBox/>
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;