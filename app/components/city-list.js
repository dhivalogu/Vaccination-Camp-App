import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    addCity() {
      this.sendAction("addCity");
    },
  },
});
