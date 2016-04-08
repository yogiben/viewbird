import React from 'react';

import CreateOrgForm from './create_org.jsx';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="wrap">
        <h2>Dashboard</h2>
        <CreateOrgForm />
      </div>
    )
  }
}
