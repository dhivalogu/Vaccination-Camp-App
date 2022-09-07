import Ember from "ember";

export default Ember.Controller.extend({
  service: Ember.inject.service("common-service"),
  userController: Ember.inject.controller("user"),
  date: "",
  sessionData: [
    "Morning(7 AM to 11 AM)",
    "Noon(12 PM to 3PM)",
    "Evening(4 PM to 6PM)",
  ],
  cityNotSelected: true,
  errorMessage: "No Error",
  actions: {
    selectCity(cityID) {
      let selectedCity = this.get("cityData").find(
        (city) => city.cityID == cityID
      );
      console.log(selectedCity);
      this.set("cityID", cityID);
      this.set("camp", selectedCity.camp);
      console.log("Camp", this.get("camp"));
      let slotList = this.get("camp.slotList");
      let date = slotList
        .filter((slot) => {
          return slot.bookings < 10;
        })
        .map((slot) => slot.date);
      this.set("availDates", new Set(date));
      console.log(date);
      this.set("date", this.get("availDates")[0]);
      this.set("session", this.get("sessionData")[0]);
      document.getElementById("regDate").classList.remove("hidden");
      document.getElementById("regSession").classList.remove("hidden");
      document.getElementById("regButton").classList.remove("hidden");
    },
    selectDate(date) {
      this.set("date", date);
    },
    selectSession(session) {
      this.set("session", session);
    },
    book() {
      let slotList = this.get("camp.slotList");
      let slot = slotList.find(
        (s) => s.date == this.get("date") && s.session == this.get("session")
      );
      this.set("slotID", slot.slotID);
      let bookingRequest = {
        aadharID: this.get("userData.AadharID"),
        slotID: this.get("slotID"),
        campID: this.get("camp.campID"),
        cityID: this.get("cityID"),
      };
      $.post(
        this.get("service").getRequestURL() + "/cities/camps/slots/bookings",
        JSON.stringify(bookingRequest),
        (response, status) => {
          console.log(response, status);
          this.get("userController").refreshModel();
        }
      );
    },
    triggerError() {
      this.set("errorMessage", "Success");
      this.get("service").triggerError();
    },
  },
});
