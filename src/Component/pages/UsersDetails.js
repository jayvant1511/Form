import { wait } from '@testing-library/dom';
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';

class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            userDetails : this.props.userDetails
        }
    }
    editHandler = (userID) => {
        this.setState({
            edit: true
        })
        this.props.dispatch({ type: 'EDIT', id: userID })
    }

    deleteHandler = (userId) => {
        this.props.dispatch({ type: 'DELETE', id: userId })
        wait(1000);
        this.setState({
            userDetails : this.props.userDetails
        })
    }
    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <h1>Users Details</h1>
                {this.state.userDetails.map((user) =>
                    <div key={user.id}>
                        {user.edit ? <EditForm user={user} /> :
                            <div className="userData">
                                <span style={{ marginLeft: "1%" }}>{user.FirstName}</span>
                                <span style={{ marginLeft: "10%" }}>{user.LastName}</span>
                                <span style={{ marginLeft: "10%" }}>{user.Age}</span>
                                <span style={{ marginLeft: "10%" }}><button onClick={() => this.editHandler(user.id)}>EDIT</button></span>
                                <span style={{ marginLeft: "10%" }}><button onClick={() => this.deleteHandler(user.id)}>DELETE</button></span>
                            </div>}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state
    }
}

export default connect(mapStateToProps)(UserDetails);