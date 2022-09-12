import Ember from "ember";

export default Ember.Route.extend({
  beforeModel() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("accessLevel");
    this.replaceWith("accounts.login");
  },
});
