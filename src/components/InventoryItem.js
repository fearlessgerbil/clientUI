import React from 'react';
import {List, ListItem} from 'material-ui';
import moment from 'moment';
import FileCloudUpload from 'react-material-icons/icons/file/cloud-upload';

export const InventoryItem = (props) => {
  return (
      <ListItem
        primaryText= "inventory item"
        secondaryText= "some other details"
        rightIcon={<FileCloudUpload />}
      />
  )
};
