import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';


class App extends Component {
  //the component that owns a piece of the state, should be the one modifying it. here, counters[] is owned by 'Counters' component so 'Counter' cannot change it directly.  'Counter' component will raise an event 'onDelete' and 'Counters' component will handle the event via 'handleDelete()'.
  state = {
    counters: [
      { id: 1, value: 0 },  //id will identify the counter and value will be used later to set the initial value of the counter to 0
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    // create a counters[] and give it to the setState()
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });

  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters });


  };

  handleDelete = (counterId) => {
    //in react we do not update the state directly, i.e. we will not remove a counter from counters[]. instead we will create a new array with that counter and then call 'setState()' of the component and let react update the state.
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
