import React, { Component} from 'react';

class Timer extends Component{
    componentDidMount(){
       this.timer =  setInterval(this.ticker, 1000);
    }
    ticker(){
        this.setState({clock: new Date() - this.props.start})
    };
    constructor(props){
        super(props);
        this.state = {
            clock:0
        };
        this.ticker = this.ticker.bind(this);
    }
    render(){
        let clock = Math.round(this.state.clock / 1000);
        return(
            <div>
                <p>You have used this timer for: </p> <br />
                <span>{ clock}</span>
                <p>seconds ago</p>
            </div>
        );
    }
}

export default Timer;