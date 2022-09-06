import Ember from "ember";

export default Ember.Controller.extend({
  adminController: Ember.inject.controller("admin"),
  actions: {
    test() {
      console.log(this.get("model"));
      console.log(this.get("model"));
      console.log();
    },
    refresh() {
      this.get("adminController").send("refreshModel");
    },
    addVaccinatedCount(cityID) {
      let prevCount = this.get("adminController")
        .get("model")
        .findBy("cityID", cityID)["vaccinatedCount"];

      Ember.set(
        this.get("adminController").get("model").findBy("cityID", cityID),
        "vaccinatedCount",
        Number(prevCount) + 1
      );
      Ember.set(
        this.get("adminController").get("model").findBy("cityID", cityID),
        "stock",
        Number(prevCount) - 1
      );
    },
  },
});
