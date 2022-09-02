import Ember from 'ember';

export default Ember.Route.extend({
    

    setupController(controller,model)
    {
        let cityData=this.controllerFor('admin').get('model');
        controller.set('cityData',cityData);
    }
});
