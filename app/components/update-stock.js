import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    updateStock() {
      this.sendAction("updateStock", this.get("stock"));
      this.actions.closeModal();
    },
    closeModal() {
      document
        .getElementById("registration-modal-container")
        .classList.add("hidden");
      document.getElementById("registration-modal-container").style.display =
        "none";
    },
  },
});
