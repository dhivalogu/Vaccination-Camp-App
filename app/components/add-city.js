import Ember from "ember";

export default Ember.Component.extend({
  didReceiveAttrs() {
    $.getJSON("/assets/json/cities.json", (data) => {
      this.set("city", data);
      this.set("cityName", data[0].name);
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
      let responseJSON = {
        cityID: 1,
        name: this.get("cityName"),
        stock: this.get("stock"),
        vaccinatedCount: 0,
      };
      this.sendAction("insertCity", responseJSON);
      this.filterExistingCity();
      this.actions.closeModal();
    },
  },
});
