import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel()
    {
      localStorage.removeItem('user_id');
      if (!localStorage.getItem('user_id'))
      {
        this.transitionTo('accounts');
      }
      
    }
});
