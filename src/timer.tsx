import React, { Component} from 'react';
type timerprops = {start:number};
class Timer extends Component<timerprops>{
    componentDidMount(){
       setInterval(this.ticker, 1000);
    }
    ticker(){
        this.setState({clock: new Date().getTime() - this.props.start})
    };
    constructor(props:timerprops){
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