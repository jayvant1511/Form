import React, { Component } from "react";
import Axios from "axios";

class Home extends Component {


    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            mobileNumber: '',
            city: '',
            district: '',
            state: '',
            pinCode: '',
            dob: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        // event.preventDefault();
         Axios.post("http://localhost:8001/store", this.state)
         .then(Response => {
             console.log(Response);
         })
         .catch(error => {
             console.log(error);
         })
    }


    render() {
        return (
            <div id="content" className="mt-3 mx-5 content">
                <h1 style={{ borderBottom: "3px solid black" }}>Add Data</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name:
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Mobile:
                <input type="mobile" name="namobileNumber" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            City:
                <input type="text" name="city" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            District:
                <input type="text" name="district" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            State:
                <input type="text" name="state" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Pincode:
                <input type="text" name="pincode" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            DOB:
                <input type="text" name="dob" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Home;