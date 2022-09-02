import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel()
    {
      if (!localStorage.getItem('user_id'))
      {
        this.transitionTo('accounts');
      }
      
    }
});
