import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  done: DS.attr('boolean'),
  list: DS.belongsTo('list')
  // ^ backenbd list    ^ this connects the front end model to the backend
});
