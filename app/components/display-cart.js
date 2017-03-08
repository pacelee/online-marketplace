import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    removeItem(product) {
      this.get('shoppingCart').remove(product)
    }
  }
});
