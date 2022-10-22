import Ember from "ember";
export default Ember.Controller.extend({
  service: Ember.inject.service("common-service"),
  id: "",
  password: "",
  errorMessage: "",
  isError: false,
  isCredentialValid() {
    let idRegex = new RegExp("[a-z0-9]{5,12}");
    let passwordRegex = new RegExp("[a-zA-Z0-9]{8,12}");
    console.log(passwordRegex.test(this.get("password")));
    if (
      idRegex.test(this.get("id")) &&
      passwordRegex.test(this.get("password"))
    )
      return true;
    else return false;
  },
  actions: {
    authenticate() {
      if (this.isCredentialValid()) {
        let requestJSON = JSON.stringify({
          username: this.id,
          password: this.password,
        });
        console.log(requestJSON);
        $.ajaxSetup({
          crossDomain: true,
          xhrFields: {
              withCredentials: true
          }
      });
        $.post(
          this.get("service").getRequestURL() + "/accounts/authentication",
          requestJSON,
          (data) => {
            this.set("id","");
            this.set("password","");
            let response = JSON.parse(data);
            console.log(response);
            if (response.accessLevel == "2") {
              this.transitionToRoute("admin.manage");
            } else if (response.accessLevel == "1") {
              this.transitionToRoute("user");
            } else {
              this.set("errorMessage", "Wrong User ID/Password");
              this.set("isError", true);
            }
          }
        );
      } else {
        this.set("isError", true);
        this.set("errorMessage", "Enter a valid User ID & Password");
      }
    },
  },
});
