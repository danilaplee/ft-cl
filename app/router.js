import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() 
{
	this.resource('login', { path: '/'})
	this.resource('home', { path: '/home'})
	this.resource('brands', { path: '/brands'})
	this.resource('inventory', { path: '/inventory'})
	this.resource('map', { path: '/map'})
	this.resource('profile', { path: '/profile/:user_id'})
});

export default Router;
