/**
 * Created by devin on 1/11/16.
 */

import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

export default class DateRangePicker extends Component {
  handleSelect(date){
    console.log(date); // Momentjs object
  }

  render(){
    return (
      <div>
        <DateRange
          onInit={this.handleSelect}
          onChange={this.handleSelect}
          calendars={1}
        />
      </div>
    )
  }
}

