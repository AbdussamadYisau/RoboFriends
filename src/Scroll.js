import React, { Fragment } from 'react';


const Scroll = (props) => {
    return(
        <Fragment>
            <main style = {{overflow: 'scroll', border:'5px solid black', height: '800px'}}>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Scroll;


