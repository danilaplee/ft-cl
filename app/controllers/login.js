import Ember from 'ember';

var LoginController = Ember.ArrayController.extend({
	loggedIn: false,
  loginInput: '',
  passwordInput: '',
	actions: {
		hackIn: function() {
      var loginData = this.get('model').content;
      var loginInput = this.get('loginInput');
      var passwordInput = this.get('passwordInput');
      this.transitionToRoute('home');
		},
    hackInWithFB: function() {
      var loginData = this.get('model').content;
      var loginInput = this.get('loginInput');
      var passwordInput = this.get('passwordInput');
      this.transitionToRoute('home');
    }
	}
})

export default LoginController;