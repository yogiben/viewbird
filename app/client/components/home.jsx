import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

import actions from '../actions/accounts'

export default Home = ({user}) => (
  <div className="container-fluid wrap">
    <div className="row">
      <div className="col-lg">
        <div className="box-row"><h1>Home page!</h1></div>
      </div>
    </div>
      <div className="row">
        <div className="col-lg">
          <div className="box-row"><h1>ViewBird is really really great and you should totes sign up</h1></div>
        </div>
      </div>
    {user ?
      <RaisedButton
        label="Logout"
        onClick={actions.logout}
      />
      :
      <div className="row">
        <div className="col-lg">
          <div className="box-row">
            <RaisedButton
              label="Sign in with Google"
              onClick={actions.login}
              primary={true}
              />
          </div>
        </div>
      </div>
    }
  </div>
);
