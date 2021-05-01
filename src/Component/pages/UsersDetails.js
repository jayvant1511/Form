import React, { Component , useState, useEffect} from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import Data from './Data';

class UserDetails extends Component {

    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <h1>Users Details</h1>
                {/* <table>
                    <tbody>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Age</th>
                            <th>Edit Action</th>
                            <th>Delete Action</th>
                        </tr> */}
                        {this.props.userDetails.map((user) =>
                            <div key={user.id}>
                                {user.edit ? <EditForm user={user} /> : <Data user={user}/>}
                            </div>
                        )}
                    {/* </tbody>

                </table> */}
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