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
    print() {
      document.title = "Certificate of Vaccination";
      window.print();
      document.title = "Vaccination App";
    },
  },
});
