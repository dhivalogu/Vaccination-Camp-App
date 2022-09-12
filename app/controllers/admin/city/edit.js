import Ember from "ember";

export default Ember.Controller.extend({
  adminController: Ember.inject.controller("admin"),
  service: Ember.inject.service("common-service"),
  actions: {
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
    editStock() {
      document
        .getElementById("registration-modal-container")
        .classList.remove("hidden");
      document.getElementById("registration-modal-container").style.display =
        "flex";
    },
    updateStock(stock, cityID) {
      console.log("Stock Updated" + stock + cityID);
      let requestJSON = JSON.stringify({
        stock: stock,
      });

      $.ajax({
        url: this.get("service").getRequestURL() + "/cities/" + cityID,
        type: "put",
        data: requestJSON,
        success: (data, status) => {
          console.log(data, status);
          Ember.set(
            this.get("adminController").get("model").findBy("cityID", cityID),
            "stock",
            stock
          );
        },
      });
    },
  },
});
