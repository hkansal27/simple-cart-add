import React, { Component } from 'react';

import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 4 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 },
        ]
    }

    incrementHandler = (counter) => {
        let counters = [...this.state.counters];
        const index = this.state.counters.indexOf(counter);
        counters[index].value = counter.value + 1;
        this.setState({
            counters
        })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({
            counters
        })
    }

    deleteHandler = (counterId) => {
        const counters = this.state.counters.filter((counter) => counter.id !== counterId);
        this.setState({
            counters
        })
    }
    render() {
        return (
            <React.Fragment>
                <NavBar totalCount={ this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.deleteHandler} onIncrement={this.incrementHandler} />
                </main>
            </React.Fragment>
        );
    }
}

export default App;