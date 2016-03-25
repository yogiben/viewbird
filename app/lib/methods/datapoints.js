Meteor.methods({
  'datapoints.create': function (datapoint) {

    check(datapoint, {
      metric: String,
      value: Number,
      date: Match.Optional( Date )
    })

    datapoint.date = datapoint.date || new Date();

    if (Metrics.findOne(metric).owner !== this.userId) {
      throw new Meteor.Error('unauthorized', "You do not have permission to this metric");
    }

    return Datapoints.insert(datapoint);
  }
})
