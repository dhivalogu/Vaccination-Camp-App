import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    closeModal() {
      document
        .getElementById("registration-modal-container")
        .classList.add("hidden");
      document.getElementById("registration-modal-container").style.display =
        "none";
    },
  },
});
