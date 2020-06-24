import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="p-2">
            <input
                className="border border-success"
                type = "search"
                placeholder="search robots"
                style={{backgroundColor:'lightblue'}}
                onChange={searchChange}
            />
        </div>
    );
}



export default SearchBox;