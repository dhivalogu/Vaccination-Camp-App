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
      this.set(
        "selectedCity",
        this.get("cityData").find((city) => city.cityID == cityID)
      );
      this.set("cityID", cityID);
      this.set("campList", this.get("selectedCity.campList"));
      document.getElementById("regCamp").classList.remove("hidden");
      /*this.set("choosenCamp", this.get("campList")[0]);
      
      
      
      this.set("choosenSlot", this.get("slotList")[0]);
      
      
      */
    },
    selectCamp(campID) {
      this.set(
        "choosenCamp",
        this.get("campList").findBy("campID", Number(campID))
      );
      this.set("campID", this.get("choosenCamp.campID"));
      console.log(this.get("campID"));
      this.set(
        "slotList",
        this.get("choosenCamp.slotList").filter((slot) => slot.bookings <= 10)
      );
      this.set(
        "availDate",
        Array.from(new Set(this.get("slotList").map((slot) => slot.date)))
      );
      document.getElementById("regDate").classList.remove("hidden");
    },
    selectDate(date) {
      this.set("choosenDate", date);
      this.set(
        "availSession",
        this.get("slotList")
          .filter((slot) => slot.date == this.get("choosenDate"))
          .map((slot) => slot.session)
      );
      document.getElementById("regSession").classList.remove("hidden");
    },
    selectSession(session) {
      this.set("session", session);
      document.getElementById("regButton").classList.remove("hidden");
    },
    book() {
      let slotList = this.get("slotList");
      let slot = slotList.find(
        (s) =>
          s.date == this.get("choosenDate") && s.session == this.get("session")
      );
      this.set("slotID", slot.slotID);
      let bookingRequest = {
        aadharID: this.get("userData.AadharID"),
      };
      console.log(bookingRequest);
      $.post(
        this.get("service").getRequestURL() + "/cities/"+this.get("cityID")+"/camps/"+this.get("campID")+"/slots/"+this.get("slotID")+"/bookings",
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
