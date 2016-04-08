Users = Meteor.users;

Users.helpers({
  email() {
    return this.emails[0].address;
  }
})
