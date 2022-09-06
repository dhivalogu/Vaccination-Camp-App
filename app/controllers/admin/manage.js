import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    addCity() {
      document
        .getElementById("registration-modal-container")
        .classList.remove("hidden");
      document.getElementById("registration-modal-container").style.display =
        "flex";
    },
  },
});
