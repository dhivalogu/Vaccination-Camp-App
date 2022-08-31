import Ember from 'ember';

export default Ember.Route.extend({
    service:Ember.inject.service('common-service'),
    beforeModel()
    {
      if (!localStorage.getItem('user_id'))
      {
        this.transitionTo('accounts');
      }
      
    },
    model()
    {
      return $.get(this.get('service').getRequestURL()+"/people/"+localStorage.getItem('user_id'));
    },
    setupController(controller,model)
    {
        controller.set('model',JSON.parse(model));
    },
    afterModel()
    {
      this.transitionTo('user.profile');
    }
    
});
