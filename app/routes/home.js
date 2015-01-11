import Ember from 'ember';

var photos = [
  {
    'id': 0,
    'isLiked':false,
    'authorID': 1,
    'photoSrc': '/images/0.png',
    'photoName': 'photo1',
    'photoComments': [12, 13, 23],
    'photoText':'my dogue looks real horny',
    'photoRating': 3,
    'photoBrands':[24, 15],
    'ratedBy':[1, 23, 15]
  },
  {
    'id': 1,
    'isLiked':true,
    'authorID': 1,
    'photoSrc': '/images/1.png',
    'photoName': 'photo1',
    'photoComments': [12, 13, 23],
    'photoText':'Ma boyfriend looks real rich',
    'photoRating': 2,
    'photoBrands':[24, 15],
    'ratedBy':[1, 23, 15]
  },
  {
    'id': 2,
    'isLiked':false,
    'authorID': 1,
    'photoSrc': '/images/2.png',
    'photoName': 'photo1',
    'photoComments': [12, 13, 23],
    'photoText':'Hello World!',
    'photoRating': 1,
    'photoBrands':[24, 15],
    'ratedBy':[1, 23, 15]
  }
]

var ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0); 
  }
});

var HomeRoute = Ember.Route.extend(ResetScroll, {
    model: function() {
      return photos;
    },
  	renderTemplate: function() {
      	this.render('nav', {  
      	  into: 'application', 
      	  outlet: 'nav',
          controller: 'nav'
      	}),
        this.render('timeline', {  
          into: 'application', 
          outlet: 'main',
          controller: 'home'
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