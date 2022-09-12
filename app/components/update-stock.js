import Ember from "ember";

export default Ember.Component.extend({
  stock: 0,
  didReceiveAttrs() {
    let initialStock = this.get("initialStock");
    this.stock = initialStock;
  },
  actions: {
    updateStock() {
      this.sendAction("updateStock", this.get("stock"), this.get("cityID"));
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
