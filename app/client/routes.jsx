import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Layout from './layout.jsx';
import HomeLayout from './home_layout.jsx';

import Home from './containers/home.jsx';
import Dashboard from './containers/dashboard.jsx';

FlowRouter.route("/", {
  action() {
    mount(HomeLayout, {content: (<Home />)});
  }
});

FlowRouter.route("/dashboard", {
  action() {
    mount(Layout, {content: (<Dashboard />)});
  }
});
