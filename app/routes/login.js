import Ember from 'ember';

var loginData = [
  { 'id': 0,
    'name':'danila',
    'password':111
  },
  { 'id': 1,
    'name':'denis',
    'password':111
  },
  { 'id': 2,
    'name':'tim',
    'password':111
  }
]
var ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

var LoginRoute = Ember.Route.extend(ResetScroll, {
    model: function() {
      return loginData;
    },
  	renderTemplate: function() {
      	this.render('login', {  
      	  into: 'application', 
      	  outlet: 'main',
          controller: 'login'
      	})
    },
    activate: function() {
    this._super.apply(this, arguments); // Call super at the beginning
    // Your stuff
    },
    setupController: function(login, model) {
      login.set('model', model)
    }
})

export default LoginRoute;