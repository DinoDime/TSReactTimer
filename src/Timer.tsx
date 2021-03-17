import React from 'react';

type TimerProps = {
    hello: string;
}

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
      <p>milliseconds ago</p>
    </div>
  )
}

export default Timer;