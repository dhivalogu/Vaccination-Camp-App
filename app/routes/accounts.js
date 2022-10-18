import Ember from "ember";

export default Ember.Route.extend({
  service: Ember.inject.service("common-service"),
  beforeModel() {
    $.ajaxSetup({
      crossDomain: true,
      xhrFields: {
          withCredentials: true
      }
  });
    $.get(this.get("service").getRequestURL() + "/authentication").then((data,status,xhr)=>{
      if(xhr.status==200)
      {
        var auth=JSON.parse(data);
        if(auth.accessLevel==1)
        {
          this.transitionTo("user");
        }
        else if(auth.accessLevel==2)
        {
          this.transitionTo("admin.manage");
        }
      }
    })
  },
});
