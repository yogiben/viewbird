import {composeWithTracker} from 'react-komposer';
import Component from '../components/dashboard.jsx';

function composer(props, onData) {
    const user = Meteor.user();

    if (Meteor.subscribe('orgs.list').ready()){
        const orgs = Orgs.find().fetch()
        const orgsCount = Orgs.find().count()
        onData(null, {user, orgs});
    }

};

export default composeWithTracker(composer)(Component);
