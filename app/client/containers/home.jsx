import {composeWithTracker} from 'react-komposer';
import Component from '../components/home.jsx';

function composer(props, onData) {
    const user = Meteor.user()
    onData(null, {user});
};

export default composeWithTracker(composer)(Component);
