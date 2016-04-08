export default {
  login: () => {
    Meteor.loginWithGoogle(null, (err) => {
      FlowRouter.go('/dashboard');
    })
  },
  logout: () => {
    Meteor.logout()
  }
}
