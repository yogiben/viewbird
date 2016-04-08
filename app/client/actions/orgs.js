export default {
  create: (org) => {
    Meteor.call('orgs.create', org, (e, r) => {
      if (e) {
        return e;
      } else {
        return r;
      }
    })
  }
}
