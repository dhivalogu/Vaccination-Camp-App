import Ember from "ember";

export default Ember.Service.extend({
  url: "http://localhost:8081",
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
  getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
  }
});
