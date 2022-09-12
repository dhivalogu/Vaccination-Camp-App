import Ember from "ember";

export default Ember.Route.extend({
  beforeModel() {
    if (localStorage.getItem("accessLevel") == 2) {
      this.transitionTo("admin.manage");
    } else if (localStorage.getItem("accessLevel") == 1) {
      this.transitionTo("user");
    }
  },
});
