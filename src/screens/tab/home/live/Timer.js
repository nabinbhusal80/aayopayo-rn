import React, { Component } from 'react';
import { View, Text } from 'native-base';
import reactTimer from 'react-native-timer';
import DateFns, {
  getYear, getMonth, getDate, getHours, getMinutes, getSeconds,
} from 'date-fns';

const parseDateAndTime = (date, time) => {
  const dateArr = date.split('-').map(e => parseInt(e, 10));
  const timeArr = time.split(':').map(e => parseInt(e, 10));
  return [...dateArr, ...timeArr];
};

class Timer extends Component {
  state={ time: null };

  componentDidMount() {
    const { endDate, endTime } = this.props;
    const secs = DateFns.differenceInSeconds(
      new Date(...parseDateAndTime(endDate, endTime)),
      new Date(
        getYear(Date.now()),
        getMonth(Date.now()) + 1,
        getDate(Date.now()),
        getHours(Date.now()),
        getMinutes(Date.now()),
        getSeconds(Date.now()),
      ),
    );
    this.setState({ time: secs });
    this.timer();
  }

  componentDidUpdate() {
    const { onTimerFinish, name} = this.props;
    const { time } = this.state;
    if (name === 'live' && time === 0) {
      onTimerFinish();
    }
  }

  componentWillUnmount() {
    const { context, name } = this.props;
    reactTimer.clearInterval(context, name);
  }

  timerRenderHelper = () => {
    const { time } = this.state;
    const day = Math.floor(time / 86400);

    const hr = Math.floor((time % 86400) / (60 * 60));
    const min = Math.floor(((time % 86400) % (60 * 60)) / 60);
    const sec = ((time % 86400) % (60 * 60)) % 60;
    return `${day}d ${hr}hr: ${min}m: ${sec}s`;
  };

  timer = () => {
    const { context, name } = this.props;
    // console.log('context of current timer=', context,'name of timer', name);
    return reactTimer.setInterval(context, name, () => {
      const { time } = this.state;
      if (time > 0) {
        this.setState({ time: time - 1 });
      } else {
        reactTimer.clearInterval(context, name);
      }
    }, 1000);
  }


  render() {
    const { time } = this.state;
    const { productDetails } = this.props;
    return (
      <View>
        {time > 0
          ? <Text style={{ color: '#000', fontSize: productDetails ? 16 : 13, fontWeight: 'bold' }}>{this.timerRenderHelper()}</Text>
          : <Text style={{ color: '#039BE5', fontSize: 15 }}> Time Up</Text>
        }
      </View>
    );
  }
}
export default Timer;
