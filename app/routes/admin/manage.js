import Ember from "ember";

export default Ember.Route.extend({
  setupController(controller, model) {
    $.getJSON("/assets/json/cities.json", (data) => {
      controller.set("citiesJSON", data);
    });
    controller.set("model", this.controllerFor("admin").get("model"));
  },
});
