import React from 'react';

import {
  AppCanvas,
  AppBar,
  Styles,
  RaisedButton,
  DatePicker
} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Theme from './theme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';


class Layout extends React.Component {
  childContextTypes() {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(Theme),
    };
  }

  render() {
    injectTapEventPlugin()
    const {content} = this.props;
    return (
      <AppCanvas>
          <AppBar title="izziLab"/>
          <div>{content}</div>
      </AppCanvas>
    )
  }
}

Layout.childContextTypes = {muiTheme: React.PropTypes.object};

export default Layout;
