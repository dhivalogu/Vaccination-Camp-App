import Ember from "ember";

export default Ember.Component.extend({
  service: Ember.inject.service("common-service"),
  didReceiveAttrs() {
    console.log(this.get("campList"));
    this.set("choosenCamp", this.get("campList")[0]);
    this.set("choosenSlot", this.get("choosenCamp.slotList")[0]);
  },
  actions: {
    approveVaccination(bookingID) {
      if (
        this.get("choosenSlot.bookingList").findBy("bookingID", bookingID)[
          "status"
        ] != "VACCINATED"
      ) {
        let requestJSON = JSON.stringify({
          bookingID: bookingID,
        });
        $.ajax({
          url:
            this.get("service").getRequestURL() +
            "/cities/camps/slots/bookings",
          method: "PUT",
          crossDomain: true,
          data: requestJSON,
          success: (data) => {
            console.log(data);
            Ember.set(
              this.get("choosenSlot.bookingList").findBy(
                "bookingID",
                bookingID
              ),
              "status",
              "VACCINATED"
            );
            this.sendAction("addVaccinatedCount", this.get("camp.cityID"));
          },
        });
      }
    },
    chooseCamp(campID) {
      this.set(
        "choosenCamp",
        this.get("campList").findBy("campID", Number(campID))
      );
      this.set("choosenSlot", this.get("choosenCamp.slotList")[0]);
      console.log(this.get("choosenCamp"));
    },
    chooseSlot(slotID) {
      this.set(
        "choosenSlot",
        this.get("choosenCamp.slotList").findBy("slotID", Number(slotID))
      );
      console.log(this.get("choosenSlot"));
    },
  },
});
