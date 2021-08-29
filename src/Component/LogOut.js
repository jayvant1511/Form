import React from 'react';

function LogOut(props) {

    props.history.push("/login");
    // alert('aa');
    return (
        <div>
            Logging Out
        </div>
    );
}
export default LogOut;