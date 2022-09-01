import Ember from 'ember';

export default Ember.Route.extend({
    service:Ember.inject.service('common-service'),
    model()
    {
        return $.get(this.get('service').getRequestURL()+"/cities");
    },
    setupController(controller,model)
    {
        console.log(JSON.parse(model));
        controller.set("userData",this.controllerFor('user').get('model'));
        controller.set("cityData",JSON.parse(model));
    },
    actions:
    {
        refreshModel()
        {
            this.controllerFor('user').refreshModel();
        }
    }
});
