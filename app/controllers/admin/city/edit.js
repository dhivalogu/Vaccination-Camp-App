import Ember from "ember";

export default Ember.Controller.extend({
  adminController: Ember.inject.controller("admin"),
  actions: {
    test() {
      console.log(this.get("model"));
      console.log(this.get("model"));
      console.log();
    },
    campAdded() {
      this.get("adminController").send("refreshModel");
    },
  },
});
