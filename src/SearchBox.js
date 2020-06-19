import React, {Component} from 'react';



class SearchBox extends Component {
    render() {
        return(
            <div className="p-2">
                <input className="border border-success" type="search" placeholder = "search robots" style={{backgroundColor:'lightblue'}}/>
            </div>
        );
    }
}

export default SearchBox;