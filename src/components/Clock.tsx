import React, { Component } from 'react';
 
class Clock extends Component<{},{date:Date}> {
	constructor(props: { date: Date; } | Readonly<{ date: Date; }>) {
		super(props);
		this.state = {date: new Date()};
	}

    private timerId:any;

    tick(){
        this.setState({
            date : new Date()
        });
    }


    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    componentDidUpdate(){
        console.log("Component updated");
    }
 
	render() {
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
 
export default Clock;