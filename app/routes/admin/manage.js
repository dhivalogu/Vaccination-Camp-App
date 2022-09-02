import Ember from 'ember';

export default Ember.Route.extend({

    setupController(controller,model)
    {
        
        controller.set('model',this.controllerFor('admin').get('model'));
    }
});
