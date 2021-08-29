import React, { Component } from 'react';
import { Suspense } from 'react';
import ReduxDemo from '../reduxDemo';

class DashBoard extends Component {

    render() {
        return (
            <div>
                <ReduxDemo />

                DashBoard Page
                <Suspense></Suspense>
            </div>
        );
    }
}

export default DashBoard;