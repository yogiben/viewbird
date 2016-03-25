import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Layout from './layout.jsx';
import Home from './home.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {content: (<Home name="arunoda"/>)});
  }
});
