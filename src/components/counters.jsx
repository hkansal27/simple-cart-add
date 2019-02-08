import React, { Component } from 'react';

import Counter from './counter';

class Counters extends Component {


    render() {

        let { onReset, onDelete, onIncrement, counters } = this.props;
        return (
            <React.Fragment>
                <div onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</div>
                <div>
                    {counters.map((counter) =>
                        <Counter key={counter.id} counter={counter} onIncrement={onIncrement} onDelete={onDelete} />
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Counters;