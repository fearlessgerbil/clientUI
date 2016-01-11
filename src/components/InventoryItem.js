import React from 'react';
import {List, ListItem, Avatar, Card} from 'material-ui';
import moment from 'moment';

export const InventoryItem = (props) => {
  return (
    <Card
      style={{
      margin: '2vh 2vh 2vh 2vh'
    }}
    >
      <ListItem
        primaryText= {props.item}
        secondaryText= {props.desc}
        rightAvatar={<Avatar src={props.img} />}
      />
    </Card>
  )
};
