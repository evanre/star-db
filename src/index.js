// import React from 'react';
// import ReactDOM from 'react-dom';

import SwapiService from './services/swapi-service';
// import App from './components/app'

const swapi = new SwapiService();

swapi.getPerson(1).then((p) => {
    // people.forEach((p) => {
        console.log( p );
    // })
});

// ReactDOM.render(<App />, document.getElementById('root'));
