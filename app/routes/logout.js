import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    localStorage.clear();
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    $.get(
      this.get("service").getRequestURL() +
        "/invalidate" 
    );
    this.replaceWith("accounts.login");
  },
});
