import Ember from 'ember';

export default Ember.Route.extend({

    
    setupController(controller,model)
    {
        let bookingHistory=this.controllerFor('user').get('model')['bookingList'].filter((booking)=>{
            return booking.status=="VACCINATED";
        });
        let upcomingBooking=this.controllerFor('user').get('model')['bookingList'].filter((booking)=>{
            return booking.status=="UPCOMING";
        });
        console.log(bookingHistory);
        controller.set('model',this.controllerFor('user').get('model'));
        controller.set('bookingHistory',bookingHistory);
        controller.set('upcomingBooking',upcomingBooking);
    }
});
