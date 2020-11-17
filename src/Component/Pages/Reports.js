import React, { Component } from "react";
import * as AiIcons from 'react-icons/ai';
// import Axios from "axios";

class Reports extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: null,
            loading: true
        };
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    async componentDidMount() {
        const url = "http://localhost:8001/user/details";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            persons: data.users,
            loading: false
        });
        // console.log(data.data[0]);
    }

    fillReportForm = () => {
        return (
            <div className="content" >
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>action</th>
                            {/* <th>mobile</th>
                            <th>city</th>
                            <th>district</th>
                            <th>state</th>
                            <th>pincode</th>
                            <th>dob</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persons && this.state.persons.map((person) => {
                            return (
                                <tr>
                                    <th>{person.name}</th>
                                    <th>{person.email}</th>
                                    <th>

                                    </th>
                                    {/* <th>{person.mobileNumber}</th>
                                    <th>{person.city}</th>
                                    <th>{person.district}</th>
                                    <th>{person.state}</th>
                                    <th>{person.pinCode}</th>
                                    <th>{person.dob}</th> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.state.loading ? <span>Loading</span> : this.fillReportForm()}
            </div>
        );
    }
}

export default Reports;