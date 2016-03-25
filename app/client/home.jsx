import React from 'react';

import {
  AppCanvas,
  AppBar,
  Styles,
  RaisedButton,
  DatePicker
} from 'material-ui';

export default Home = ({name}) => (
    <div>
      <div style={{padding: '80px',}}>
          <RaisedButton primary={true} label="Tap"/>
          <br/>
          <DatePicker hintText="Portrait Dialog"/>
          <br/>
          <DatePicker
              hintText="Landscape Dialog"
              mode="landscape"/>
      </div>
    </div>
);
