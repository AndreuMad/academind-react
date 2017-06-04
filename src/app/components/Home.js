import React from 'react';

export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: props.person.name,
            age: props.person.initialAge,
            hobbies: props.person.hobbies,
        };
    }

    makeOlder() {
        this.setState({
            age: this.state.age += 3,
        });
    }

    render() {

        return (
            <div>
                <p>{this.state.name}, {this.state.age}</p>
                <p>Hobbies:</p>
                <ul>
                    {this.props.person.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <button onClick={() => this.makeOlder()} className="btn btn-primary">Make me older</button>
            </div>
        );
    }
}

Home.propTypes = {
    person: React.PropTypes.object,
    children: React.PropTypes.element
};