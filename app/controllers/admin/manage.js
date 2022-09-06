import Ember from "ember";

export default Ember.Controller.extend({
  adminController: Ember.inject.controller("admin"),
  actions: {
    addCity() {
      document
        .getElementById("registration-modal-container")
        .classList.remove("hidden");
      document.getElementById("registration-modal-container").style.display =
        "flex";
    },
    insertCity(newCity) {
      console.log(newCity);
      console.log(this.get("adminController").get("model").pushObject(newCity));
      this.send("refreshJSON");
    },
  },
});
