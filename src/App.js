import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import {AppBar, IconButton, FlatButton, RaisedButton} from 'material-ui';
require('./main.scss');
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from './css/materialThemeCustomizations';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

// want to add colors to context to make available to other components
  static childContextTypes = {
    //just declares we will stick on child context, not actually setting it
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span> Assignment Manager</span>}
          iconElementRight={<FlatButton label="Logout" />}
          style={{
          maxHeight: '3vw'
          }}

        />
        {this.props.children}
      </div>
    );
  }
}
