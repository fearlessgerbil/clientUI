import React from 'react';
import {List, ListItem, Avatar, Card, CardText, RaisedButton, CardActions, DatePicker} from 'material-ui';
import moment from 'moment';
import RangePicker from 'react-daterange-picker';
import DRPicker from './DateRangePicker';
import axios from 'axios';
export default class InventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props, {showing: false, isCheckingOut: false, dates: []})
  }
  handleDetailsClick() {
    this.setState({
      showing: !this.state.showing
    })
  }
  handleCheckingOutClick() {
    this.setState({
      isCheckingOut: !this.state.isCheckingOut
    })
  }
  setDates(dates) {
    this.setState({
      dates: dates
    })
  }

  checkout() {
    axios.post('http://localhost:8088/api/messages', {
      name: 'Devin',
      dates: this.state.dates,
      items: [this.state._id],
      businessId: this.state.businessId
    }).then(function(res) {
      console.log('checked out item')
      console.log(res)
    })
  }

  render() {
    let {item, price, img, desc, showing, isCheckingOut, dates} = this.state;
    console.log("dates selected for inventory item" + dates);
    let checkingOut = isCheckingOut ? (
      <div>
        <DRPicker handleDates={this.setDates.bind(this)} />
      </div>
    ) : '';

    let customizing = dates.length ? (
      <RaisedButton
        label="Checkout"
        secondary={true}
        onClick={this.checkout.bind(this)}
      />
    ) : (
      <RaisedButton
        label="Select Dates to Rent Item"
        onClick={this.handleCheckingOutClick.bind(this)}
      />
    )
    return (
      <Card
        style={{
      margin: '2vh 2vh 2vh 2vh'
    }}
      >
        <div>
          <ListItem
            primaryText= {item}
            secondaryText= {'$' + price + ' per day'}
            rightAvatar ={<Avatar src={img} />}
            onClick={this.handleDetailsClick.bind(this)}
          >
        </ListItem>
        </div>
        { showing ?
          <div>
            <CardText>
            {desc}

            </CardText>
            <CardActions>
              {customizing}
            </CardActions>
            {checkingOut}
            </div>
          : ''
        }
      </Card>
    )
  }
}
