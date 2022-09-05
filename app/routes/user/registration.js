import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  model() {
    return $.get(this.get("service").getRequestURL() + "/cities");
  },
  setupController(controller, model) {
    let bookingHistory = this.controllerFor("user")
      .get("model")
      ["bookingList"].filter((booking) => {
        return booking.status == "VACCINATED";
      });
    let upcomingBooking = this.controllerFor("user")
      .get("model")
      ["bookingList"].filter((booking) => {
        return booking.status == "UPCOMING";
      });
    let dosageCount = Number(
      this.controllerFor("user").get("model.dosageCount")
    );
    let hasBookingHistory = bookingHistory.length > 0 ? true : false;
    let hasCompletedVaccination =
      bookingHistory.length > 2 || dosageCount > 2 ? true : false;
    let hasUpcomingBooking = upcomingBooking.length > 0 ? true : false;
    controller.set("hasCompletedVaccination", hasCompletedVaccination);
    controller.set("hasUpcomingBooking", hasUpcomingBooking);
    controller.set("userData", this.controllerFor("user").get("model"));
    controller.set("cityData", JSON.parse(model));

    if (!hasUpcomingBooking) {
      if (hasBookingHistory) {
        if (bookingHistory.length > 2) {
          controller.set("eligibleForBooking", false);
          controller.set(
            "ineligibiltyReason",
            "Kudos, You have completed your vaccination"
          );
          return true;
        }
        const lastVaccinationDate = new Date(
          bookingHistory[bookingHistory.length - 1].date
        );
        const today = new Date();
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(
          Math.abs((today - lastVaccinationDate) / oneDay)
        );
        if (diffDays > 45) {
          controller.set("eligibleForBooking", true);
          return true;
        } else {
          controller.set("eligibleForBooking", false);
          controller.set(
            "ineligibiltyReason",
            "You are eligibile to book only after 45 days of previous booking"
          );
        }
      } else return true;
    } else {
      controller.set("eligibleForBooking", false);
      controller.set(
        "ineligibiltyReason",
        "Oops!You Already Have An Upcoming Booking"
      );
    }
  },
  actions: {
    refreshModel() {
      this.controllerFor("user").refreshModel();
    },
  },
});
