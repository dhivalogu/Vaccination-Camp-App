import Ember from 'ember';

export default Ember.Controller.extend({

    navContent:[
        {
            text:"Add Camp",
            icon:"add_circle",
            link:"admin.city.camp"
        },
        {
            text:"Manage",
            icon:"vaccines",
            link:"admin.manage"
        }
    ],
});
