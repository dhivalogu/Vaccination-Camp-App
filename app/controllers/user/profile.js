import Ember from "ember";

export default Ember.Controller.extend({
  userController: Ember.inject.controller("user"),
  actions: {
    logout() {
      console.log(this.get("bookingHistory"));
      localStorage.removeItem("user_id");
      this.transitionToRoute("accounts");
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
