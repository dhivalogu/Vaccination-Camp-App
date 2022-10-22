import Ember from "ember";

export default Ember.Component.extend({
  service: Ember.inject.service("common-service"),
  fromDate: "",
  toDate: "",
  address: "",
  cityID: "",
  minDate: Ember.computed(() => {
    let today = new Date();
    today = today.toISOString().slice(0, 10);
    console.log(today);
    return today;
  }),
  actions: {
    addCamp() {
      let requestJSON = JSON.stringify({
        address: this.get("address"),
        beginDate: this.get("fromDate"),
        endDate: this.get("toDate"),
      });
      console.log(requestJSON);
      let requestURL = this.get("service").getRequestURL() + "/cities/"+this.get("cityID")+"/camps";
      console.log(requestURL);
      console.log("Before sending Request");
      $.post(requestURL, requestJSON, (data, status) => {
        console.log(data);
        let response = JSON.parse(data);
        console.log(response["status-code"]);
        this.sendAction("refresh");
      });
    },
    setCity(cityID) {
      console.log(cityID);
      this.set("cityID", cityID);
    },
  },
});
