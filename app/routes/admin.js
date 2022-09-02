import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    if (!localStorage.getItem("user_id")) {
      this.transitionTo("accounts");
    }
  },
  model() {
    return $.getJSON(this.get("service").getRequestURL() + "/cities");
  },
  actions: {
    refreshModel() {
      console.log("You Rock x3");
      this.refresh();
    },
  },
});
