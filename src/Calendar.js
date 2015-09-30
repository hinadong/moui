import React from 'react/addons';
import { date } from './mo-0.2.0.min.js';

const Calendar = React.createClass({
  propTypes: {
    content: React.PropTypes.string,
  },
  getDefaultProps() {
    return {
      startTime: new Date(),
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      displayMonthNum: 5,
    };
  },
  render() {
    let
      props = this.props,
      monthComponent = [],
      weekComponent = props.weekDays.map(weekDay => {
        return (
          <li>{weekDay}</li>
        )
      });

    for (let i = 0; i < props.displayMonthNum; i++) {
      let
        time = props.startTime,
        year = time.getFullYear(),
        newTime = date.add(time, 'Month', i),
        newYear = newTime.getFullYear(),
        newMonth = newTime.getMonth(),
        daysComponent = [],
        dayOfWeekOnFirst = (new Date(newYear, newMonth, 1)).getDay(),
        days = [31, (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][newMonth];

      for(let j = 0; j < dayOfWeekOnFirst; j++) {
        daysComponent.push(
          <li className="cui_invalid"></li>
        )
      }
      for(let j = 0; j < days; j++) {
        daysComponent.push(
          <li className="cui_calendar_item cui_cld_day_havetxt">{j+1}</li>
        )
      }
      monthComponent.push(
        <div>
          <h1 className="cui_cldmonth">
            {date.format(newTime, 'YYYY年M月')}
          </h1>
          <ul className="cui_cld_daybox">{daysComponent}</ul>
        </div>
      );
    };


    return (
      <div>
        <ul className="cui_cldweek" style={{position: 'static'}}>
          {weekComponent}
        </ul>
        <section className="cui_cldunit">
          {monthComponent}
        </section>
      </div>
    );
  }
});

export default Calendar;