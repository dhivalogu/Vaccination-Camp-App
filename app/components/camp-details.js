import Ember from "ember";

export default Ember.Component.extend({
  service: Ember.inject.service("common-service"),
  didReceiveAttrs() {
    console.log(this.get("camp"));
    this.set("choosenSlot", this.get("camp.slotList")[0]);
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
    test1() {
      console.log("Sucess1");
    },
    chooseSlot(slotID) {
      this.set(
        "choosenSlot",
        this.get("camp.slotList").findBy("slotID", Number(slotID))
      );
      console.log(this.get("choosenSlot"));
    },
  },
});
