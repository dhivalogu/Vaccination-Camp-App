import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    if(this.get('service').getCookies("user"))
    {
      if(this.get('service').getCookies("accessLevel")==2)
      {
        this.transitionTo("admin.manage")
      }
    }
    else
    {
      this.transitionTo("accounts");
    }
  },
  model() {
    $.ajaxSetup({
      crossDomain: true,
      xhrFields: {
          withCredentials: true
      }
  });
    return $.get(
      this.get("service").getRequestURL() +
        "/people/" 
    );
  },
  setupController(controller, model) {
    controller.set("model", JSON.parse(model));
  },
  afterModel() {
    this.transitionTo("user.profile");
  },
  actions: {
    invModel() {
      this.refresh();
    },
  },
});
