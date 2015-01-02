import Ember from 'ember';

var ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0); 
  }
});

var HomeRoute = Ember.Route.extend(ResetScroll, {
    model: function() {
      return []
    },
  	renderTemplate: function() {
      	this.render('nav-bar', {  
      	  into: 'application', 
      	  outlet: 'main',
          controller: 'nav'
      	})
    },
    activate: function() {
    this._super.apply(this, arguments); // Call super at the beginning
    // Your stuff
    },
    setupController: function(home, model) {
      home.set('model', model)
    }
})

export default HomeRoute;