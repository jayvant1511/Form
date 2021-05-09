import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./home.css"
class Data extends Component {
    render() {
        return (
            <div className="userData">
                <span style={{ marginLeft: "1%" }}>{this.props.user.FirstName}</span>
                <span style={{ marginLeft: "10%" }}>{this.props.user.LastName}</span>
                <span style={{ marginLeft: "10%" }}>{this.props.user.Age}</span>
                <span style={{ marginLeft: "10%" }}><button onClick={() => this.props.dispatch({ type: 'EDIT', id: this.props.user.id })}>EDIT</button></span>
                <span style={{ marginLeft: "10%" }}><button onClick={() => this.props.dispatch({ type: 'DELETE', id: this.props.user.id })}>DELETE</button></span>
            </div>
        );
    }
}

export default connect()(Data);