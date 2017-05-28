import Ember from 'ember';

export default Ember.Controller.extend({
  amount: 1,
  amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  actions: {
    submit() {
      console.log('Should submit form here');
      // TODO submit form to backend
      this.transitionToRoute('subscribed');
    }
  }
});
