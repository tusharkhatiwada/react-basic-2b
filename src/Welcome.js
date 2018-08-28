import React, { Component } from "react";

export default class Welcome extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: "Tushar"
    //     };
    //     this.handleChangeName = this.handleChangeName.bind(this);
    // }
    state = {
        name: "Tushar"
    };
    handleChangeName = () => {
        this.setState(
            {
                name: "Rupesh"
            },
            () => {
                console.log("State Changed");
            }
        );
    };
    // handleChangeName() {
    //     this.setState({
    //         name: "rupesh"
    //     });
    // }
    render() {
        return (
            <div>
                <h1>{`Welcome to ${this.props.title}`}</h1>
                <h3>{`My name is ${this.state.name}`}</h3>
                <button type="button" onClick={this.handleChangeName}>
                    Change Name
                </button>
            </div>
        );
    }
}

// const Welcome = props => {
//     return <h1>{`Welcome to ${props.title}`}</h1>;
// };

// export default Welcome;
