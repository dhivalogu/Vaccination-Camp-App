import Ember from "ember";

export default Ember.Controller.extend({
  service: Ember.inject.service("common-service"),
  aadharID: "",
  mobile: "",
  firstName: "",
  lastName: "",
  dob: "",
  dosageCount: "",
  maxDate: Ember.computed(() => {
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    maxDate = maxDate.toISOString().slice(0, 10);
    console.log(maxDate);
    return maxDate;
  }),
  actions: {
    register() {
      let requestJSON = JSON.stringify({
        AADHAR: this.get("aadharID"),
        firstName: this.get("firstName"),
        lastName: this.get("lastName"),
        DOB: this.get("dob"),
        mobile: this.get("mobile"),
        dosageCount: "",
      });
      console.log(requestJSON);
      $.post(
        this.get("service").getRequestURL() + "/people",
        requestJSON,
        (data, status) => {
          let responseJSON = JSON.parse(data);
          console.log(responseJSON);
          if (responseJSON.ID == this.get("aadharID")) {
            const modal = document.getElementById(
              "registration-modal-container"
            );
            modal.style.display = "flex";
            modal.style.visibility = "visible";
          }
          console.log(responseJSON["status-code"]);
          if (responseJSON["status-code"] == "409") {
            this.set(
              "errorMessage",
              "Account with the given AADHAR ID already exists"
            );
            this.get("service").triggerError();
          }
        }
      );
    },
  },
});
