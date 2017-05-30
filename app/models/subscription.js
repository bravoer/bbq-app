import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  amount: DS.attr('number'),
  vegetable: DS.attr()
});
