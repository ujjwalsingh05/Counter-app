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

    // conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag} > {tag} </li>)}</ul>;
    }

    render() {
        return (
            <div>
                {this.renderTags()}
                {/* notice the rendering below */}
                {this.state.tags.length === 0 && 'Please create new tags!'}

            </div>

        );
    }

}

export default Counter;
