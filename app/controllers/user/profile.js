import Ember from "ember";

export default Ember.Controller.extend({
  userController: Ember.inject.controller("user"),
  actions: {
    logout() {
   
      this.transitionToRoute("logout");
    },
    viewBooking(booking) {
      this.set("choosenBooking", booking);
      document
        .getElementById("registration-modal-container")
        .classList.remove("hidden");
      document.getElementById("registration-modal-container").style.display =
        "flex";
    },
  },
});
