import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {

    render() {
        let person = {
            name: 'Anna',
            initialAge: 25,
            hobbies: ['sport', 'art', 'music']
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home person={person}>
                            <p>Child element of Home</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));