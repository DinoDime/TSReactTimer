import React from 'react';

type TimerProps = {
    hello: string;
}

// class Timer extends React.Component<TimerProps> {

//     render() {
//         const name = this.props.hello;
//         console.log("🚀 ~ file: Timer.tsx ~ line 5 ~ Timer ~ props", name)
//         return <p>HEY</p>
//     }
// }

// const Timer = (props:any) => {
//     console.log("🚀 ~ file: Timer.tsx ~ line 5 ~ Timer ~ props", props)
//     return <p>HEY</p>
// }


// class Timer extends React.Component<TimerProps> {
  
//   start = new Date().getTime();

//   state = {
//     clock: 0
//   }

//   constructor(props:TimerProps) {
//     super(props);

//     // this.ticker = this.ticker.bind(this);

//     setInterval(this.ticker, 1000);
//   }

//   ticker = () => {
//     this.setState({clock: (new Date().getTime() - this.start)});
//   }

//   render(){
//     return(
//       <div>
//         <p>You have used this timer for: </p> <br />
//         <span>{ this.state.clock }</span>
//         <p>seconds ago</p>
//       </div>
//     );
//   }
// }



const Timer = (props: TimerProps) => {

  const start = new Date().getTime();
  const [clock, updateClock] = React.useState(start);

  setInterval(() => {
    updateClock((new Date().getTime() - start))
  }, 1000);

  return (
    <div>
      <p>You have used this timer for: </p> <br />
      <span>{ clock }</span>
      <p>seconds ago</p>
    </div>
  )
}


// type timerprops = {start:number};
// class Timer extends Component<timerprops>{
//     componentDidMount(){
//        setInterval(this.ticker, 1000);
//     }
//     ticker(){
//         this.setState({clock: new Date().getTime() - this.props.start})
//     };
//     constructor(props:timerprops){
//         super(props);
//         this.state = { 
//             clock:0
//         };
//         this.ticker = this.ticker.bind(this);
//     }
//     render(){
//         let clock = Math.round(this.state.clock / 1000);
//         return(
//             <div>
//                 <p>You have used this timer for: </p> <br />
//                 <span>{ clock}</span>
//                 <p>seconds ago</p>
//             </div>
//         );
//     }
// }

export default Timer;