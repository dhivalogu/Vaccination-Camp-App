import Ember from 'ember';

export default Ember.Controller.extend({
 userController:Ember.inject.controller('user'),
 actions:{
    logout(){
        localStorage.removeItem('user_id');
        this.transitionToRoute('accounts');
    }
 }
});
