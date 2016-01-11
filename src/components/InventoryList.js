import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import {Card, List, ListItem} from 'material-ui';
import {InventoryItem} from './InventoryItem';
import moment from 'moment';
export default class InventoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = _.sortBy(this.props.data, (d) => moment(d.dueDate));
    console.log(data);
    let inventoryItems = _.map(data, (a, i) => (
      <div
        onClick={this.props.selectInventory.bind(null, a)}
        key={i}
      >
        <InventoryItem
          {...a}
        />
      </div>
      )
    );

    return (

    <Card style={{
        flexGrow: 3,
        minWidth: '10vw',
        overflowY: 'auto'
      }} >
        <List>
          <div style={{
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
           }}>
            Inventory List
          </div>
          {inventoryItems}
        </List>
      </Card>
    );
  }
}
