import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
    
    async componentDidMount() {
        await console.log("EDIT");
    }

    updateUser = (event) => {
        event.preventDefault();

        const userData = {
            FirstName: event.target.FirstName.value,
            LastName: event.target.LastName.value,
            Age: event.target.Age.value,
        }
        var  st = this.props.dispatch({
            type: 'UPDATE',
            id: this.props.user.id,
            data: userData
        });
        console.log(st);
        event.target.FirstName.value = '';
        event.target.LastName.value = '';
        event.target.Age.value = '';
    }

    
    render() {
        return (
            <div className='post'>
                <h1>Update User</h1>
                <form className="form" onSubmit={this.updateUser}>
                    <input required type="text" name="FirstName" placeholder="Enter FirstName" defaultValue={this.props.user.FirstName} /><br /><br />
                    <input required type="text" name="LastName" placeholder="Enter LastName" defaultValue={this.props.user.LastName} /><br /><br />
                    <input required type="number" name="Age" placeholder="Enter Age" defaultValue={this.props.user.Age} /><br /><br />
                    
                    <button>Update</button>
                </form>
            </div>
        );
    }
}


export default connect()(EditForm);