Meteor.methods({
  'organisations.create': (org) => {
    if (!this.userId){
      throw new Meteor.Error('not-logged-in', 'You must be logged in to create an org');
    }

    org.admins = [this.userId]

    return Organisations.insert(org);
  },
  'organisations.delete': (_id) => {
    check(_id, String);

    let org = Organisations.findOne(_id);

    if (!_.contains(org.admins, this.userId)){
      throw new Meteor.Error('not-admin', "Only admins can delete the org");
    }

    return Organisations.remove(_id);
  }
})
