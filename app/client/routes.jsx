import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Layout from './layout.jsx';

import Home from './home.jsx';
import Dashboard from './dashboard.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {content: (<Home />)});
  }
});

FlowRouter.route("/dashboard", {
  action() {
    mount(Layout, {content: (<Dashboard />)});
  }
});
