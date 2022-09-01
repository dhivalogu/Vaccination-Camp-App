import Ember from 'ember';

export default Ember.Route.extend({
    service:Ember.inject.service('common-service'),
    model()
    {
        return $.get(this.get('service').getRequestURL()+"/cities");
    }
});
