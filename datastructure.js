// KPIs
{
  label: "Twitter Users",

  // Milestone is binary
  // Datapoints
  inputType: "milestone" // ["milestone", "datapoints"]

  // Polls a REST api
  poll: {
    url: "http://twitter.com/bla/bla",
    interval: "every hour"
    jsonPath: "page.followersCount"
  }
}

// Datapoints
{
  kpi: "_id"
  date: Date
  value: 154
}

// Goals
{
  label: "Reach 5000 followers",
  kpi: "_id", // _id or null
  achievedAt: Date

  // For metrics with inputType datapoints
  condition: {
    comparison: "GTE",
    value: 5000
  }

  // For metrics with inputType milestone
  condition: {
    deadline: null
  }
}

// Rewards
{
  label: "Office yoga session",
}
