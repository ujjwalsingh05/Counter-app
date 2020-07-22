import React, { Component } from "react";

class Counter extends Component {
  state = {
    //any data that components need
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
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

        <ul>
          {/* below, tag is a string from tags[] and we are rendering it dynamically using jsx. In map method, we need to set key for each item in the list. Because if the state of this element in the virtual DOM  changes, reacts need to figure out that change quickly to update the real DOM and get it in sync with virtual DOM  */}

          {this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}

        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
