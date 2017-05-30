import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  amount: 1,
  amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  actions: {
    submit() {
      const subscription = this.get('store').createRecord('subscription', {
        name: this.get('name'),
        amount: this.get('amount'),
        vegetable: this.get('vegetable')
      });
      subscription.save().then(() => {
        this.transitionToRoute('subscribed');
      });
    }
  }
});
