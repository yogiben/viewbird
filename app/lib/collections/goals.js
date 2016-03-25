Goals = new Mongo.Collection('goals');

Goals.attachSchema(new SimpleSchema({
  label: {
    type: String
  },
  metric: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Id
  },
  condition: {
    type: Object
  },
  'condition.comparison': {
    type: String,
    allowedValues: ["GTE", "LTE"]
  },
  deadline: {
    type: Date,
    optional: true
  },
  achieved: {
    type: Boolean,
    defaultValue: false
  },
  achievedAt: {
    type: Date
  }
}));
