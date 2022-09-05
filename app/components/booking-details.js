import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    test() {
      console.log(this.get("booking"));
    },
  },
});
