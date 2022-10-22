import Ember from "ember";

export default Ember.Route.extend({
  model(params) {
    return this.modelFor("admin").findBy("cityID", Number(params.cityID));
  },
  setupController(controller, model) {
    $.getJSON("/assets/json/cities.json", (data) => {
      controller.set("citiesJSON", data);
    });
    controller.set("model", model);
    if (model.camp) {
      console.log(true);
      controller.set("campAvailable", true);
    } else {
      console.log(false);
      controller.set("campAvailable", false);
    }
  },
  actions:{
    refreshCamp()
    {
      this.refresh();
    }
  }
});
