import Ember from 'ember';

export default Ember.Controller.extend({

    navContent:[
        {
            text:"Profile",
            icon:"person",
            link:"user.profile"
        },
        {
            text:"Register for Vaccination",
            icon:"vaccines",
            link:"user.registration"

        }
    ],
    refreshModel()
    {
            console.log("At User Controller");
            this.send('invModel');
    }
});
