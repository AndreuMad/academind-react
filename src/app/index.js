// import React from 'react';
// import { render } from 'react-dom';
//
// import { Main } from './components/Main';
// import { User } from './components/User';
//
// class App extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             username: 'Ivan',
//         };
//     }
//
//     changeUsername(newName) {
//         this.setState({
//             username:newName,
//         });
//     }
//
//     render() {
//
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)} />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
// }
//
// render(<App/>, document.getElementById('app'));

import { createStore } from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            state = state + action.payload;
            break;
        case 'SUBTRACT':
            state = state - action.payload;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log('store updated', store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 10,
});

store.dispatch({
    type: 'ADD',
    payload: 100,
});

store.dispatch({
    type: 'SUBTRACT',
    payload: 200,
});