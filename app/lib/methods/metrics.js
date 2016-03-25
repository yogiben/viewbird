Meteor.methods({
  'metrics.create': function(metric) {
    
    check(metric, {
      label: String
    });

    metric.userId = this.userId;

    return Metrics.insert(metric);
  }
})
