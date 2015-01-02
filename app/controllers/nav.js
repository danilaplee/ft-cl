import Ember from 'ember';

var NavController = Ember.ArrayController.extend({
  actions: {
    displayMenu: function() {
      var sideslider = $('[data-toggle=collapse-side]');
      var sel = sideslider.attr('data-target');
      var sel2 = sideslider.attr('data-target-2');
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
    }
  }
})

export default NavController;