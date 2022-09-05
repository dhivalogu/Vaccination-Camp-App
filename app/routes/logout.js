import Ember from "ember";

export default Ember.Route.extend({
  beforeModel() {
    localStorage.removeItem("user_id");
    this.replaceWith("accounts.login");
  },
});
