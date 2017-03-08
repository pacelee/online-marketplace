import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var product = this.store.findRecord('product', params.product_id);
    return Ember.RSVP.hash({
      product : product
    });
  },
  actions: {
  saveReview(params) {
   var newReview = this.store.createRecord('review', params);
   var product = params.product;
   product.get('reviews').then(function(reviews) {
     reviews.addObject(newReview);
   });
   newReview.save()
   this.transitionTo('product', product);
 }
 }
});
