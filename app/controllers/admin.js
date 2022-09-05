import Ember from "ember";

export default Ember.Controller.extend({
  navContent: [
    {
      text: "Manage",
      icon: "vaccines",
      link: "admin.manage",
    },
  ],
});
