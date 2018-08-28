import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0
    };
    increaseCounter = () => {
        // const { count } = this.state;
        // this.setState({
        //     count: count + 1
        // });

        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };
    decreaseCounter = () => {
        const { count } = this.state;
        // this.setState({
        //     count: count - 1
        // });

        this.setState((prevState, props) => ({
            count: prevState.count - 1
        }));
    };
    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: "30rem" }}>
                    <h1 className="card-header">Counter:</h1>
                    <div className="card-body">
                        <h2>{this.state.count}</h2>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.increaseCounter}
                        >
                            Increase Counter
                        </button>
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={this.decreaseCounter}
                        >
                            Decrease Counter
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
