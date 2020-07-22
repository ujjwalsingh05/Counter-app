import React, { Component } from "react";

class Counter extends Component {
    state = {
        //any data that components need
        count: 0,
        tags: [],
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold",
    };

    // Handling events
    handleIncrement() {
        console.log("Increment Clicked");
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

            </div>

        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"; // "badge-" here allows us to skip writing "badge-warning" and "badge-primary" in the below line
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

}

export default Counter;
