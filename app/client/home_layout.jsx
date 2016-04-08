import React from 'react';

import {
  AppCanvas,
  AppBar,
  Styles,
} from 'material-ui';

import injectTapEventPlugin from 'react-tap-event-plugin';

import Theme from './theme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

import MenuItem from 'material-ui/lib/menus/menu-item';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

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
    const {content} = this.props;
    return (
      <div>
      <div>
        <AppCanvas>
          <AppBar
            title="ViewBird"
            iconElementLeft={<div></div>}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
          <div className="content">{content}</div>
        </AppCanvas>
      </div>
      </div>
    )
  }
}

Layout.childContextTypes = {muiTheme: React.PropTypes.object};

export default Layout;
