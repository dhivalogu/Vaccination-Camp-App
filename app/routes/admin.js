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
      return $.get(
        this.get('service').getRequestURL()+"/cities"
      );
    },
    setupController(controller,model)
    {
      controller.set('model',JSON.parse(model));
    }
});
