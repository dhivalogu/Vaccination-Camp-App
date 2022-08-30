import Ember from 'ember';

export default Ember.Service.extend({
    url:"http://localhost:8080/VaccinationApp",
    namespace:'/api',
    getRequestURL()
    {
        return this.url+this.namespace;
    }
});
