import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    if(this.get('service').getCookies("user"))
    {
      if(this.get('service').getCookies("accessLevel")==1)
      {
        this.transitionTo("user")
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
    return $.getJSON(this.get("service").getRequestURL() + "/cities");
  },
  actions: {
    refreshModel() {
      console.log("You Rock x3");
      this.refresh();
    },
  },
});
