import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      console.log('saving');
      this.sendAction('save', this.get('list'));
    },
  },
});
