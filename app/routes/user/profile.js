import Ember from 'ember';

export default Ember.Route.extend({

    service:Ember.inject.service('common-service'),
    setupController(controller,model)
    {
       
        let bookingHistory=this.controllerFor('user').get('model')['bookingList'].filter((booking)=>{
            return booking.status=="VACCINATED";
        });
        let upcomingBooking=this.controllerFor('user').get('model')['bookingList'].filter((booking)=>{
            return booking.status=="UPCOMING";
        });
        let hasBookingHistory= bookingHistory.length>0?true:false;
        let hasUpcomingBooking= upcomingBooking.length>0?true:false;
        controller.set('model',this.controllerFor('user').get('model'));
        controller.set('bookingHistory',bookingHistory);
        controller.set('upcomingBooking',upcomingBooking);
        controller.set('hasBookingHistory',hasBookingHistory);
        controller.set('hasUpcomingBooking',hasUpcomingBooking);
        
    }
});
