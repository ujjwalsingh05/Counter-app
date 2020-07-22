//we have changed index.jsso that it will call "Counters" instead of "Counter". we will now build more than one component
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {

        const { onReset, counters, onDelete, onIncrement } = this.props;


        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    // "value" and "selected" attributes are properties of 'props' object. by default selected is true so we can ignore it.

                    //note that we cannot remove 'key' here although its value is same as 'id'. bcoz 'key' is used internally by react so we cannot use in our counter component.

                    // <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} selected={true} />)}

                    <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />)}
            </div>
        );
    }
}

export default Counters;