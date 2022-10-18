import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    debugger;
    if(localStorage.getItem("user"))
    {
      if(localStorage.getItem("accessLevel")==1)
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
