import React from 'react';
import {List, ListItem, Avatar} from 'material-ui';
import moment from 'moment';
import FileCloudUpload from 'react-material-icons/icons/file/cloud-upload';

export const InventoryItem = (props) => {
  return (
      <ListItem
        primaryText= {props.item}
        secondaryText= {props.desc}
        rightAvatar={<Avatar src={props.img} />}
      />
  )
};
