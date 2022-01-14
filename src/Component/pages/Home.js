import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import './home.css';

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            Redirect:false 
        }
    }
    createUser = (event) => {
        event.preventDefault();
        const userData = {
            id: new Date(),
            FirstName: event.target.FirstName.value,
            LastName: event.target.LastName.value,
            Age: event.target.Age.value,
            // Edit: this.state.id ? 0 : 1
        }

        this.props.dispatch({
            type: 'CREATE',
            userData
        });
        event.target.FirstName.value = '';
        event.target.LastName.value = '';
        event.target.Age.value = '';
        this.setState({
            Redirect:true
        })
        // console.log(this.props.userDetails);
    }

    render() {
        if (this.state.Redirect) {
            return <Redirect to='/userDetails' />
        }
        return (
            <div className="post">
                <h1>Create User</h1>
                <form className="form" onSubmit={this.createUser}>
                    <span>FirstName : </span>
                    <input required type="text" name="FirstName" placeholder="Enter FirstName"  /><br /><br />
                    <span>SecondName : </span>
                    <input required type="text" name="LastName" placeholder="Enter LastName" /><br /><br />
                    <span>Age : </span>
                    <input required type="number" name="Age" placeholder="Enter Age" /><br /><br />
                    <button>Create</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userDetails: state
    }
}

export default connect(mapStateToProps)(Home);
