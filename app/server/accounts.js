Meteor.startup(function() {
  if (Meteor.settings && Meteor.settings.serviceConfigurations) {
    return _.each(Meteor.settings.serviceConfigurations, function(config, service) {
      return ServiceConfiguration.configurations.upsert({
        service: service
      }, {
        $set: config
      });
    });
  }
});

Accounts.onCreateUser(function(options, user) {
  let profile = options.profiles || {};

  let google = user.services.google

  user.emails = [
    {address: google.email, verified: google.verified_email}
  ]

  profile.firstName = google.given_name;
  profile.lastName = google.family_name;
  profile.picture = google.picture;
  profile.gender = google.gender;

  user.profile = profile;
  return user;
});
