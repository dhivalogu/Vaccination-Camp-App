import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel()
    {
        if(localStorage.getItem("user_id")=="admin")
        {
            this.transitionTo('admin');
        }
    }
});
