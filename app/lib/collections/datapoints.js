Datapoints = new Mongo.Collection('datapoints');

Datapoints.attachSchema({
  metric: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  value: {
    type: Number,
    decimal: true
  },
  date: {
    type: Date
  }
})
