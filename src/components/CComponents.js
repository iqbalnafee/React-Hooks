import React, { Component } from 'react'

export default class CComponents extends Component {

    

    state = {
        message : "Class Component",
        time : new Date().toString(),
    };

    componentDidMount(){
        console.log("I am from Did Mount");
        this.interval = setInterval(this.showDate(),3000);
        //The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
        //setInterval(function(){ alert("Hello"); }, 3000);
    }

    componentDidUpdate(){
        console.log("I am from update");
    }

    componentWillUnmount(){
        console.log("I am from Unmount");
        clearInterval(this.interval);
        //The clearInterval() method clears a timer set with the setInterval() method.
        //The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
        //myVar = setInterval("javascript function", milliseconds);
        //To be able to use the clearInterval() method, you must use a variable when creating the interval method:
        //Then you will be able to stop the execution by calling the clearInterval() method.
    }

    showDate(){
        this.setState({ time: new Date().toString() });
    }

    render() {
        return (
            <div>

                <h1>{this.state.message}</h1>
                <h2>{this.state.time}</h2>
                
            </div>
        )
    }
}
