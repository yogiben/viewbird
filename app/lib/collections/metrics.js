Metrics = new Mongo.Collection('metrics');

Metrics.attachSchema(new SimpleSchema({
  label: {
    type: String
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      return this.isInsert ? Meteor.userId() : null;
    }
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return this.isInsert ? new Date() : null;
    }
  }
}))


// // Polls a REST api
// poll: {
//   url: "http://twitter.com/bla/bla",
//   interval: "every hour"
//   jsonPath: "page.followersCount"
// }
