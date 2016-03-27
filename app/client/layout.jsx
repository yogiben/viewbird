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

import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

injectTapEventPlugin()

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  childContextTypes() {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(Theme),
    };
  }

  handleToggleLeftNav() {
    this.setState({open: !this.state.open})
  }

  handleCloseLeftNav() {
    this.setState({open: false})
  }

  render() {
    const {content} = this.props;
    return (
      <div>
      <LeftNav
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={open => this.setState({open})}
        >
        <MenuItem onTouchTap={this.handleCloseLeftNav.bind(this)}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.handleCloseLeftNav.bind(this)}>Menu Item 2</MenuItem>
      </LeftNav>
      <div className={this.state.open ? 'layout-wrapper left-nav-open' : 'layout-wrapper'}>
        <AppCanvas>
          <AppBar
            title="izziLab"
            iconElementLeft={
              <IconButton onTouchTap={this.handleToggleLeftNav.bind(this)}>
                  <MenuIcon />
              </IconButton>
            }
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

          {this.state.open
            ? null
            :
            <FloatingActionButton style={{position: 'fixed', right: 30, bottom: 30}}>
              <ContentAdd />
            </FloatingActionButton>
          }

          <div className="content">{content}</div>
        </AppCanvas>
      </div>
      </div>
    )
  }
}

Layout.childContextTypes = {muiTheme: React.PropTypes.object};

export default Layout;
