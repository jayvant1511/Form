import React, { Component } from 'react';
import { createStore } from 'redux';

class reduxDemo extends Component {
    render () {
        // 2 reducer :state, action
        const reducer = function (state, action) {
            console.log(action.type);
            if(action.type === "A") {
                action.val = action.val + 'aaaa';
                return action.val;
            }  
            return state;  
        }

        // 1 : Store : reducre , store
        const store = createStore(reducer, "tstrd");


        // 3. subscriber
        store.subscribe(() => {
            console.log(store.getState());
        })

        // 4. dispatch action
        store.dispatch({
            type : "A",
            val : "10"            
        })


        return(
            <div> REDUX </div>
        );
    }
}

export default reduxDemo;