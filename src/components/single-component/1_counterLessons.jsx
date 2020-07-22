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
        <img src={this.state.imageUrl} alt="" />
        {/* m-2 means margin 2.  below classNames are from bootstrap.  'class' is a reserved keyword in JS so react uses 'className' */}
        ;
        <span style={this.styles} className="badge badge-primary m-2">
          {/* OR     <span style={{ fontSize:50 }} className="badge badge-primary m-2">   */}

          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
