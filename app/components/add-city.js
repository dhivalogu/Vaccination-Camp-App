import Ember from "ember";

export default Ember.Component.extend({
  service: Ember.inject.service("common-service"),
  didReceiveAttrs() {
    $.getJSON("/assets/json/cities.json", (data) => {
      this.set("city", data);
      this.set("stock", 200);
      this.filterExistingCity();
    });
  },
  filterExistingCity() {
    let cityData = this.get("cityData");
    let cityArray = cityData.map((city) => city.name);
    let filteredCities = this.get("city").filter((city) => {
      return !cityArray.includes(city.name);
    });
    this.set("city", filteredCities);
    this.set("cityName", this.get("city")[0].name);
  },
  actions: {
    closeModal() {
      document
        .getElementById("registration-modal-container")
        .classList.add("hidden");
      document.getElementById("registration-modal-container").style.display =
        "none";
    },
    selectCity(cityName) {
      this.set("cityName", cityName);
    },
    addCity() {
      let requestJSON = JSON.stringify({
        cityName: this.get("cityName"),
        stock: this.get("stock"),
      });
      console.log(requestJSON);
      $.post(
        this.get("service").getRequestURL() + "/cities",
        requestJSON,
        (data, status) => {
          console.log(data);
          console.log(status);
          if (status == "success") {
            let responseJSON = JSON.parse(data);
            this.sendAction("insertCity", responseJSON);
            this.filterExistingCity();
            this.actions.closeModal();
          }
        }
      );
    },
  },
});
