Meteor.methods({
  'orgs.create': function (org) {
    if (!this.userId){
      throw new Meteor.Error('not-logged-in', 'You must be logged in to create an org');
    }

    org.admins = [this.userId]
    org.members = [this.userId]

    return Orgs.insert(org);
  },
  'orgs.delete': function (_id) {
    check(_id, String);

    let org = Orgs.findOne(_id);

    if (!_.contains(org.admins, this.userId)){
      throw new Meteor.Error('not-admin', "Only admins can delete the org");
    }

    return Orgs.remove(_id);
  }
})
