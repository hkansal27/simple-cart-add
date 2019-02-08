import React, { Component } from 'react';

export default class Counter extends Component {
    // controlled component, no state poperty
    state = {
        count: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3'],
    };


    render() {
        return (
            <div>
                <span className={this.getBadgeClass()}>{this.getCountValue()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                <div onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    Delete
                </div>
            </div>);
    }

    getBadgeClass() {
        let badgeParentClass = 'badge m-2  badge-';
        badgeParentClass += this.props.counter.value === 0 ? 'warning' : 'primary';
        return badgeParentClass;
    }

    getCountValue() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}