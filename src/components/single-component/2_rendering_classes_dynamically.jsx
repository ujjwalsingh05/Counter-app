import React, { Component } from "react";

class Counter extends Component {
  state = {
    //any data that components need
    count: 0,
    imageUrl: "https://picsum.photos/200", //generate a random 200x200 photo
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
