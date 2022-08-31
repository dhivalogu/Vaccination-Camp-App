import Ember from 'ember';

export default Ember.Route.extend({

    
    setupController(controller,model)
    {
        console.log(this.controllerFor('user').get('model'));
        controller.set('model',this.controllerFor('user').get('model'));
    }
});
