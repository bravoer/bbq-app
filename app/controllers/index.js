import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  amount: 1,
  amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  isAbsent: null,
  isPresent: Ember.computed('isAbsent', function() {
    return this.get('isAbsent') === false;
  }),
  actions: {
    submit() {
      const amount = this.get('isPresent') ? this.get('amount') : 0;
      const subscription = this.get('store').createRecord('subscription', {
        name: this.get('name'),
        amount: amount,
        vegetable: this.get('vegetable')
      });
      subscription.save().then(() => {
        this.transitionToRoute('subscribed');
      });
    },
    setIsAbsent() {
      this.set('isAbsent', true);
    },
    setIsPresent() {
      this.set('isAbsent', false);
    }
  }
});
