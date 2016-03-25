Rewards = new Mongo.Collection('rewards');

Rewards.attachSchema(new SimpleSchema({
  label: {
    type: String
  },
  for: {
    type: String,
    optional: true
  },
  goal: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return this.isInsert ? new Date() : null;
    }
  }
}))
