import Ember from "ember";

export default Ember.Service.extend({
  url: "http://localhost:8080/VaccinationApp",
  namespace: "/api",
  user: [],
  getRequestURL() {
    return this.url + this.namespace;
  },
  triggerError() {
    document.getElementById("errorIdentifier").style.display = "flex";
    setTimeout(function () {
      $("#errorIdentifier").fadeOut(1000);
    }, 1000);
  },
});
