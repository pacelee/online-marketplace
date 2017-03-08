import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    this.get('products').pushObject(product);
  },
  remove(product) {
    this.get('products').shiftObject(product);
  },
  productPrices: Ember.computed.mapBy('products', 'price'),
  total: Ember.computed.sum('productPrices')
});
