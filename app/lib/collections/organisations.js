Orgs = new Mongo.Collection('orgs');

Orgs.attachSchema(new SimpleSchema({
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
  },
  members: {
    type: [String],
    regEx: SimpleSchema.RegEx.Id
  },
  visibility: {
    type: String,
    allowedValues: ['public', 'link']
  }
}))
