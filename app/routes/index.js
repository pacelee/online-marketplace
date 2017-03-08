import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    products: this.store.findAll('product'),
    reviews: this.store.findAll('review')
  });
  },
  actions: {
  saveReview(params) {
   var newReview = this.store.createRecord('review', params);
   var product = params.product;
   product.get('reviews').addObject(newReview);
   newReview.save().then(function() {
     return product.save();
   });
   this.transitionTo('index', product);
 }
 }
});
