import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("admin").findBy("cityID", Number(params.cityID));
  },
  setupController(controller, model) {
    controller.set("model", model);
    if (model.camp) {
      console.log(true);
      controller.set("campAvailable", true);
    } else {
      console.log(false);
      controller.set("campAvailable", false);
    }
  },
});
