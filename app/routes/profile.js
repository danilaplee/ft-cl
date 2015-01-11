import Ember from 'ember';

var author = [
  {
    'id': 1,
    'isLiked':false,
    'photoSrc': '/images/0.png',
    'name': 'photo1',
    'photoComments': [12, 13, 23],
    'aboutMe': 'lalalala',
    'myBrands': [12,22,41],
    'ratedBy':[1, 23, 15]
  }
]

var ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0); 
  }
});

var profileRoute = Ember.Route.extend(ResetScroll, {
    model: function() {
      return author;
    },
  	renderTemplate: function() {
      	this.render('nav', {  
      	  into: 'application', 
      	  outlet: 'nav',
          controller: 'nav'
      	}),
        this.render('user', {  
          into: 'application', 
          outlet: 'main',
          controller: 'profile'
        })
    },
    activate: function() {
    this._super.apply(this, arguments); // Call super at the beginning
    // Your stuff
    },
    setupController: function(profile, model) {
      profile.set('model', model)
    }
})

export default profileRoute;