Meteor.publish('orgs.list', function() {
  if (!this.userId){
    return this.ready();
  }

  return Orgs.find();
})
