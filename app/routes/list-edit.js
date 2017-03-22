import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    editList (list) {
      list.save()
      .then(() => this.transitionTo('lists'));
    }
  }
});
