import Ember from 'ember';

export default Ember.Controller.extend({
    names: ["Yehuda", "Tom"],
    actions: {
           selectVehicle(vehicle) {
            console.log(vehicle);
             this.set('vehicle', vehicle);
            }
         }
});
