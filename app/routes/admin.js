import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel()
    {
        console.log(localStorage.getItem("user_id"));
    }
});
