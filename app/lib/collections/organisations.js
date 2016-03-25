Organisations = new Mongo.Collection('organisations');

Organisations.attachSchema(new SimpleSchema({
  label: {
    type: String
  },
  domain: {
    type: String,
    optional: true
  },
  admins: {
    type: [String],
    regEx: SimpleSchema.RegEx.Id
  }
}))
