import Ember from "ember";

export default Ember.Component.extend({
  service: Ember.inject.service("common-service"),
  fromDate: "",
  toDate: "",
  address: "",
  cityID: "",
  actions: {
    test() {
      let requestJSON = JSON.stringify({
        cityID: this.get("cityID"),
        address: this.get("address"),
        beginDate: this.get("fromDate"),
        endDate: this.get("toDate"),
      });
      console.log(requestJSON);
      let requestURL = this.get("service").getRequestURL() + "/cities/camps";
      console.log(requestURL);
      $.post(requestURL, requestJSON, (data, status) => {
        console.log(data);
        let response = JSON.parse(data);
        console.log(response["status-code"]);
        this.sendAction("campAdded");
      });
    },
    setCity(cityID) {
      console.log(cityID);
      this.set("cityID", cityID);
    },
  },
});