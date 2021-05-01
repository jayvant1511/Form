import React, { Component } from 'react';
import { connect } from 'react-redux';

class Data extends Component {
    render() {
        return (
            <>
                 {this.props.user.FirstName}
                 {this.props.user.LastName}
                 {this.props.user.Age}
                <button onClick={() => this.props.dispatch({ type: 'EDIT', id: this.props.user.id })}>EDIT</button>
                <button onClick={() => this.props.dispatch({ type: 'DELETE', id: this.props.user.id })}>DELETE</button>
            </>
        );
    }
}

export default connect()(Data);