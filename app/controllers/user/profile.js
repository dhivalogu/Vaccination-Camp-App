import Ember from 'ember';

export default Ember.Controller.extend({
 userController:Ember.inject.controller('user'),
 bookingHistory:Ember.computed(()=>
 {
    let userData=this.get('model');
    console.log(userData.bookingList);
    return "yes";
 }),
 actions:{
    logout(){
        console.log(this.get('bookingHistory'));
        localStorage.removeItem('user_id');
        this.transitionToRoute('accounts');
    }
 }
});
